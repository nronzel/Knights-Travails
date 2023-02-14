import Queue from "./queue.js";

// TODO need to get the path to the target. Currently gets accurate number of steps to target

class Node {
  constructor(x, y, numberOfMoves, parent = null) {
    this.x = x;
    this.y = y;
    this.numberOfMoves = numberOfMoves;
    this.parent = parent;
  }

  getPositionString() {
    return `${this.x}, ${this.y}`;
  }

  getParent() {
    return this.parent;
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
  const path = [];

  queue.enqueue(startNode);

  const visitedNodes = new Set();

  while (!queue.isEmpty) {
    path.push(queue.dequeue());

    const currentNode = path[path.length - 1];

    const { x, y, numberOfMoves } = currentNode;

    if (x === targetX && y === targetY) {
      let uniqueNodes = [];
      let finalPath = [];

      for (let i = 0; i <= numberOfMoves; i++) {
        uniqueNodes.push(path.findLast((item) => item.numberOfMoves === i));
      }

      for (let i = 0; i < uniqueNodes.length; i++) {
        if (uniqueNodes[i].parent === null) continue;
        finalPath.push(uniqueNodes[i].parent);
      }

      finalPath.push([targetX, targetY]);
      return [numberOfMoves, finalPath];
    }

    visitedNodes.add(currentNode.getPositionString());

    for (const neighbor of getNeighbors(x, y)) {
      const [neighborX, neighborY] = neighbor;
      const neighborNode = new Node(neighborX, neighborY, numberOfMoves + 1, [
        x,
        y,
      ]);

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
