import { game } from "./gamelogic.js";

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
    allSquares.forEach((square) => {
      square.addEventListener("click", UI.placeKnight);
    });
  }

  static setEndPosition(e) {
    e.preventDefault();
    const allSquares = [...document.querySelectorAll(".grid-item")];
    allSquares.forEach((square) => {
      square.addEventListener("click", UI.placeKnight);
      // square.addEventListener("click", game.setEnd);
    });
  }

  static initChessboard() {
    UI.clearContainer();

    for (let row = 0; row < 8; row++) {
      row % 2 === 0 ? UI.drawOddRow() : UI.drawEvenRow();
    }
    UI.setIndexes();
    UI.addEventListener();
  }

  static placeKnight(e) {
    const squares = [...document.querySelectorAll(".grid-item")];
    if (e.target.tagName !== "DIV") return;

    if (game.start.length > 0) game.setEnd(game.getCoords(e));
    else game.setStart(game.getCoords(e));

    e.target.innerHTML = `
    <i class="fas fa-chess-knight"></i>
    `;

    squares.forEach((square) => {
      square.removeEventListener("click", UI.placeKnight);
    });

    console.table(game);
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
    const columns = [...document.querySelectorAll(".column")];
    const children = [];

    columns.forEach((column) => children.push([...column.children]));

    for (let y = 0; y < children.length; y++) {
      children[y].forEach((child) => {
        child.setAttribute("data-y", `${y}`);
      });

      for (let x = children.length - 1; x >= 0; x--) {
        // flips the x index so [0,0] is bottom left rather than top left
        let remaining = children.length - 1 - x;

        children.forEach((child) =>
          child[x].setAttribute("data-x", `${remaining}`)
        );
      }
    }
  }
}
