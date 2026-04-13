let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask(text) {
  const task = {
    id: Date.now(),
    text: text,
    status: "not_started"
  };

  tasks.push(task);
  saveTasks();
  return tasks;
}

function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
  saveTasks();
  return tasks;
}

function getTasks() {
  return tasks;
}

function editTask(id, newText) {
  tasks = tasks.map((task) => {
    if (task.id === id) {
      return { ...task, text: newText };
    }

    return task;
  });

  saveTasks();
  return tasks;
}

function updateTaskStatus(id, status) {
    tasks = tasks.map(task => {
        if (task.id === id) {
            return {
                ...task,
                status: status
            };
        }
        return task;
    });

  saveTasks();
    return tasks;
}