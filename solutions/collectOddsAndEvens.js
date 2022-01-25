function collectOddsAndEvens(numbers) {
  /**
   * This function accepts an array of positive integers and returns 
   * an object with the count of odd numbers and the count of even numbers. 
   */

  let odd = 0;
  let even = 0;
  for (let number of numbers) {
    if (number % 2 === 0) {
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


