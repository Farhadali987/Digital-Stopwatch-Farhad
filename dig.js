let hours = 0;
let minutes = 0;
let seconds = 0;
let interval;

document.getElementById('start-btn').addEventListener('click', startStopwatch);
document.getElementById('stop-btn').addEventListener('click', stopStopwatch);
document.getElementById('reset-btn').addEventListener('click', resetStopwatch);

function startStopwatch() {
	interval = setInterval(() => {
		seconds++;
		if (seconds === 60) {
			minutes++;
			seconds = 0;
		}
		if (minutes === 60) {
			hours++;
			minutes = 0;
		}
		updateStopwatch();
	}, 1000);
	document.getElementById('start-btn').disabled = true;
	document.getElementById('stop-btn').disabled = false;
}

function stopStopwatch() {
	clearInterval(interval);
	document.getElementById('start-btn').disabled = false;
	document.getElementById('stop-btn').disabled = true;
}

function resetStopwatch() {
	hours = 0;
	minutes = 0;
	seconds = 0;
	updateStopwatch();
	stopStopwatch();
}

function updateStopwatch() {
	document.getElementById('hours').innerText = padZero(hours);
	document.getElementById('minutes').innerText = padZero(minutes);
	document.getElementById('seconds').innerText = padZero(seconds);
}

function padZero(value) {
	return (value < 10 ? '0' : '') + value;
}


