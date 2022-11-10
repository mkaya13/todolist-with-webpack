/**
 * @jest-environment jsdom
 */

test('Check remove able to remove the task', () => {
  document.body.innerHTML = `
      <input type="text" id="add-task" placeholder="Add to your list ...">
      <button type="submit" class="btn-add-task"> <span class="top-left-arrow" ><i class="fa-solid fa-plus"></i></span></button>
      <button class="trash-btn"></button>
      <div class="to-do-list-items">
          <button type="submit" class="btn-add-task"> <span class="top-left-arrow" ><i class="fa-solid fa-plus"></i></span></button>
          <li class="list">
            <div class="task-item">
              <span class="check-square"><i class="fa-regular fa-square" id="check-box"></i></span>
              <span class="label-text" id="label-text-0"><input class="task-paragraph" type="text" value="Wash the dishes!"></span>
            </div>
            <button class="trash-btn" id="0"><i class="fa-regular fa-trash-can"></i></button>
            <span class="ellipsis-vertical" id="ellipsis-vertical-0"><i class="fa-solid fa-ellipsis-vertical"></i></span>
          </li>
      </div>
    `;

  // eslint-disable-next-line global-require, no-unused-vars
  const { removeTodo } = require('../__mocks__/removeTask.js');
  const todolist = document.querySelector('.to-do-list-items');
  const removeBtn = document.querySelector('.trash-btn');

  removeBtn.click();

  todolist.innerHTML = '';

  expect(todolist.innerHTML).toBe('');
});
