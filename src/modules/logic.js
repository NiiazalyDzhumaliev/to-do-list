import { render } from './domStuff';

const listsContainer = document.querySelector('[data-lists]');
const deleteListButton = document.querySelector('[data-delete-list-button]');
const clearCompleteTasksButton = document.querySelector('[data-clear-complete-tasks-button]');

const LOCAL_STORAGE_LIST_KEY = 'projects';
const LOCAL_STORAGE_SELECTED_LIST_ID_KEY = 'selectedProjectId';
export let projects = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];
export let selectedProjectId = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY);

const projectForm = document.getElementById('project-form');

const projectFactory = (name) => ({ id: Date.now().toString(), name, tasks: [] });


const toDoListFactory = (title, description, dueDate, prior) => ({
  id: Date.now().toString(), title, description, dueDate, prior,
});

function save() {
  localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(projects));
  localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY, selectedProjectId);
}
function saveAndRender() {
  save();
  render();
}

listsContainer.addEventListener('click', e => {
  if (e.target.tagName.toLowerCase() === 'li') {
    selectedProjectId = e.target.dataset.projectId;
    saveAndRender();
  }
});

clearCompleteTasksButton.addEventListener('click', () => {
  const selectedList = projects.find(list => list.id === selectedProjectId);
  selectedList.tasks = selectedList.tasks.filter(task => !task.complete);
  saveAndRender();
});

deleteListButton.addEventListener('click', () => {
  projects = projects.filter(project => project.id !== selectedProjectId);
  selectedProjectId = null;
  saveAndRender();
});


const toDoListForm = document.getElementById('todolist-form');
const listSubmit = document.getElementById('list-submit');
listSubmit.addEventListener('click', (event) => {
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const dueDate = document.getElementById('date').value;
  const prior = document.querySelector("input[name='priority']:checked").value;

  const selectedList = projects.find(project => project.id === selectedProjectId);
  selectedList.tasks.push(toDoListFactory(title, description, dueDate, prior));

  toDoListForm.reset();
  event.preventDefault();
  saveAndRender();
});


document.getElementById('project-btn').addEventListener('click', (event) => {
  const name = document.getElementById('project-name').value;

  if (name == null || name === '') {
    return false;
  }

  projects.push(projectFactory(name));
  saveAndRender();
  projectForm.reset();
  event.preventDefault();
});