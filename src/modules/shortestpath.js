import Queue from "./queue.js";

// TODO gets steps but sometimes is wrong--need to fix

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

  queue.enqueue(startNode);

  const visitedNodes = new Set();

  while (!queue.isEmpty) {
    const currentNode = queue.dequeue();

    const { x, y, numberOfMoves } = currentNode;

    if (x === targetX && y === targetY) {
      let finalNode = currentNode;
      let finalPath = getPath(startNode, finalNode);

      return { numberOfMoves, finalPath };
    }

    visitedNodes.add(currentNode.getPositionString());

    for (const neighbor of getNeighbors(x, y)) {
      const [neighborX, neighborY] = neighbor;
      const neighborNode = new Node(
        neighborX,
        neighborY,
        numberOfMoves + 1,
        currentNode
      );

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

function getPath(startNode, finalNode) {
  let parentNode = finalNode.parent;
  let path = [];

  path.push([finalNode.x, finalNode.y]);

  while (parentNode.parent !== null) {
    path.push([parentNode.x, parentNode.y]);
    parentNode = parentNode.parent;
  }

  path.push([startNode.x, startNode.y]);

  // push the final node first, then the path, then the start node to get
  // the path in reverse order, then call the .reverse() method to put
  // in order from start coordinate to end coordinate.

  path.reverse();

  return path;
}
