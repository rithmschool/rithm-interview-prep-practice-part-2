function reverseValues(arr) {
  /**
   * This function should accept an array of numbers and return a new array with the values reversed. If a value is an even number, skip the next two numbers and continue.
   */
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] % 2 === 0) {
      i -= 2;
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}


