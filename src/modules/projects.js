const STORAGE_KEY = 'projects';
const SELECTED_KEY = 'task.selectProjectId';

let selectedProjectId = localStorage.getItem(SELECTED_KEY);
const projects = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
const projectList = document.querySelector('.project');
const projectForm = document.getElementById('project-form');
const projectFactory = (name) => ({ id: Date.now().toString(), name, tasks: [], });;

projectList.addEventListener('click', e => {
  if (e.target.tagName.toLowerCase() === 'li') {
    selectedProjectId = e.target.dataset.projectId
    saveAndRender()
  }
})

export const showProjects = () => {

  const ul = document.createElement('ul');
  const li = document.createElement('li');

  projects.forEach((project) => {
    li.innerHTML = project.name;
    li.dataset.projectId = project.id
    li.classList.add("project-name")
    if (project.id === selectedProjectId) {
    li.classList.add('active-list')
  }
  });


  ul.appendChild(li);
  projectList.appendChild(ul);
};

function save(){
  // localStorage.setItem(SELECTED_KEY, selectedProjectId);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(projects))
}

function saveAndRender(){
  save();
  showProjects();
};

export const createProject = () => {
  document.getElementById('project-btn').addEventListener('click', (event) => {
    const name = document.getElementById('project-name').value;

    if (name == null || name === '' ){
     return false;
    }

    projects.push(projectFactory(name));
    saveAndRender();
    projectForm.reset();
    event.preventDefault();
  });
};


