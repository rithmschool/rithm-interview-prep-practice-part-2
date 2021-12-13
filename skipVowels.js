function skipVowels(string) {
  /**
   * Write a function that accepts a string an returns an array. The function should iterate through the string and if it encouters a vowel it should skip the next two characters, otherwise it should add that current character to the array.
   */
  let vowels = ["a", "e", "i", "o", "u"];
  let result = [];
  for (let i = 0; i < string.length; i++) {
    if (vowels.includes(string[i])) {
      i += 2;
    } else {
      result.push(string[i]);
    }
  }
  return result;
}
