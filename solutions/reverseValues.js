function reverseValues(arr) {
  /**
   * This function accepts an array of numbers and returns a new array with 
   * the values reversed. If a value is an even number, it skips the next two numbers 
   * and continues.
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


