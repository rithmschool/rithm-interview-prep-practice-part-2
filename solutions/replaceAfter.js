function replaceAfter(array, idx) {
  /**
   * This function accepts an array an index and it removes two elements starting at that index and adds the strings "Hello", "world" instead
   * The function should return the array
   */
  array.splice(idx, 2, "Hello", "world");
  return array;
}
