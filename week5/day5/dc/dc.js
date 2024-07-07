const tasks = [];

document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault();
    addTask();
});

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') return;

    const task = {
        id: tasks.length,
        text: taskText,
        done: false
    };

    tasks.push(task);
    taskInput.value = '';
    renderTasks();
}

function renderTasks() {
    const listTasks = document.querySelector('.listTasks');
    listTasks.innerHTML = '';

    tasks.forEach(task => {
        const taskDiv = document.createElement('div');
        taskDiv.className = 'task';
        taskDiv.setAttribute('data-task-id', task.id);

        const taskLabel = document.createElement('label');
        const taskCheckbox = document.createElement('input');
        taskCheckbox.type = 'checkbox';
        taskCheckbox.addEventListener('change', function() {
            task.done = !task.done;
            renderTasks();
        });
        
        const taskSpan = document.createElement('span');
        taskSpan.textContent = task.text;
        if (task.done) {
            taskSpan.style.textDecoration = 'line-through';
            taskSpan.style.color = 'red';
        }

        const deleteButton = document.createElement('i');
        deleteButton.className = 'fas fa-times delete';
        deleteButton.addEventListener('click', function() {
            deleteTask(task.id);
        });

        taskLabel.appendChild(taskCheckbox);
        taskLabel.appendChild(taskSpan);
        taskDiv.appendChild(deleteButton);
        taskDiv.appendChild(taskLabel);
        listTasks.appendChild(taskDiv);
    });
}

function deleteTask(taskId) {
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);
        renderTasks();
    }
}
