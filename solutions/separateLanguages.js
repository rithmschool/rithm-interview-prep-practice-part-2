function separateLanguages(languages) {
  /**
   * Write a function that takes an array of strings and returns an object with the following keys, "python", "javascript", "other". The values for the keys of "python" and "javascript" should be the number of times those strings appear. The value of "other" should be an array of all of the other values in the array.
   */
  let result = {
    python: 0,
    javascript: 0,
    other: [],
  };
  for (let language of languages) {
    if (language === "python") {
      result.python++;
    } else if (language === "javascript") {
      result.javascript++;
    } else {
      result.other.push(language);
    }
  }
  return result;
}

