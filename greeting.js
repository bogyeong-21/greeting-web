const form = document.querySelector(".js-form"),
    nameInput = form.querySelector("input[type='text']");
const greetingBox = document.querySelector(".js-greetingBox"),
    greetingText = greetingBox.querySelector(".js-greeting"),
    greetingButton = greetingBox.querySelector("input[type='button']");
const todoBox_gr = document.querySelector(".js-todoBox");

const USER_LS = "username",
    SHOWING_CN = "showing-block";


function handleSubmit(event) {
    //event.preventDefault();
    const changingName = nameInput.value;
    localStorage.setItem(USER_LS, changingName);
    loadName();
}

function askName() {
    greetingBox.classList.remove(SHOWING_CN);
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function displayGreeting(text) {
    greetingText.textContent = `Hello ${text}!`;
    greetingBox.classList.add(SHOWING_CN);
    form.classList.remove(SHOWING_CN);
}

function loadName() {
    const currentName = localStorage.getItem(USER_LS);
    if(currentName === "" || currentName === null) {
        askName();
        todoBox_gr.classList.remove(SHOWING_CN);
    } else {
        displayGreeting(currentName);
        todoBox_gr.classList.add(SHOWING_CN);
    }
}

function changeUsername() {
    localStorage.removeItem(USER_LS);
    askName();
}

function init() {
    //greetingButton.addEventListener("click", changeUsername);
    loadName();
}

init();