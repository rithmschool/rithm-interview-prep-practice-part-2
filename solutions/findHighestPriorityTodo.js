function findHighestPriorityTodo(todos) {
  /**
   * This function should accept an array of objects, each of which has a 'priority' property as well as a 'task' property. The function should return a array where the first index is the task and the second index is the priority.
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
