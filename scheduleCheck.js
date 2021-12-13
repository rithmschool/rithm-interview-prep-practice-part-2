function scheduleCheck(schedule1, schedule2) {
  /** This function accepts two objects which have a key for each day of the week and a value that is either true or false, the function should return the number of days of the week that each object both has a value of true for*/
  let count = 0;
  for (let key in schedule1) {
    if (schedule1[key] === true && schedule2[key] === true) {
      count++;
    }
  }
  return count;
}

