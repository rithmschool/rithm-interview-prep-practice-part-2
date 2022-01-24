function findFirstMove(moves, move) {
  /**
   * This function accepts an array of arrays of moves and a move.
   * It returns an array with the index of the first move in the array 
   * of arrays of moves. If the move is not present in the moves array, the 
   * function returns -1.
   */

  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < moves[i].length; j++) {
      if (moves[i][j] === move) {
        return [i, j];
      }
    }
  }
  return -1;
}
