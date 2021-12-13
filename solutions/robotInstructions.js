function robotInstructions(moves) {
  /** This function accepts an array of moves, the options for the moves are "U", "D", "L", "R", the function should return an object with each move and the total number of times each move appears*/
  let moveCount = {};
  for (let move of moves) {
    if (moveCount[move]) {
      moveCount[move]++;
    } else {
      moveCount[move] = 1;
    }
  }
  return moveCount;
}

