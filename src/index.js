import './index.css';
import {
  addTask,
  reload,
  clearChecked,
}
from './modules/methods.js';
import { showDateTime } from './modules/DateModul.js';

const taskList = document.querySelector('.to-do-list-items');
const taskItem = document.querySelector('.add-to-your-list');
const task = document.querySelector('#add-task');

const tasks = [];

const toDoListHtml = document.createElement('ul');
toDoListHtml.className = 'check-box-and-task';

addTask(taskItem, task, tasks, toDoListHtml, taskList);

reload(tasks, toDoListHtml, taskList);

clearChecked(toDoListHtml, taskList);

setInterval(showDateTime, 1000);