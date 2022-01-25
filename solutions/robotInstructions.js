function robotInstructions(moves) {
  /** 
   * This function accepts an array of moves. The options for the moves are 
   * "U", "D", "L", "R". The function returns an object with one key for 
   * each move with their values being the total number of times each move appears.
   */

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

