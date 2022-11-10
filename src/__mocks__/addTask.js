const addTask = () => {
  let currentTodoList = document.querySelector('.to-do-list-items').innerHTML;
  const newValue = 'Wash the dishes!';
  currentTodoList = `
      <button type="submit" class="btn-add-task"> <span class="top-left-arrow" ><i class="fa-solid fa-plus"></i></span></button>
      <li class="list">
        <div class="task-item">
          <span class="check-square"><i class="fa-regular fa-square" id="check-box"></i></span>
          <span class="label-text" id="label-text-0"><input class="task-paragraph" type="text" value="${newValue}"></span>
        </div>
        <button class="trash-btn" id="0"><i class="fa-regular fa-trash-can"></i></button>
        <span class="ellipsis-vertical" id="ellipsis-vertical-0"><i class="fa-solid fa-ellipsis-vertical"></i></span>
      </li>
    `;
  document.querySelector('.to-do-list-items').innerHTML = currentTodoList;
};
document.querySelector('.btn-add-task').addEventListener('click', addTask);
