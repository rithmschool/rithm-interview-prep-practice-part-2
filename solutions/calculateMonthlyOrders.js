function calculateMonthlyOrders(orders) {
  /** 
   * This function accepts an array of objects. Each object has one or more 
   * properties for months in the year and those properties each have a value 
   * which is a number. The function should return the sum of all the values of 
   * all the properties in all the objects. 
   */

  let total = 0;
  // loops over the array of objects
  for (let order of orders) {
    // and then loops over each key in the object
    for (let key in order) {
      // and adds it to a total
      total += order[key];
    }
  }
  // the function returns a total
  return total;
}

