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
