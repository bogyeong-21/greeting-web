const todoBox = document.querySelector(".js-todoBox"),
    todoForm = todoBox.querySelector("form"),
    todoText = todoForm.querySelector("input"),
    createBtn = todoBox.querySelector(".js-crBtn"),
    deleteBtn = todoBox.querySelector(".js-delBtn");
const todoList = document.querySelector(".js-todoList");

const TODO_LS = "todo",
    SHOWING_CN_INLINE = "showing-inline";

function cleanArr(arr) {
    for(var i = 0; i < arr.length; i++) {
        arr[i].id = i;
    }
    return arr;
}


function deleteChecked() {
    const todoLis = todoList.children;
    if(todoLis.length === 0) return;

    let todoArr = JSON.parse(localStorage.getItem(TODO_LS));
    let idx = 0;

    while(todoLis.length !== idx) {
        const li = todoLis[idx];
        //console.log(`${idx} start: ${li.children[1].textContent}`);
        if(li.children[0].checked) {
            todoList.removeChild(li);
            for(var i = 0; i < todoArr.length; i++) {
                if(todoArr[i].id.toString() === li.id) {
                    todoArr.splice(i, 1);
                    break;
                }
            }
        }
        else { idx++; }
        //console.log(`END next idx: ${idx}`);
    }
    todoArr = cleanArr(todoArr);
    //console.log(todoArr);
    localStorage.setItem(TODO_LS, JSON.stringify(todoArr));
}

function displaySingleTodo(text, id) {
    todoForm.classList.remove(SHOWING_CN);
    todoList.classList.add(SHOWING_CN);
    createBtn.classList.add(SHOWING_CN_INLINE);
    deleteBtn.classList.add(SHOWING_CN_INLINE);

    const newLi = document.createElement("li");
    const delChk = document.createElement("input");
    delChk.type = "checkbox";
    delChk.value = text;
    const spanTxt = document.createElement("span");
    spanTxt.textContent = text;
    newLi.appendChild(delChk);
    newLi.appendChild(spanTxt);
    newLi.id = id;

    todoList.appendChild(newLi);
}

function handleTodoSubmit(event) {
    event.preventDefault();
    let todoArr = JSON.parse(localStorage.getItem(TODO_LS));
    if(todoArr === null) todoArr = [];
    const newTodo = {
        id: todoArr.length,
        value: todoText.value
    };
    todoArr.push(newTodo);
    localStorage.setItem(TODO_LS, JSON.stringify(todoArr));
    displaySingleTodo(newTodo.value, todoArr.length);
}

function askTodo(isFirstTime) {
    todoForm.classList.add(SHOWING_CN);
    todoList.classList.remove(SHOWING_CN);
    createBtn.classList.remove(SHOWING_CN_INLINE);
    deleteBtn.classList.remove(SHOWING_CN_INLINE);
    todoForm.addEventListener("submit", handleTodoSubmit);
}

function displayAll(textArr) {
    todoForm.classList.remove(SHOWING_CN);
    todoList.classList.add(SHOWING_CN);
    createBtn.classList.add(SHOWING_CN_INLINE);
    deleteBtn.classList.add(SHOWING_CN_INLINE);

    textArr.forEach(function(elem){
        const text = elem.value;
        displaySingleTodo(text, elem.id);
    })
}

function loadTodo() {
    const currentUser = localStorage.getItem(USER_LS);
    const currentTodoStr = localStorage.getItem(TODO_LS);
    const currentTodoArr = JSON.parse(currentTodoStr);
    //console.log(currentTodoArr);

    if(currentUser === null || currentUser === "") {
        todoForm.classList.remove(SHOWING_CN);
        todoList.classList.remove(SHOWING_CN);
        createBtn.classList.remove(SHOWING_CN_INLINE);
        deleteBtn.classList.remove(SHOWING_CN_INLINE);
    } else if(currentTodoArr === null || currentTodoArr === "") {
        askTodo();
    } else {
        displayAll(currentTodoArr);
    }
}

function init() {
    loadTodo();
    createBtn.addEventListener("click", askTodo);
    deleteBtn.addEventListener("click", deleteChecked);
}

init();