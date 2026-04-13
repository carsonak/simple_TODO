// app.js

let tasks = [];

function addTask(text) {
    const task = {
        id: Date.now(),
        text: text
    };

    tasks.push(task);
    return tasks;
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    return tasks;
}

function getTasks() {
    return tasks;
}