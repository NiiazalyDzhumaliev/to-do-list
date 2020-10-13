export const projects = [];

const projectForm = document.getElementById('project-form');

export const projectFactory = (name) => ({ name });

export const showProjects = () => {
  const projectList = document.querySelector('.project');
  const ul = document.createElement('ul');
  const li = document.createElement('li');

  projects.forEach((project) => {
    li.innerHTML = project.name;
  });
  ul.appendChild(li);
  projectList.appendChild(ul);
};

export const createProject = () => {
  document.getElementById('project-btn').addEventListener('click', (event) => {
    const name = document.getElementById('project-name').value;
    projects.push(projectFactory(name));
    projectForm.reset();
    event.preventDefault();
    showProjects();
  });
};