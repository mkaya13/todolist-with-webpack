import './index.css';

const taskList = document.querySelector('.to-do-list-items');
const taskItem = document.querySelector('.add-to-your-list');
const task = document.querySelector('#add-task');

let tasks = [];

const toDoListHtml = document.createElement('ul');
toDoListHtml.className = 'check-box-and-task';

let counter = -1;

const addTasksLocalStorage = (tasks) => {
  const str = JSON.stringify(tasks);
  localStorage.setItem('storedBookData', str);
};

const remove = () => {
  document.querySelectorAll('.trash-btn').forEach((button) => button.addEventListener('mousedown', (event) => {
    event.preventDefault();
    const { id } = button;
    const taskToDelete = tasks[id];
    tasks = tasks.filter((task) => task !== taskToDelete);
    counter -= 1;

    tasks.forEach((item) => {
      if (id < item.index) {
        item.index -= 1;
      }
    });

    // eslint-disable-next-line no-use-before-define
    showItems();
  }));
};

const changeIcons = () => {
  document.querySelectorAll('.label-text').forEach((button) => button.addEventListener('focusin', (event) => {
    event.preventDefault();

    const { id } = button;
    const index = id.charAt(id.length - 1);

    const indexOldElement = 'ellipsis-vertical-'.concat(index);
    const oldElement = document.getElementById(indexOldElement);
    const newElement = document.getElementById(`${index}`);
    oldElement.style = 'display:none';
    newElement.style = 'display:block';
    const { firstChild } = button;
    firstChild.addEventListener('input', () => {
      tasks[index].description = firstChild.value;
      addTasksLocalStorage(tasks);
    });
  }));
};

const changeBackIcons = () => {
  document.querySelectorAll('.label-text').forEach((button) => button.addEventListener('focusout', (event) => {
    event.preventDefault();
    const { id } = button;

    const indexOldElement = 'ellipsis-vertical-'.concat(id.charAt(id.length - 1));
    const oldElement = document.getElementById(indexOldElement);
    const newElement = document.getElementById(`${id.charAt(id.length - 1)}`);
    oldElement.style = 'display:block';
    newElement.style = 'display:none';
  }));
};

const showItems = () => {
  toDoListHtml.innerHTML = '';
  for (let i = 0; i < tasks.length; i += 1) {
    toDoListHtml.innerHTML
    += `
    <li class="list">
      <div class="task-item">
        <span class="check-square"><i class="fa-regular fa-square"></i></span>
        <span class="label-text" id="label-text-${i}"><input class="task-paragraph" type="text" value="${tasks[i].description}"></span>
      </div>
      <button class="trash-btn" id="${i}"><i class="fa-regular fa-trash-can"></i></button>
      <span class="ellipsis-vertical" id=ellipsis-vertical-${i}><i class="fa-solid fa-ellipsis-vertical"></i></span>
    </li>
    `;
  }
  taskList.appendChild(toDoListHtml);

  addTasksLocalStorage(tasks);
  remove();
  changeIcons();
  changeBackIcons();
};

const warningTag = document.querySelector('.value-warning');

const defineWarning = () => {
  const warning = 'The value you enter should not be empty!';
  warningTag.innerText = warning;
  warningTag.style = 'display:block';
};

const resetWarning = () => {
  warningTag.style = 'display:none';
};

taskItem.addEventListener('submit', (event) => {
  event.preventDefault();

  if (task.value.length > 0) {
    tasks.push({ description: task.value, completed: false, index: tasks.length });
    counter += 1;

    toDoListHtml.innerHTML
    += `
    <li class="list">
      <div class="task-item">
        <span class="check-square"><i class="fa-regular fa-square"></i></span>
        <span class="label-text" id="label-text-${counter}"><input class="task-paragraph" type="text" value="${tasks[counter].description}"></span>
      </div>
      <button class="trash-btn" id="${counter}"><i class="fa-regular fa-trash-can"></i></button>
      <span class="ellipsis-vertical" id=ellipsis-vertical-${counter}><i class="fa-solid fa-ellipsis-vertical"></i></span>
    </li>
    `;
    taskList.appendChild(toDoListHtml);
    task.value = '';

    addTasksLocalStorage(tasks);
    remove();
    changeIcons();
    changeBackIcons();
  } else {
    defineWarning();
    setTimeout(resetWarning, 3000);
  }
});

window.addEventListener('load', (event) => {
  if (
    localStorage.getItem('storedBookData') !== null && localStorage.getItem('storedBookData') !== '[]'
  ) {
    event.preventDefault();
    tasks = JSON.parse(localStorage.getItem('storedBookData'));
    counter = tasks.length - 1;
    showItems();
  }
});
