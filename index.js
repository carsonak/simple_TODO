const addBtn = document.getElementById("add-taskButton");
const taskList = document.getElementById("task-list");
let activeManageTaskId = null;

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

    let statusButtons = "";

    if (activeManageTaskId === task.id) {
      statusButtons = `
        <div class="status-buttons">
          <button 
            onclick="changeStatus(${task.id}, 'not_started')"
            class="${task.status === 'not_started' ? 'active' : ''}">
            Not Started
          </button>

          <button 
            onclick="changeStatus(${task.id}, 'in_progress')"
            class="${task.status === 'in_progress' ? 'active' : ''}">
            In Progress
          </button>

          <button 
            onclick="changeStatus(${task.id}, 'done')"
            class="${task.status === 'done' ? 'active' : ''}">
            Done
          </button>
        </div>
      `;
    }

    li.innerHTML = `
      <span>
  ${task.text}
  <small style="margin-left:10px; color:gray;">
    (${task.status.replace("_", " ")})
  </small>
</span>

      <div class="actions">
        <button class="edit-btn" onclick="handleEdit(${task.id})">Edit</button>
        <button class="edit-btn" onclick="manageTask(${task.id})">Manage</button>
        <button class="delete-btn" onclick="removeTask(${task.id})">Delete</button>
      </div>

      ${statusButtons}
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

function manageTask(id) {
    activeManageTaskId = id;
    renderTasks();
}

function changeStatus(id, status) {
    updateTaskStatus(id, status);
    renderTasks();
}

