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

  static clearOuputs() {
    document.getElementById("startOutput").innerHTML = "-";
    document.getElementById("targetOutput").innerHTML = "-";
    document.getElementById("numOfMoves").innerHTML = "-";
    document.querySelector(".path-output").innerHTML = "";
  }

  static setStartPosition(e) {
    e.preventDefault();
    const allSquares = [...document.querySelectorAll(".grid-item")];
    allSquares.forEach((square) => {
      square.addEventListener("click", UI.setStartSquareAction);
    });
  }

  static setEndPosition(e) {
    e.preventDefault();
    const allSquares = [...document.querySelectorAll(".grid-item")];
    allSquares.forEach((square) => {
      square.addEventListener("click", UI.setEndSquareAction);
    });
  }

  static initChessboard() {
    UI.clearContainer();
    UI.clearOuputs();

    for (let row = 0; row < 8; row++) {
      row % 2 === 0 ? UI.drawOddRow() : UI.drawEvenRow();
    }

    game.initGame();

    UI.setIndexes();
    UI.addEventListener();
  }

  static setEndSquareAction(e) {
    const squares = [...document.querySelectorAll(".grid-item")];
    const targetOutput = document.getElementById("targetOutput");

    if (e.target.tagName !== "DIV") return;
    if (game.end.length > 0) return;

    e.target.style.backgroundColor = "#06b6d4";
    game.setEnd(game.getCoords(e));
    targetOutput.innerHTML = `[${game.getCoords(e)}]`;

    squares.forEach((square) => {
      square.removeEventListener("click", UI.setEndSquareAction);
    });
  }

  static setStartSquareAction(e) {
    const squares = [...document.querySelectorAll(".grid-item")];
    const startOutput = document.getElementById("startOutput");

    if (e.target.tagName !== "DIV") return;
    if (game.start.length > 0) return;

    e.target.innerHTML = `<i class="fas fa-chess-knight"></i>`;
    game.setStart(game.getCoords(e));
    startOutput.innerHTML = `[${game.getCoords(e)}]`;

    squares.forEach((square) => {
      square.removeEventListener("click", UI.setStartSquareAction);
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

    if (game.start.length < 1 || game.end.length < 1) return;

    const outputRight = document.querySelector(".path-output");
    const btn = document.getElementById("path");
    const movesOutput = document.getElementById("numOfMoves");
    const squares = [...document.querySelectorAll(".grid-item")];
    const startX = game.start[0];
    const startY = game.start[1];
    const endX = game.end[0];
    const endY = game.end[1];

    const path = getShortestPath(startX, startY, endX, endY);

    const moves = path.finalPath;

    movesOutput.innerHTML = path.numberOfMoves;

    moves.slice(1, moves.length - 1).forEach((move) => {
      outputRight.innerHTML += `<p>[${move}]-></p>`;
    });

    outputRight.innerHTML += `<p>[${moves[moves.length - 1]}]</p>`;

    squares.forEach((square) => {
      let jumps = moves.slice(1, moves.length - 1);
      let coords = [parseInt(square.dataset.x), parseInt(square.dataset.y)];
      let i = 1;

      jumps.forEach((jump) => {
        if (jump[0] === coords[0] && jump[1] === coords[1]) {
          square.innerHTML = `<i class="fas fa-circle"></i> <p>${i}</p>`;
        }
        i++;
      });
    });

    btn.removeEventListener("click", UI.showShortestPath);
  }
}
