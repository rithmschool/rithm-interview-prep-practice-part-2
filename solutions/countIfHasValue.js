function countIfHasValue(obj, value) {
  /**
   * Write a called countIfHasValue which accepts an object where all of the values are arrays. The function should count the number of times the value is found in any of the arrays.
   */
  let count = 0;
  for (let key in obj) {
    if (obj[key].includes(value)) {
      count++;
    }
  }
  return count;
}

