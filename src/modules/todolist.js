const toDoListArr = [];
const toDoListForm = document.getElementById('todolist-form');
const toDoListFactory = (title, description, dueDate, prior) => {
  return { title, description, dueDate, prior };
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
    li.innerHTML = list.prior;
  });
}

const createToDoList = () => {
  const listSubmit = document.getElementById('list-submit');
  listSubmit.addEventListener('click', (event) => {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const dueDate = document.getElementById('date').value;
    const prior = document.querySelector("input[name='priority']:checked").value;
    toDoListArr.push(toDoListFactory(title, description, dueDate, prior));
    toDoListForm.reset();
    event.preventDefault();
    showToDoList();
  });
};

export default createToDoList();
