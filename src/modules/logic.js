/* eslint-disable import/no-mutable-exports */
/* eslint-disable import/no-cycle */

import { render, selectedProjectId, SELECTED_PROJECTS_KEY } from './domStuff';

const listsContainer = document.querySelector('[data-lists]');
const deleteProjectBtn = document.querySelector('.delProject');

const PROJECTS_KEY = 'projects';
export let projects = JSON.parse(localStorage.getItem(PROJECTS_KEY)) || [];

const projectForm = document.getElementById('project-form');
const projectFactory = (name) => ({ id: Date.now().toString(), name, tasks: [] });


const toDoListFactory = (title, description, dueDate, prior) => ({
  id: Date.now().toString(), title, description, dueDate, prior,
});

const save = () => {
  localStorage.setItem(PROJECTS_KEY, JSON.stringify(projects));
  localStorage.setItem(SELECTED_PROJECTS_KEY, selectedProjectId);
};
export const saveAndRender = () => {
  save();
  render();
};


listsContainer.addEventListener('click', e => {
  if (e.target.tagName.toLowerCase() === 'li') {
    selectedProjectId = e.target.dataset.projectId;
    saveAndRender();
  }
});


deleteProjectBtn.addEventListener('click', () => {
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
  toDoListForm.style.display = 'none';
  event.preventDefault();
  saveAndRender();
});

document.querySelector('.newtodo').addEventListener('click', () => {
  if (document.getElementById('todolist-form').style.display === 'none') {
    document.getElementById('todolist-form').style.display = 'block';
  }
});


if (projectForm) {
  projectForm.addEventListener('submit', (event) => {
    const name = document.getElementById('project-name').value;

    if (name == null || name === '') {
      return false;
    }

    projects.push(projectFactory(name));
    saveAndRender();
    event.preventDefault();
    return false;
  });
}
