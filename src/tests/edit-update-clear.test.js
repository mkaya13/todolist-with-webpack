import {
  editTask,
  updateCompleteStatus,
  clearAllCompleted,
} from '../__mocks__/edit-update-clear.js';

describe('EditTask function tests', () => {
  let currentTask;
  let newTask;
  let updatedTask;
  it('Checks whether the function changes the object stored in local storage', () => {
    currentTask = {
      description: 'Wash the dishes',
      completed: false,
      index: 1,
    };
    newTask = {
      description: 'Study for the presentation',
      completed: false,
      index: currentTask.index,
    };
    updatedTask = editTask(currentTask, newTask);

    expect(updatedTask).toStrictEqual(newTask);
  });
});

describe('updateCompleteStatus function tests', () => {
  let task;
  let updatedTask;
  it('Checks the updateCompleteStatus function', () => {
    task = {
      description: 'Wash the dishes',
      completed: false,
      index: 1,
    };
    task.completed = false;
    updatedTask = updateCompleteStatus(task);

    expect(updatedTask).toStrictEqual(task);
  });
});

describe('updateCompleteStatus function tests', () => {
  const taskList = [
    { description: 'Wash the dishes', completed: true, index: 1 },
    { description: 'Prepare for the presentation', completed: false, index: 2 },
    { description: 'Study for the exam', completed: true, index: 3 },
    { description: 'Do not forget to order meal', completed: false, index: 4 },
  ];
  const newTaskList = [
    { description: 'Prepare for the presentation', completed: false, index: 1 },
    { description: 'Do not forget to order meal', completed: false, index: 2 },
  ];
  it('Checks the updateCompleteStatus function', () => {
    const expectedTasks = clearAllCompleted(taskList);

    expect(newTaskList).toStrictEqual(expectedTasks);
  });
});
