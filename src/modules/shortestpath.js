import Queue from "./queue.js";

// TODO need to get the path to the target. Currently gets accurate number of steps to target

class Node {
  constructor(x, y, numberOfMoves) {
    this.x = x;
    this.y = y;
    this.numberOfMoves = numberOfMoves;
  }

  getPositionString() {
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
  const paths = [];

  queue.enqueue(startNode);

  const visitedNodes = new Set();

  while (!queue.isEmpty) {
    const node = queue.dequeue();
    const { x, y, numberOfMoves } = node;

    if (x === targetX && y === targetY) return numberOfMoves;

    visitedNodes.add(node.getPositionString());

    for (const neighbor of getNeighbors(x, y)) {
      const [neighborX, neighborY] = neighbor;
      const neighborNode = new Node(neighborX, neighborY, numberOfMoves + 1);

      if (visitedNodes.has(neighborNode.getPositionString())) continue;

      queue.enqueue(neighborNode);
    }
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