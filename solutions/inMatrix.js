function inMatrix(matrix, value) {
  /** 
   * This function accepts an array of arrays and a value. The function returns 
   * `true` if that value is in the matrix, and `false` if it is not. 
   */

  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i].indexOf(value) > -1) {
      return true;
    }
  }
  return false;
}

