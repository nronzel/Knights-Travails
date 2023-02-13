export default class UI {
  static drawEvenRow() {
    const container = document.querySelector(".chessboard");
    container.innerHTML += `
    <div class="column">
    <div class="grid-item black"></div>
    <div class="grid-item white"></div>
    <div class="grid-item black"></div>
    <div class="grid-item white"></div>
    <div class="grid-item black"></div>
    <div class="grid-item white"></div>
    <div class="grid-item black"></div>
    <div class="grid-item white"></div>
    </div>
    `;
  }

  static drawOddRow() {
    const container = document.querySelector(".chessboard");
    container.innerHTML += `
    <div class="column">
    <div class="grid-item white"></div>
    <div class="grid-item black"></div>
    <div class="grid-item white"></div>
    <div class="grid-item black"></div>
    <div class="grid-item white"></div>
    <div class="grid-item black"></div>
    <div class="grid-item white"></div>
    <div class="grid-item black"></div>
    </div>
    `;
  }

  static clearContainer() {
    document.querySelector(".chessboard").innerHTML = "";
  }

  static setStartPosition(e) {
    e.preventDefault();
    const allSquares = [...document.querySelectorAll(".grid-item")];
    allSquares.forEach((square) =>
      square.addEventListener("click", UI.placeKnight)
    );
  }

  static setEndPosition(e) {
    e.preventDefault();
    const allSquares = [...document.querySelectorAll(".grid-item")];
    allSquares.forEach((square) =>
      square.addEventListener("click", UI.placeKnight)
    );
  }

  static initChessboard() {
    UI.clearContainer();

    for (let row = 0; row < 8; row++) {
      row % 2 === 0 ? UI.drawOddRow() : UI.drawEvenRow();
    }

    UI.addEventListener();
  }

  static placeKnight(e) {
    const squares = [...document.querySelectorAll(".grid-item")];
    if (e.target.tagName !== "DIV") return;

    e.target.innerHTML = `
    <i class="fas fa-chess-knight"></i>
    `;

    squares.forEach((square) =>
      square.removeEventListener("click", UI.placeKnight)
    );
  }

  static addEventListener() {
    const resetBtn = document.getElementById("reset");
    const startBtn = document.getElementById("start");
    const endBtn = document.getElementById("end");

    startBtn.addEventListener("click", UI.setStartPosition);
    endBtn.addEventListener("click", UI.setEndPosition);
    resetBtn.addEventListener("click", UI.initChessboard);
  }

  static setIndexes() {
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
  }
}

// choose start position
// choose end position
// show shortest path to end position
