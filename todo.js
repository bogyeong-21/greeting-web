const todoBox = document.querySelector(".js-todoBox"),
    todoForm = todoBox.querySelector("form"),
    todoText = todoForm.querySelector("input");
const todoList = document.querySelector(".js-todoList");

const TODO_LS = "todo";

function handleTodoSubmit(event) {
    event.preventDefault();
    const changingTodo = todoText.value;
    localStorage.setItem(TODO_LS, changingTodo);
    loadTodo();
}

function askTodo() {
    todoForm.classList.add(SHOWING_CN);
    todoList.classList.remove(SHOWING_CN);
    todoForm.addEventListener("submit", handleTodoSubmit);
}

function displayTodo(text) {
    todoForm.classList.remove(SHOWING_CN);
    todoList.classList.add(SHOWING_CN);
    var newLi = document.createElement("li");
    newLi.appendChild(document.createTextNode(text));
    todoList.appendChild(newLi);
}

function loadTodo() {
    const currentUser = localStorage.getItem(USER_LS);
    const currentTodo = localStorage.getItem(TODO_LS);
    if(currentUser === null || currentUser === "") {
        todoForm.classList.remove(SHOWING_CN);
        todoList.classList.remove(SHOWING_CN);
    } else if(currentTodo === null || currentTodo === "") {
        askTodo();
    } else {
        displayTodo(currentTodo);
    }
}

function init() {
    loadTodo();
}

init();