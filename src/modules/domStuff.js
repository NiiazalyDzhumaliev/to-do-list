import { projects, selectedProjectId } from './logic';

const listsContainer = document.querySelector('[data-lists]');

const listDisplayContainer = document.querySelector('[data-list-display-container]');
const listTitleElement = document.querySelector('[data-list-title]');

const tasksContainer = document.querySelector('[data-tasks]');

const clearElement = (element) => {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
};


const showTodos = (selectedList) => {
  // const toDoList = document.querySelector('.todolist');
  // const ul = document.createElement('ul');
  // ul.setAttribute('class', 'todolist-list');
  // toDoList.appendChild(ul);
  // ul.innerHTML += `<li>${selectedList.tasks[selectedList.tasks.length - 1].title}</li>`;
  // ul.innerHTML += `<li>${selectedList.tasks[selectedList.tasks.length - 1].description}</li>`;
  // ul.innerHTML += `<li>${selectedList.tasks[selectedList.tasks.length - 1].dueDate}</li>`;
  // ul.innerHTML += `<li>${selectedList.tasks[selectedList.tasks.length - 1].prior}</li>`;

  selectedList.tasks.forEach((task) => {
    const filteredTask = task;
    delete filteredTask.id;
    Object.values(filteredTask).forEach((task1) => {
      const ul = document.createElement('ul');
      ul.setAttribute('class', 'todolist-list');
      tasksContainer.appendChild(ul);
      const li = document.createElement('li');
      li.innerHTML = task1;
      ul.appendChild(li);
    });
  });
};


const showProjects = () => {
  projects.forEach(project => {
    const listElement = document.createElement('li');
    listElement.dataset.projectId = project.id;
    listElement.classList.add('list-name');
    listElement.innerText = project.name;
    if (project.id === selectedProjectId) {
      listElement.classList.add('active-list');
    }
    listsContainer.appendChild(listElement);
  });
};
export const render = () => {
  clearElement(listsContainer);
  showProjects();

  const selectedList = projects.find(project => project.id === selectedProjectId);
  if (selectedProjectId == null) {
    listDisplayContainer.style.display = 'none';
  } else {
    listDisplayContainer.style.display = '';
    listTitleElement.innerText = selectedList.name;
    clearElement(tasksContainer);
    showTodos(selectedList);
  }
};
