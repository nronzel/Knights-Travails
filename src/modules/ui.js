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

    console.log(getShortestPath(startX, startY, endX, endY));
  }
}
