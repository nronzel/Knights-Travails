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

export const getCoords = (e) => {
  let x = parseInt(e.target.dataset.x);
  let y = parseInt(e.target.dataset.y);

  return [x, y];
};
