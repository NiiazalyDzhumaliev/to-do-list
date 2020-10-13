const toDoListArr = [];
const toDoListForm = document.getElementById('todolist-form');
const toDoListFactory = (title, description, dueDate, prior) => {
  return { title, description, dueDate, prior };
};

function showToDoList() {
  let title = document.getElementById('tod-title');
  let desc = document.getElementById('desc');
  let d-date = document.getElementById('d-date');
  let prio = document.getElementById('prior');



  // const toDoList = document.querySelector('.todolist');
  // const ul = document.createElement('ul');
  // ul.setAttribute('class', 'todolist-list');
  // toDoList.appendChild(ul);
  // const li = document.createElement('li');
  // li.setAttribute('class', 'todolist-item');
  // ul.appendChild(li);
  toDoListArr.forEach((list) => {
    title.innerHTML = list.title;
    desc.innerHTML = list.description;
    d-date.innerHTML = list.dueDate;
    prio.innerHTML = list.prior;
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
