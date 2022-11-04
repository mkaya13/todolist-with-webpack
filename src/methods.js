export const addTasksLocalStorage = (tasks) => {
  const str = JSON.stringify(tasks);
  localStorage.setItem('storedBookData', str);
};

export const remove = (tasks, toDoListHtml, taskList) => {
  document.querySelectorAll('.trash-btn').forEach((button) => button.addEventListener('mousedown', (event) => {
    event.preventDefault();
    const { id } = button;
    const taskToDelete = tasks[id];
    tasks = tasks.filter((task) => task !== taskToDelete);

    tasks.forEach((item) => {
      if (id < item.index) {
        item.index -= 1;
      }
    });

    // eslint-disable-next-line no-use-before-define
    showItems(toDoListHtml, tasks, taskList);
  }));
};

export const changeIcons = (tasks) => {
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

export const changeBackIcons = () => {
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

export const showItems = (toDoListHtml, tasks, taskList) => {
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
  remove(tasks, toDoListHtml, taskList);
  changeIcons(tasks);
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

export const addTask = (taskItem, task, tasks, toDoListHtml, taskList) => {
  taskItem.addEventListener('submit', (event) => {
    event.preventDefault();

    if (JSON.parse(localStorage.getItem('storedBookData')) !== null) {
      tasks = JSON.parse(localStorage.getItem('storedBookData'));
    }

    if (task.value.length > 0) {
      tasks.push({ description: task.value, completed: false, index: tasks.length + 1 });

      toDoListHtml.innerHTML = '';

      tasks.forEach((element, index) => {
        toDoListHtml.innerHTML
      += `
      <li class="list">
        <div class="task-item">
          <span class="check-square"><i class="fa-regular fa-square"></i></span>
          <span class="label-text" id="label-text-${index}"><input class="task-paragraph" type="text" value="${element.description}"></span>
        </div>
        <button class="trash-btn" id="${index}"><i class="fa-regular fa-trash-can"></i></button>
        <span class="ellipsis-vertical" id=ellipsis-vertical-${index}><i class="fa-solid fa-ellipsis-vertical"></i></span>
      </li>
      `;
      });
      taskList.appendChild(toDoListHtml);
      task.value = '';

      addTasksLocalStorage(tasks);
      remove(tasks, toDoListHtml, taskList);
      changeIcons(tasks);
      changeBackIcons();
    } else {
      defineWarning();
      setTimeout(resetWarning, 3000);
    }
  });
};

export const reload = (tasks, toDoListHtml, taskList) => {
  window.addEventListener('load', (event) => {
    if (
      localStorage.getItem('storedBookData') !== null && localStorage.getItem('storedBookData') !== '[]'
    ) {
      event.preventDefault();
      tasks = JSON.parse(localStorage.getItem('storedBookData'));
      showItems(toDoListHtml, tasks, taskList);
    }
  });
};

export default {
  addTasksLocalStorage, remove, showItems, changeIcons, changeBackIcons, addTask, reload,
};