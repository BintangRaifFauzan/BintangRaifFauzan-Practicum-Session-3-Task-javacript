// Toggle Dark Mode
const toggleModeCheckbox = document.getElementById('toggleMode');
toggleModeCheckbox.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
});

// Adjust Font Size
const fontSizeSlider = document.getElementById('fontSize');
fontSizeSlider.addEventListener('input', (event) => {
  document.body.style.fontSize = event.target.value + 'px';
});

// Add Task Functionality
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');
const newTaskInput = document.getElementById('newTask');

// Add Task
addTaskButton.addEventListener('click', () => {
  const taskText = newTaskInput.value.trim();
  
  if (taskText) {
    const listItem = document.createElement('li');
    const taskContent = document.createElement('span');
    taskContent.textContent = taskText;
    
    const actions = document.createElement('div');
    actions.classList.add('actions');

    // Edit Button
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', () => editTask(taskContent));

    // Delete Button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => taskList.removeChild(listItem));

    actions.appendChild(editButton);
    actions.appendChild(deleteButton);
    
    listItem.appendChild(taskContent);
    listItem.appendChild(actions);

    taskList.appendChild(listItem);
    newTaskInput.value = '';  // Clear input after adding task
  }
});

// Optional: Add task on Enter key press
newTaskInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addTaskButton.click();
  }
});

// Edit Task
function editTask(taskContent) {
  const newTaskText = prompt('Edit your task:', taskContent.textContent);
  if (newTaskText !== null) {
    taskContent.textContent = newTaskText;
  }
}
