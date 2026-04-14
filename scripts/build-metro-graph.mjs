import fs from "node:fs/promises";
import path from "node:path";

const API_URL = "https://api.hh.ru/metro/1";
const OUTPUT_PATH = path.resolve(process.cwd(), "src/data/metro-graph.json");
const OVERRIDES_PATH = path.resolve(process.cwd(), "scripts/transfer-overrides.json");

// Metro + BKL + MCC + MCD + Troitskaya
const INCLUDED_LINE_IDS = new Set([
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "95",
  "97",
  "98",
  "131",
  "132",
  "133",
  "135",
  "136",
  "137",
]);

const RUS_TO_LAT = {
  а: "a",
  б: "b",
  в: "v",
  г: "g",
  д: "d",
  е: "e",
  ё: "e",
  ж: "zh",
  з: "z",
  и: "i",
  й: "y",
  к: "k",
  л: "l",
  м: "m",
  н: "n",
  о: "o",
  п: "p",
  р: "r",
  с: "s",
  т: "t",
  у: "u",
  ф: "f",
  х: "h",
  ц: "ts",
  ч: "ch",
  ш: "sh",
  щ: "sch",
  ъ: "",
  ы: "y",
  ь: "",
  э: "e",
  ю: "yu",
  я: "ya",
};

function normalizeName(name) {
  return name.toLowerCase().replace(/ё/g, "е").replace(/\s+/g, " ").trim();
}

function transliterate(value) {
  return value
    .toLowerCase()
    .split("")
    .map((ch) => RUS_TO_LAT[ch] ?? ch)
    .join("");
}

function slugify(value) {
  return transliterate(value)
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");
}

function distanceKm(a, b) {
  const R = 6371;
  const dLat = ((b.lat - a.lat) * Math.PI) / 180;
  const dLng = ((b.lng - a.lng) * Math.PI) / 180;
  const x =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((a.lat * Math.PI) / 180) *
      Math.cos((b.lat * Math.PI) / 180) *
      Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(x));
}

function pairKey(a, b) {
  return [a, b].sort().join("::");
}

async function loadOverrides() {
  try {
    const content = await fs.readFile(OVERRIDES_PATH, "utf8");
    const data = JSON.parse(content);
    return {
      whitelist: Array.isArray(data.whitelist) ? data.whitelist : [],
      blacklist: Array.isArray(data.blacklist) ? data.blacklist : [],
    };
  } catch {
    return { whitelist: [], blacklist: [] };
  }
}

function resolveNodeId(ref, maps) {
  if (typeof ref === "string") {
    return maps.byNodeId.get(ref) ? ref : maps.bySourceId.get(ref);
  }

  if (!ref || typeof ref !== "object") {
    return undefined;
  }

  if (ref.nodeId && maps.byNodeId.has(ref.nodeId)) {
    return ref.nodeId;
  }

  if (ref.sourceId && maps.bySourceId.has(ref.sourceId)) {
    return maps.bySourceId.get(ref.sourceId);
  }

  if (ref.lineId && ref.name) {
    const sourceId = maps.byLineAndName.get(
      `${ref.lineId}::${normalizeName(ref.name)}`
    );
    return sourceId ? maps.bySourceId.get(sourceId) : undefined;
  }

  return undefined;
}

function resolvePair(entry, maps) {
  if (Array.isArray(entry) && entry.length === 2) {
    const a = resolveNodeId(entry[0], maps);
    const b = resolveNodeId(entry[1], maps);
    return a && b ? [a, b] : undefined;
  }

  if (entry && typeof entry === "object") {
    const a = resolveNodeId(entry.a, maps);
    const b = resolveNodeId(entry.b, maps);
    return a && b ? [a, b] : undefined;
  }

  return undefined;
}

function shouldAutoTransfer(a, b) {
  const sameName = normalizeName(a.name) === normalizeName(b.name);
  const dist = distanceKm(a, b);
  const closeByName = sameName && dist <= 0.6;
  const nearSamePoint = dist <= 0.12;
  return closeByName || nearSamePoint;
}

