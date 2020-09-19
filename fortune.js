const fortuneBox = document.querySelector(".js-fortuneBox"),
    fortuneForm = document.querySelector(".js-fortuneForm"),
    year = fortuneForm.querySelector("#year"),
    month = fortuneForm.querySelector("#month"),
    day = fortuneForm.querySelector("#day"),
    showBtn = fortuneForm.querySelector("input[type='button']");

const SHOWING_CN_FLEX = "showing-flex";

function calculateLastday() {
    var Year = year.value;
    var Month = month.value;
    var Day = new Date(new Date(Year, Month, 1) - 86400000).getDate();
    var idx_len = day.length;
    if (Day > idx_len) {
        for (var i = (idx_len + 1); i <= Day; i++) {
            day.options[i - 1] = new Option(i, i);
        }
    } else if (Day < idx_len) {
        for (var i = idx_len; i >= Day; i--) {
            day.remove(i);
        }
    }
}

function fillSelect() {
    var start_year = "1930";
    var today = new Date();
    var today_year = today.getFullYear();
    var index = 0;
    for (var y = start_year; y <= today_year; y++) { //start_year ~ 현재 년도 
        year.options[index] = new Option(y, y);
        index++;
    }

    index = 0;
    for (var m = 1; m <= 12; m++) {
        month.options[index] = new Option(m, m);
        index++;
    }

    calculateLastday();
}

function loadFortune() {
    const currentUser = localStorage.getItem(USER_LS);

    if(currentUser === null || currentUser === "") {
        fortuneBox.classList.remove(SHOWING_CN_FLEX);
    } else {
        fortuneBox.classList.add(SHOWING_CN_FLEX);
        fillSelect();
    }
}


function notyetFn() {
    alert("NOT YET!");
}

function init() {
    loadFortune();
    showBtn.addEventListener("click", notyetFn);
}

init();
