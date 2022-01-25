function findFirstAndLastIndex(arr, num) {
/**
 * This function accepts an array and a number and returns a new array where 
 * the first index is the index where that number is ** first ** found and the 
 * second index is the index where that number is ** last ** found. If the number 
 * does not exist at least twice, the function returns `-1`.
 */

  let firstIndex = arr.indexOf(num);
  let lastIndex = arr.lastIndexOf(num);

  let doesNotHaveFirstOrLast = firstIndex === -1 || lastIndex === -1
  let areBothAtSameIndex = firstIndex === lastIndex;

  if (doesNotHaveFirstOrLast || areBothAtSameIndex) {
    return -1;
  }

  return [firstIndex, lastIndex];
}

