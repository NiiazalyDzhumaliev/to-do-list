import { projects, selectedProjectId } from './logic';

const listsContainer = document.querySelector('[data-lists]');

const listDisplayContainer = document.querySelector('[data-list-display-container]');
const listTitleElement = document.querySelector('[data-list-title]');

const tasksContainer = document.querySelector('[data-tasks]');

function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}


function renderTasks(selectedList) {
  const toDoList = document.querySelector('.todolist');
  const ul = document.createElement('ul');
  ul.setAttribute('class', 'todolist-list');
  toDoList.appendChild(ul);
  ul.innerHTML += `<li>${selectedList.tasks[selectedList.tasks.length - 1].title}</li>`;
  ul.innerHTML += `<li>${selectedList.tasks[selectedList.tasks.length - 1].description}</li>`;
  ul.innerHTML += `<li>${selectedList.tasks[selectedList.tasks.length - 1].dueDate}</li>`;
  ul.innerHTML += `<li>${selectedList.tasks[selectedList.tasks.length - 1].prior}</li>`;
}


function renderLists() {
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
}
export function render() {
  clearElement(listsContainer);
  renderLists();

  const selectedList = projects.find(project => project.id === selectedProjectId);
  if (selectedProjectId == null) {
    listDisplayContainer.style.display = 'none';
  } else {
    listDisplayContainer.style.display = '';
    listTitleElement.innerText = selectedList.name;
    clearElement(tasksContainer);
    renderTasks(selectedList);
  }
}
