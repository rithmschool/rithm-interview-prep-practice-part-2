function findFirstMove(moves, move) {
  /**
   * This function accepts an array of arrays of moves and a move.
   * It should return an array with the index of the first move in the array of arrays of moves
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
