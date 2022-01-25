function findHighestPriorityTodo(todos) {
  /**
   * This function accepts an array of objects, each of which has a 'priority' 
   * property as well as a 'task' property. The function returns an array 
   * where the first index is the name of the highest priority task and the 
   * second index is the priority rating of that same task.
   */

  let highestPriority = 0;
  let highestPriorityTask = "";
  for (let todo of todos) {
    if (todo.priority > highestPriority) {
      highestPriority = todo.priority;
      highestPriorityTask = todo.task;
    }
  }
  return [highestPriorityTask, highestPriority];
}
