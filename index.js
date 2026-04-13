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
            <button onclick="handleEdit(${task.id})">Edit</button>
            <button onclick="removeTask(${task.id})">Delete</button>
        `;

        taskList.appendChild(li);
    });
}

function removeTask(id) {
    deleteTask(id);
    renderTasks();
}
function handleEdit(id) {
    const newText = prompt("Edit your task");
    if ((newText && newText.trim() !== "")) {
        editTask(id, newText); // from app.js
        renderTasks();
    }
}
