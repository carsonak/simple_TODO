// index.js

const addBtn = document.getElementById("add-taskButton");
const taskList = document.getElementById("task-list");

addBtn.addEventListener("click", () => {
    const text = prompt("Enter task");

    if (text) {
        addTask(text); // from app.js
        renderTasks();
    }
});

function renderTasks() {
    const tasks = getTasks(); // from app.js

    taskList.innerHTML = "";

    tasks.forEach(task => {
        const li = document.createElement("li");

        li.innerHTML = `
            ${task.text}
            <button onclick="removeTask(${task.id})">Delete</button>
        `;

        taskList.appendChild(li);
    });
}

function removeTask(id) {
    deleteTask(id);
    renderTasks();
}
