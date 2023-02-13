// choose start position
// choose end position
// show shortest path to end position
//   const validMoves = [
//     [1, 2],
//     [2, 1],
//     [-1, 2],
//     [-2, 1],
//     [-2, -1],
//     [-1, -2],
//     [1, -2],
//     [2, -1],
//   ];
class Game {
  constructor() {
    this.start = [];
    this.end = [];
    this.moves = [];
  }

  getStart() {
    return this.start;
  }

  getEnd() {
    return this.end;
  }

  setStart(coords) {
    this.start = [...coords];
    console.log(`Set start to: ${coords}`);
  }

  setEnd(coords) {
    this.end = [...coords];
    console.log(`Set end to: ${coords}`);
  }

  getCoords(e) {
    const x = parseInt(e.target.dataset.x);
    const y = parseInt(e.target.dataset.y);

    return [x, y];
  }

  initGame() {
    this.start = [];
    this.end = [];
    this.moves = [];
    return `Game Initialized: Start:${this.start} End:${this.end} Moves:${this.moves}`;
  }
}

const game = new Game();

export { game };
