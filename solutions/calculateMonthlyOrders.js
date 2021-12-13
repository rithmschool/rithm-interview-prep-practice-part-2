function calculateMonthlyOrders(orders) {
  // orders is an array of objects
  // each object has a property for a month in the year
  // and a value which is a number
  // this function loops over the array of objects
  // and then loops over each key in the object
  // and adds it to a total
  // the function returns a total

  // your code here
  let total = 0;
  for (let order of orders) {
    for (let key in order) {
      total += order[key];
    }
  }
  return total;
}

