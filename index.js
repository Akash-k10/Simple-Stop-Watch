const display = document.getElementById("display");
let timer = null;
let start_time = 0;
let elapsed = 0;
let isrunning = false;

function start() {
    if (!isrunning) {
        start_time = Date.now() - elapsed;
        timer = setInterval(update, 10);
        isrunning = true;
    }
}

function stop() {
    if (isrunning) {
        clearInterval(timer);
        elapsed = Date.now() - start_time;
        isrunning = false;
    }
}

function reset() {
    clearInterval(timer);
    start_time = 0;
    elapsed = 0;
    isrunning = false;
    display.textContent = "00:00:00:00";
}

function update() {
    const current = Date.now();

    elapsed = current - start_time;

    let hours = Math.floor(elapsed / (1000 * 60 * 60));
    let mins = Math.floor((elapsed / (1000 * 60)) % 60);
    let secs = Math.floor((elapsed / 1000) % 60);
    let mil = Math.floor((elapsed % 1000) / 10);

    hours = String(hours).padStart(2, "0");
    mins = String(mins).padStart(2, "0");
    secs = String(secs).padStart(2, "0");
    mil = String(mil).padStart(3, "0");

    display.textContent = `${hours}:${mins}:${secs}:${mil}`;
}
