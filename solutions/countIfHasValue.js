function countIfHasValue(obj, value) {
  /**
   * This function accepts an object whose values are all arrays. It also accepts 
   * a numeric value that is being searched for. The function returns the 
   * number of arrays in which the searched-for value appears.
   */

  let count = 0;
  for (let key in obj) {
    if (obj[key].includes(value)) {
      count++;
    }
  }
  return count;
}

