function countValidNumsInString(string) {
  // This function counts the number of valid numbers in a string.
  let count = 0;
  for (let char of string) {
    if (isValidNum(char)) {
      count++;
    }
  }
  return count;

  function isValidNum(char) {
    // This function checks if the character is a valid number.
    return char >= "0" && char <= "9";
  }
}
