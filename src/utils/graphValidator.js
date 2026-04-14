export function validateTransferNodes(graph) {
  const issues = [];
  const stationIds = Object.keys(graph);

  for (const stationId of stationIds) {
    const station = graph[stationId];
    const stationName = normalizeName(station.name);
    const transferSet = new Set(station.transferConnections || []);

    for (const neighborId of station.connections || []) {
      const neighbor = graph[neighborId];
      if (!neighbor || neighbor.line === station.line) {
        continue;
      }

      const isSameNamedNode = normalizeName(neighbor.name) === stationName;
      if (!isSameNamedNode) {
        continue;
      }

      if (!transferSet.has(neighborId)) {
        issues.push({
          type: "INVALID_SAME_NAME_CROSS_LINK",
          stationId,
          stationName: station.name,
          line: station.line,
          neighborId,
          neighborLine: neighbor.line,
        });
      }
    }
  }

  return issues;
}

function normalizeName(name) {
  return name.toLowerCase().replace(/ё/g, "е").replace(/\s+/g, " ").trim();
}
