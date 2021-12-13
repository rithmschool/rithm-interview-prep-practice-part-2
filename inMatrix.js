function inMatrix(matrix, value) {
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i].indexOf(value) > -1) {
      return true;
    }
  }
  return false;
}

