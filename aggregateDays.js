function collectOddsAndEvens(numbers) {
  /**
   * Write a function that accepts an array of positive integers and returns an object with the count of odd numbers and the count of even numbers. The keys in the object should be "odd" and "even".
   */
  let odd = 0;
  let even = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      even++;
    } else {
      odd++;
    }
  }
  return {
    odd: odd,
    even: even,
  };
}

