function countIfHasValue(obj, value) {
  /**
   * Write a function called countIfHasValue which accepts an object where all 
   * of the values are arrays. The function should return the number of arrays
   * in which the value appears.
   */
  let count = 0;
  for (let key in obj) {
    if (obj[key].includes(value)) {
      count++;
    }
  }
  return count;
}

