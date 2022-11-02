import './index.css';

const taskItems = document.querySelector('.to-do-list-items');

const tasks = [
  {
    description: 'wash the dishes',
    completed: false,
    index: 0,
  },
  {
    description: 'complete To Do list project',
    completed: false,
    index: 1,
  },
];

const toDoListHtml = document.createElement('ul');
toDoListHtml.className = 'check-box-and-task';

for (let i = 0; i < tasks.length; i += 1) {
  toDoListHtml.innerHTML
  += `
  <li>
    <div class="task-item">
      <span class="check-square"><i class="fa-regular fa-square"></i></span>
      <p class="task-1">${tasks[i].description}</p>
    </div>
    <span class="ellipsis-vertical"><i class="fa-solid fa-ellipsis-vertical"></i></span>
  </li>
  `;
}

taskItems.appendChild(toDoListHtml);
