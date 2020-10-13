const toDoListArr = [];

const toDoListFactory = (title, description, dueDate, priority) => {
  return { title, description, dueDate, priority }
};

function showToDoList() {
  const toDoList = document.querySelector('.todolist');
  const ul = document.createElement('ul');
  ul.setAttribute('class', 'todolist-list');
  toDoList.appendChild(ul);
  const li = document.createElement('li');
  li.setAttribute('class', 'todolist-item');
  ul.appendChild(li);
  toDoListArr.forEach((list) => {
    li.innerHTML = list.title;
    li.innerHTML = list.description;
    li.innerHTML = list.dueDate;
    li.innerHTML = list.priority;
  });
}

const createToDoList = () => {
  const listSubmit = document.getElementById('list-submit');
  listSubmit.addEventListener('click', (event) => {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
  });
};
