const clockContainer = document.querySelector(".js-clock");
const clockText = clockContainer.querySelector("h1");

function getTime() {
    const date = new Date();
    let hrs = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let clock_txt = `${(hrs<10)?'0'+hrs:hrs}:${(min<10)?'0'+min:min}:${(sec<10)?'0'+sec:sec}`;
    clockText.textContent = clock_txt;
}

function init() {
    getTime();
    const clockInterval = setInterval(getTime, 1000);
}

init();