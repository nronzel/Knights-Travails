import { game } from "./gamelogic.js";
import { getShortestPath } from "./shortestpath.js";

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
    });
  }

  static initChessboard() {
    UI.clearContainer();

    for (let row = 0; row < 8; row++) {
      row % 2 === 0 ? UI.drawOddRow() : UI.drawEvenRow();
    }

    game.initGame();

    UI.setIndexes();
    UI.addEventListener();
  }

  static placeKnight(e) {
    const squares = [...document.querySelectorAll(".grid-item")];
    if (e.target.tagName !== "DIV") return;

    if (game.start.length > 0) {
      e.target.style.backgroundColor = "#06b6d4";
      game.setEnd(game.getCoords(e));
    } else {
      e.target.innerHTML = `
      <i class="fas fa-chess-knight"></i>
      `;

      game.setStart(game.getCoords(e));
    }

    squares.forEach((square) => {
      square.removeEventListener("click", UI.placeKnight);
    });
  }

  static addEventListener() {
    const resetBtn = document.getElementById("reset");
    const startBtn = document.getElementById("start");
    const endBtn = document.getElementById("end");
    const pathBtn = document.getElementById("path");

    startBtn.addEventListener("click", UI.setStartPosition);

    endBtn.addEventListener("click", UI.setEndPosition);

    resetBtn.addEventListener("click", UI.initChessboard);

    pathBtn.addEventListener("click", UI.showShortestPath);
  }

  static setIndexes() {
    const columns = [...document.querySelectorAll(".column")];
    const children = [];

    columns.forEach((column) => children.push([...column.children]));

    for (let x = 0; x < children.length; x++) {
      children[x].forEach((child) => {
        child.setAttribute("data-x", `${x}`);
      });

      for (let y = children.length - 1; y >= 0; y--) {
        // flips the y index so [0,0] is bottom left rather than top left
        let remaining = children.length - 1 - y;

        children.forEach((child) =>
          child[y].setAttribute("data-y", `${remaining}`)
        );
      }
    }
  }

  static showShortestPath(e) {
    e.preventDefault();

    let startX = game.start[0];
    let startY = game.start[1];
    let endX = game.end[0];
    let endY = game.end[1];

    let path = getShortestPath(startX, startY, endX, endY);

    const squares = [...document.querySelectorAll(".grid-item")];

    let moves = path[1].slice(1, path[1].length - 1);

    squares.forEach((square) => {
      let x = square.dataset.x;
      let y = square.dataset.y;

      for (let move of moves) {
        if (move[0] == x && move[1] == y) {
          square.innerHTML = `<i class="fas fa-circle"></i>`;
        } else {
          continue;
        }
      }
    });

    console.log(moves);
  }
}
