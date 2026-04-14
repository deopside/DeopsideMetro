export function findShortestPath(startId, endId, graph) {
  if (!startId || !endId || !graph[startId] || !graph[endId]) {
    return [];
  }

  if (startId === endId) {
    return [graph[startId]];
  }

  const visited = new Set([startId]);
  const queue = [[startId]];

  while (queue.length > 0) {
    const path = queue.shift();
    const currentId = path[path.length - 1];
    const currentStation = graph[currentId];

    for (const neighborId of currentStation.connections) {
      if (visited.has(neighborId) || !graph[neighborId]) {
        continue;
      }

      const nextPath = [...path, neighborId];

      if (neighborId === endId) {
        return nextPath.map((stationId) => graph[stationId]);
      }

      visited.add(neighborId);
      queue.push(nextPath);
    }
  }

  return [];
}

export async function findShortestPathAsync(startId, endId, graph, chunkSize = 200) {
  if (!startId || !endId || !graph[startId] || !graph[endId]) {
    return [];
  }

  if (startId === endId) {
    return [graph[startId]];
  }

  const visited = new Set([startId]);
  const queue = [[startId]];
  let processed = 0;

  while (queue.length > 0) {
    const path = queue.shift();
    const currentId = path[path.length - 1];
    const currentStation = graph[currentId];

    for (const neighborId of currentStation.connections) {
      if (visited.has(neighborId) || !graph[neighborId]) {
        continue;
      }

      const nextPath = [...path, neighborId];

      if (neighborId === endId) {
        return nextPath.map((stationId) => graph[stationId]);
      }

      visited.add(neighborId);
      queue.push(nextPath);
    }

    processed += 1;
    if (processed % chunkSize === 0) {
      await new Promise((resolve) => setTimeout(resolve, 0));
    }
  }

  return [];
}

const MCD_LINES = new Set(["131", "132", "135", "136"]);
const DEFAULT_OPTIONS = {
  transferPenalty: 8,
  mcdPenalty: 12,
  maxAlternatives: 3,
  maxIterations: 12000,
  chunkSize: 250,
};

function edgeCost(fromStation, toStation, options) {
  let cost = 1;
  if (fromStation.line !== toStation.line) {
    cost += options.transferPenalty;
  }
  if (MCD_LINES.has(fromStation.line) || MCD_LINES.has(toStation.line)) {
    cost += options.mcdPenalty;
  }
  return cost;
}

function pathStats(path, options) {
  if (!path.length) {
    return { stations: 0, transfers: 0, cost: 0, estimatedTime: 0 };
  }

  let transfers = 0;
  let cost = 0;

  for (let i = 0; i < path.length - 1; i += 1) {
    const current = path[i];
    const next = path[i + 1];
    if (current.line !== next.line) {
      transfers += 1;
    }
    cost += edgeCost(current, next, options);
  }

  const stations = path.length;
  const estimatedTime = stations * 2.5 + transfers * 5;
  return { stations, transfers, cost, estimatedTime };
}

function queuePush(queue, item) {
  queue.push(item);
  queue.sort((a, b) => a.cost - b.cost);
}

export async function findRouteAlternativesAsync(startId, endId, graph, userOptions = {}) {
  const options = { ...DEFAULT_OPTIONS, ...userOptions };

  if (!startId || !endId || !graph[startId] || !graph[endId]) {
    return [];
  }

  if (startId === endId) {
    const station = graph[startId];
    return [
      {
        path: [station],
        ...pathStats([station], options),
      },
    ];
  }

  const queue = [{ ids: [startId], cost: 0 }];
  const completed = [];
  const seenPaths = new Set();
  let processed = 0;

  while (
    queue.length > 0 &&
    completed.length < options.maxAlternatives &&
    processed < options.maxIterations
  ) {
    const current = queue.shift();
    const lastId = current.ids[current.ids.length - 1];

    if (lastId === endId) {
      const signature = current.ids.join(">");
      if (!seenPaths.has(signature)) {
        seenPaths.add(signature);
        const path = current.ids.map((id) => graph[id]);
        completed.push({
          path,
          ...pathStats(path, options),
        });
      }
      continue;
    }

    const lastStation = graph[lastId];
    for (const neighborId of lastStation.connections || []) {
      if (!graph[neighborId]) continue;
      if (current.ids.includes(neighborId)) continue;

      const neighborStation = graph[neighborId];
      queuePush(queue, {
        ids: [...current.ids, neighborId],
        cost: current.cost + edgeCost(lastStation, neighborStation, options),
      });
    }

    processed += 1;
    if (processed % options.chunkSize === 0) {
      await new Promise((resolve) => setTimeout(resolve, 0));
    }
  }

  completed.sort((a, b) => {
    if (a.cost !== b.cost) return a.cost - b.cost;
    if (a.transfers !== b.transfers) return a.transfers - b.transfers;
    return a.stations - b.stations;
  });

  return completed.slice(0, options.maxAlternatives);
}
