function findFirstAndLastIndex(arr, num) {
  // This function should accept an array and a number and return a new array with the first index is the index where that number is ** first ** found and the second index is the index where that number is ** last ** found.If the number does not exist at least twice, the function should return `-1`

  // Write your code here
  let firstIndex = arr.indexOf(num);
  let lastIndex = arr.lastIndexOf(num);

  let doesNotHaveFirstOrLast = firstIndex === -1 || lastIndex === -1
  let areBothAtSameIndex = firstIndex === lastIndex;

  if (doesNotHaveFirstOrLast || areBothAtSameIndex) {
    return -1;
  }

  return [firstIndex, lastIndex];
}

