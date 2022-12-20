// let numbers = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// let board = [
//   [numbers, numbers, numbers],
//   [numbers, numbers, numbers],
//   [numbers, numbers, numbers],
// ];
let boards = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
];
let root = document.getElementById("root");
function generateFields(boards) {
  for (i = 0; i < boards.length; i++) {
    for (j = 0; j < boards[i].length; j++) {
      let newDiv = document.createElement("div");
      newDiv.setAttribute("class", "field");
      if (boards[i][j] !== 0) {
        newDiv.innerText = boards[i][j];
      }
      root.appendChild(newDiv);
    }
  }
}
generateFields(boards);
