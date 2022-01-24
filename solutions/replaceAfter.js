function replaceAfter(array, idx) {
  /**
   * This function accepts an array and an index. 
   * It removes two elements starting at that index and adds the strings 
   * "Hello", "world" in their places. The function returns the altered array.
   */
  
  array.splice(idx, 2, "Hello", "world");
  return array;
}
