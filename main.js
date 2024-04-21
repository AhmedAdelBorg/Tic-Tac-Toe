let gridItems = document.getElementsByClassName("square");

let gameIsFinished = false;
let currentTurn = "X";

let boardArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];

for (const item of gridItems) {
  item.addEventListener("click", () => {
    let value = item.getAttribute("value");
    let index = value - 1;

    if (gameIsFinished) {
      return;
    }

    if (boardArray[index] == "O" || boardArray[index] == "X") {
      return;
    }

    // filling the value visually
    let squareContent = document.querySelector(`.square[value="${value}"]`);

    squareContent.children[0].innerHTML = currentTurn;

    // filling the value logically

    boardArray[index] = currentTurn;
    
    evaluateBoard();
    if (currentTurn == "X") {
        currentTurn = "O";
      } else {
        currentTurn = "X";
      }

        document.getElementById("instruction").textContent = `${currentTurn} Turn`;

      
  });

  function evaluateBoard() {
    if (
      // rows
      (boardArray[0] == boardArray[1] && boardArray[1] == boardArray[2]) ||
      (boardArray[3] == boardArray[4] && boardArray[4] == boardArray[5]) ||
      (boardArray[6] == boardArray[7] && boardArray[7] == boardArray[8]) ||
      // coulmns
      (boardArray[0] == boardArray[3] && boardArray[3] == boardArray[6]) ||
      (boardArray[1] == boardArray[4] && boardArray[4] == boardArray[7]) ||
      (boardArray[2] == boardArray[5] && boardArray[5] == boardArray[8]) ||
      // diagonal
      (boardArray[0] == boardArray[4] && boardArray[4] == boardArray[8]) ||
      (boardArray[2] == boardArray[4] && boardArray[4] == boardArray[6])
    ) {
      let winner = currentTurn == "O" ? "O" : "X";
      gameIsFinished = true;
      console.log(`${winner} is win`);
    }

    let isDrow = true;
    for (square of boardArray) {
      if (square != "X" && square != "O") {
        isDrow = false;
      }
    }
    if (isDrow) {
      gameIsFinished = true;
    }
  }
}


document.getElementById("reset-btn").addEventListener("click", () => {
    reset();
});


function reset() {
    boardArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
    currentTurn = "X";

    document.getElementById("instruction").textContent = `${currentTurn} Turn`;
    for(item of gridItems) {
        let value = item.getAttribute("value");
        let squareContent = document.querySelector(`.square[value="${value}"]`);
        squareContent.children[0].innerHTML = "";
    }
    gameIsFinished = false;
}



// function resetData() {
//   boardArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
//   let squareContent = document.querySelectorAll(`.square`);
//   squareContent.forEach((e) => {
//     e.children[0].innerHTML = "";
//   });
//   gameIsFinished = false;
// }

// reset.onclick = () => {
//     boardArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
// //   squareContent.forEach((e) => {
// //     e.innerHTML = "";
// //   });
// //   for (const item of gridItems) {
// //     item.innerHTML = "";
// //   }
// };
