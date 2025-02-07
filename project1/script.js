// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value.trim();

    if (taskValue === '') {
        alert('Please enter a task!');
        return;
    }

    const taskList = document.getElementById('taskList');

    // Create a new list item
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        ${taskValue} 
        <button onclick="removeTask(this)">Delete</button>
       
    `;
    
    // Mark task as completed on click
    listItem.addEventListener('click', function() {
        listItem.classList.toggle('completed');
    });

    taskList.appendChild(listItem);
    taskInput.value = '';
}

// Function to remove a task
function removeTask(taskElement) {
    const listItem = taskElement.parentElement;
    listItem.remove();
}
