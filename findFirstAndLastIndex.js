function findFirstAndLastIndex(arr, num) {
  // your code goes here
  let first = arr.indexOf(num);
  let last = arr.lastIndexOf(num);
  return [first, last];
}
