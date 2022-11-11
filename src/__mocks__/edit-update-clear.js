export const editTask = (oldTask, newTask) => {
  const newTaskObj = {
    description: newTask.description,
    completed: false,
    index: oldTask.index,
  };

  return newTaskObj;
};

export const updateCompleteStatus = (task) => {
  task.completed = !task.completed;
  return task;
};

export const clearAllCompleted = (taskList) => {
  taskList = taskList.filter((task) => task.completed !== true);
  taskList.forEach((taskList, no) => {
    taskList.index = no + 1;
  });
  return taskList;
};

export default { editTask, updateCompleteStatus };
