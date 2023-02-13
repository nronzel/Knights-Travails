import Queue from "./queue.js";

class Node {
  constructor(x, y, distanceFromStart) {
    this.x = x;
    this.y = y;
    this.distanceFromStart = distanceFromStart;
  }

  printPositionString() {
    return `${this.x}, ${this.y}`;
  }
}

const validMoves = [
  [1, 2],
  [2, 1],
  [-1, 2],
  [-2, 1],
  [-2, -1],
  [-1, -2],
  [1, -2],
  [2, -1],
];

export function getShortestPath(startX, startY, targetX, targetY) {
  const queue = new Queue();
  const startNode = new Node(startX, startY, 0);

  queue.enqueue(startNode);

  const visitedNodes = new Set();

  while (!queue.isEmpty) {
    const node = queue.dequeue();
    const { x, y, distanceFromStart } = node;

    // if (x < 0 || y < 0) return;
    if (x === targetX && y === targetY) return distanceFromStart;
    visitedNodes.add(node.printPositionString());

    for (const neighbor of getNeighbors(x, y)) {
      const [neighborX, neighborY] = neighbor;
      const neighborNode = new Node(
        neighborX,
        neighborY,
        distanceFromStart + 1
      );

      if (visitedNodes.has(neighborNode.printPositionString())) continue;

      queue.enqueue(neighborNode);
    }
    console.log(visitedNodes);
  }
}

function getNeighbors(x, y) {
  const neighbors = [];

  for (const move of validMoves) {
    const [xChange, yChange] = move;

    const neighborX = x + xChange;
    const neighborY = y + yChange;

    if (neighborX < 0 || neighborX > 7) continue;
    if (neighborY < 0 || neighborY > 7) continue;

    neighbors.push([neighborX, neighborY]);
  }
  return neighbors;
}
