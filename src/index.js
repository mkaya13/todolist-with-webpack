import './index.css';
import {
  showItems,
  addTask,
}
from './methods.js';

const taskList = document.querySelector('.to-do-list-items');
const taskItem = document.querySelector('.add-to-your-list');
const task = document.querySelector('#add-task');

let tasks = [];

const toDoListHtml = document.createElement('ul');
toDoListHtml.className = 'check-box-and-task';

addTask(taskItem, task, tasks, toDoListHtml, taskList);

window.addEventListener('load', (event) => {
  if (
    localStorage.getItem('storedBookData') !== null && localStorage.getItem('storedBookData') !== '[]'
  ) {
    event.preventDefault();
    tasks = JSON.parse(localStorage.getItem('storedBookData'));
    showItems(toDoListHtml, tasks, taskList);
  }
});
