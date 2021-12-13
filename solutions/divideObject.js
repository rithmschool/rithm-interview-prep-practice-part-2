function divideObject(obj) {
  /**
   * Write a function that accepts an object where the values are either strings or numbers. The function should return an array. If the value is a number, add it to the beginning of the array, if it is a string, add it to the end of the array. The function should return a new array.
   */
  let newArray = [];
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      newArray.unshift(obj[key]);
    } else {
      newArray.push(obj[key]);
    }
  }
  return newArray;
}