async function build() {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${API_URL}: ${response.status}`);
  }

  const city = await response.json();
  const lines = city.lines.filter((line) => INCLUDED_LINE_IDS.has(line.id));
  const stations = lines.flatMap((line) =>
    [...line.stations]
      .sort((a, b) => a.order - b.order)
      .map((station) => ({
        sourceId: station.id,
        lineId: line.id,
        lineName: line.name,
        color: `#${line.hex_color}`,
        name: station.name,
        lat: station.lat,
        lng: station.lng,
        order: station.order,
      }))
  );

  const byLine = new Map();
  const byLineAndName = new Map();

  for (const station of stations) {
    const key = station.lineId;
    if (!byLine.has(key)) byLine.set(key, []);
    byLine.get(key).push(station);
    byLineAndName.set(`${station.lineId}::${normalizeName(station.name)}`, station.sourceId);
  }

  const baseNameCount = new Map();
  for (const station of stations) {
    const base = slugify(station.name);
    baseNameCount.set(base, (baseNameCount.get(base) ?? 0) + 1);
  }

  const bySourceId = new Map();
  const byNodeId = new Map();

  for (const station of stations) {
    const base = slugify(station.name);
    const nodeId =
      (baseNameCount.get(base) ?? 0) > 1 ? `${base}_l${station.lineId}` : base;
    bySourceId.set(station.sourceId, nodeId);
    byNodeId.set(nodeId, station.sourceId);
  }

  const graph = {};
  for (const lineStations of byLine.values()) {
    lineStations.sort((a, b) => a.order - b.order);
    for (let i = 0; i < lineStations.length; i += 1) {
      const st = lineStations[i];
      const nodeId = bySourceId.get(st.sourceId);
      const connections = [];

      if (i > 0) connections.push(bySourceId.get(lineStations[i - 1].sourceId));
      if (i < lineStations.length - 1) {
        connections.push(bySourceId.get(lineStations[i + 1].sourceId));
      }

      graph[nodeId] = {
        id: nodeId,
        sourceId: st.sourceId,
        name: st.name,
        color: st.color,
        line: st.lineId,
        lineName: st.lineName,
        lat: st.lat,
        lng: st.lng,
        connections: [...new Set(connections)],
        transferConnections: [],
      };
    }
  }

  const transferPairs = new Set();
  for (let i = 0; i < stations.length; i += 1) {
    for (let j = i + 1; j < stations.length; j += 1) {
      const a = stations[i];
      const b = stations[j];
      if (a.lineId === b.lineId) continue;
      if (!shouldAutoTransfer(a, b)) continue;

      const nodeA = bySourceId.get(a.sourceId);
      const nodeB = bySourceId.get(b.sourceId);
      transferPairs.add(pairKey(nodeA, nodeB));
    }
  }

  const overrides = await loadOverrides();
  const maps = { bySourceId, byNodeId, byLineAndName };

  for (const entry of overrides.blacklist) {
    const pair = resolvePair(entry, maps);
    if (!pair) continue;
    transferPairs.delete(pairKey(pair[0], pair[1]));
  }

  for (const entry of overrides.whitelist) {
    const pair = resolvePair(entry, maps);
    if (!pair) continue;
    transferPairs.add(pairKey(pair[0], pair[1]));
  }

  for (const key of transferPairs) {
    const [a, b] = key.split("::");
    if (!graph[a] || !graph[b]) continue;
    graph[a].connections.push(b);
    graph[b].connections.push(a);
    graph[a].transferConnections.push(b);
    graph[b].transferConnections.push(a);
  }

  for (const node of Object.values(graph)) {
    node.connections = [...new Set(node.connections)];
    node.transferConnections = [...new Set(node.transferConnections)];
  }

  const payload = {
    meta: {
      generatedAt: new Date().toISOString(),
      source: API_URL,
      cityId: city.id,
      cityName: city.name,
      linesIncluded: lines.map((line) => ({
        id: line.id,
        name: line.name,
        color: `#${line.hex_color}`,
      })),
      stationCount: Object.keys(graph).length,
      transferEdges: transferPairs.size,
    },
    graph,
  };

  await fs.mkdir(path.dirname(OUTPUT_PATH), { recursive: true });
  await fs.writeFile(OUTPUT_PATH, `${JSON.stringify(payload, null, 2)}\n`, "utf8");

  console.log(`Saved: ${OUTPUT_PATH}`);
  console.log(
    `Stations: ${payload.meta.stationCount}, transfer edges: ${payload.meta.transferEdges}`
  );
}

build().catch((error) => {
  console.error(error);
  process.exit(1);
});
