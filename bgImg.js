const body = document.querySelector("body");

const TOTAL_IMG = 4;

function displayImg(num) {
    const img = new Image();
    img.src = `images/${num}.jpg`;
    body.prepend(img);
    img.classList.add("bg-img");
}

function randomGen() {
    const number = Math.floor(Math.random() * TOTAL_IMG)+1;
    return number;
}

function init() {
    const genNum = randomGen();
    displayImg(genNum);
}

init();