function skipVowels(string) {
  /**
   * This function accepts a string an returns an array. The function 
   * iterates through the string and if it encounters a vowel, it skips the 
   * next two characters. Otherwise, it adds that current character to the array.
   */
  
  let vowels = "aeiouAEIOU";
  let result = [];
  for (let i = 0; i < string.length; i++) {
    if (vowels.includes(string[i])) {
      i++;
    } else {
      result.push(string[i]);
    }
  }
  return result;
}
