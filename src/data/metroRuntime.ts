import generatedMetro from "@/src/data/metro-graph.json";
import legacyMetro from "@/src/data/metro-graph.legacy.json";

type MetroNode = {
  id: string;
  name: string;
  color: string;
  lineName: string;
  line?: string;
  connections: string[];
  transferConnections?: string[];
};

type MetroPayload = {
  graph?: Record<string, MetroNode>;
};

function isValidGraph(value: unknown): value is Record<string, MetroNode> {
  if (!value || typeof value !== "object") return false;
  const sample = Object.values(value as Record<string, MetroNode>)[0];
  return Boolean(sample && sample.id && sample.name && Array.isArray(sample.connections));
}

const generatedGraph = (generatedMetro as MetroPayload)?.graph;
const legacyGraph = (legacyMetro as MetroPayload)?.graph;
const source = isValidGraph(generatedGraph) ? "generated" : "legacy";

export const runtimeMetroGraph: Record<string, MetroNode> = isValidGraph(generatedGraph)
  ? generatedGraph
  : isValidGraph(legacyGraph)
    ? legacyGraph
    : {};

export const runtimeMetroStations: MetroNode[] = Object.values(runtimeMetroGraph);

console.log(`source: ${source}`);
