const addBtn = document.getElementById("add-taskButton");
const taskList = document.getElementById("task-list");

addBtn.addEventListener("click", () => {
  const text = prompt("Enter task");

  if (text) {
    addTask(text);
    renderTasks();
  }
});

window.addEventListener("DOMContentLoaded", () => {
  renderTasks();
});

function renderTasks() {
  const tasks = getTasks();

  taskList.innerHTML = "";

  tasks.forEach((task) => {
    const li = document.createElement("li");

    li.innerHTML = `
            <span>${task.text}</span>
            <div class="actions">
                <button class="edit-btn" onclick="handleEdit(${task.id})">Edit</button>
                <button class="delete-btn" onclick="removeTask(${task.id})">Delete</button>
            </div>
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
  if (newText && newText.trim() !== "") {
    editTask(id, newText);
    renderTasks();
  }
}
