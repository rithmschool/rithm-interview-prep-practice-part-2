function divideObject(obj) {
/**
 * This function accepts an object where the values are either strings or numbers,
 * and returns an array of arrays. The first subarray contains a total of all of 
 * the numbers and the second subarray contains a number which is the total 
 * of all the characters of all the strings.
 */

  let sumNumbers = 0;
  let sumStrings = 0;
  for (let key in obj) {
    if (typeof obj[key] === "string") {
      sumStrings += obj[key].length;
    } else {
      sumNumbers += obj[key];
    }
  }
  return [[sumNumbers], [sumStrings]];
}
