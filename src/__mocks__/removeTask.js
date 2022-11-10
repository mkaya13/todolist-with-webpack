const remove = () => {
  const currentTodoList = document.querySelector('.to-do-list-items');
  const lastItem = document.querySelector('.list:last-child');
  currentTodoList.removeChild(lastItem);
};

document.querySelector('.trash-btn').addEventListener('click', remove);
