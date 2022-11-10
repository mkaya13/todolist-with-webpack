/**
 * @jest-environment jsdom
 */

test('Check addTodo able add todo to todoList', () => {
  document.body.innerHTML = `
      <input type="text" id="add-task" placeholder="Add to your list ...">
      <button type="submit" class="btn-add-task"> <span class="top-left-arrow" ><i class="fa-solid fa-plus"></i></span></button>
      <div class="to-do-list-items"> </div>
      `;

  // eslint-disable-next-line global-require, no-unused-vars
  const { addTask } = require('../__mocks__/addTask.js');
  const newTodoInput = document.getElementById('add-task');
  const addTodoBtn = document.querySelector('.btn-add-task');
  const todolist = document.querySelector('.to-do-list-items');

  newTodoInput.value = 'Wash the dishes!';
  addTodoBtn.click();

  const expected = `
      <button type="submit" class="btn-add-task"> <span class="top-left-arrow"><i class="fa-solid fa-plus"></i></span></button>
      <li class="list">
        <div class="task-item">
          <span class="check-square"><i class="fa-regular fa-square" id="check-box"></i></span>
          <span class="label-text" id="label-text-0"><input class="task-paragraph" type="text" value="Wash the dishes!"></span>
        </div>
        <button class="trash-btn" id="0"><i class="fa-regular fa-trash-can"></i></button>
        <span class="ellipsis-vertical" id="ellipsis-vertical-0"><i class="fa-solid fa-ellipsis-vertical"></i></span>
      </li>
    `;

  expect(todolist.innerHTML).toBe(expected);
});
