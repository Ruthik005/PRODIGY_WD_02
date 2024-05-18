let timer;
let isRunning = false;
let lapCounter = 1;

function startStop() {
    let startButton = document.getElementById("startButton");
    let stopButton = document.getElementById("stopButton");

    if (isRunning) {
        clearInterval(timer);
        startButton.innerHTML = "Start";
        stopButton.disabled = true;
    } else {
        timer = setInterval(updateTime, 10);
        startButton.innerHTML = "Stop";
        stopButton.disabled = false;
    }
    isRunning = !isRunning;
}

function lapReset() {
    if (isRunning) {
        let time = document.getElementById("display").textContent;
        let lapItem = document.createElement("li");
        lapItem.textContent = "Lap " + lapCounter + ": " + time;
        document.getElementById("laps").appendChild(lapItem);
        lapCounter++;
    } else {
        reset();
    }
}

function reset() {
    clearInterval(timer);
    isRunning = false;
    document.getElementById("display").textContent = "00:00:00";
    document.getElementById("startButton").innerHTML = "Start";
    document.getElementById("stopButton").disabled = true;
    lapCounter = 1;
    document.getElementById("laps").innerHTML = "";
}

function updateTime() {
    let display = document.getElementById("display");
    let time = display.textContent.split(":");
    let hours = parseInt(time[0], 10);
    let minutes = parseInt(time[1], 10);
    let seconds = parseInt(time[2], 10);

    seconds++;

    if (seconds === 100) {
        seconds = 0;
        minutes++;
    }
    if (minutes === 60) {
        minutes = 0;
        hours++;
    }

    display.textContent =
        (hours < 10 ? "0" : "") + hours + ":" +
        (minutes < 10 ? "0" : "") + minutes + ":" +
        (seconds < 10 ? "0" : "") + seconds;
}