function reverseValues(arr) {
  /**
   * This function accepts an array of numbers, and iterates through it. As it 
   * traverses the array, if the value encountered is an even number, it skips it 
   * AND skips the next two numbers, as well. Anything that isn't skipped is added 
   * to a new array, which has all non-skipped numbers in reverse order of the 
   * original array. This new array is returned.
   */

   let result = []
   for(let i = 0; i < arr.length; i++) {
     if( arr[i] % 2 === 1) {
       result.unshift(arr[i]);
     } else {
       i += 2;
     }
   }
   return result;
 }


