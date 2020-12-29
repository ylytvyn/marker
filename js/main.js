'use strict';

const MARKERS = [
	'blue',
	'red',
	'yellow',
	'black',
	'violet',
	'green'
];

class Marker {
	constructor (color) {
		this.color = color;
		this.ink = 100;
	}

	print(txt) {
		let count = txt.replace(/ /g, '');

		if (this.ink === 0 || this.ink < (count.length * .5)) {
			showWarning('There is not enough ink in your marker. Please refill your marker');
			return;
		}

		this.ink -= count.length * .5;
		console.log(this.ink);
		markerShow.removeAttribute('class');
		markerShow.className = `marker--${this.color}`;
		markerShow.innerHTML = txt;
		
		this.draw();
	}

	refill() {
		this.ink = 100;
		this.draw();
	}

	draw() {
		let marker = document.querySelector('.marker__color');

		marker.style.height = `${this.ink}%`;
	}
}

let blueMarker = new Marker(MARKERS[0]),
	redMarker = new Marker(MARKERS[1]),
	yellowMarker = new Marker(MARKERS[2]),
	blackMarker = new Marker(MARKERS[3]),
	violetMarker = new Marker(MARKERS[4]),
	greenMarker = new Marker(MARKERS[5]);

colorSelect.addEventListener('change', function() {
	colorChange(parseInt(this.value));
});

writeMessage.addEventListener('click', () => {
	writeWithMarker(message.value, colorSelect.value);
});

refillMarker.addEventListener('click', () => {
	refillYourMarker(colorSelect.value);
});

function colorChange(color) {
	marker.removeAttribute('class');
	marker.className = `marker--${MARKERS[color]}`;
	
	switch (MARKERS[color]) {
		case MARKERS[0]:
			blueMarker.draw();
			break;
		case MARKERS[1]:
			redMarker.draw();
			break;
		case MARKERS[2]:
			yellowMarker.draw();
			break;
		case MARKERS[3]:
			blackMarker.draw();
			break;
		case MARKERS[4]:
			violetMarker.draw();
			break;
		case MARKERS[5]:
			greenMarker.draw();
			break;
	}
}

function writeWithMarker(msg, color) {
	switch (MARKERS[color]) {
		case MARKERS[0]:
			blueMarker.print(msg);
			break;
		case MARKERS[1]:
			redMarker.print(msg);
			break;
		case MARKERS[2]:
			yellowMarker.print(msg);
			break;
		case MARKERS[3]:
			blackMarker.print(msg);
			break;
		case MARKERS[4]:
			violetMarker.print(msg);
			break;
		case MARKERS[5]:
			greenMarker.print(msg);
			break;
	}
}

function refillYourMarker(color) {
	switch (MARKERS[color]) {
		case MARKERS[0]:
			blueMarker.refill();
			break;
		case MARKERS[1]:
			redMarker.refill();
			break;
		case MARKERS[2]:
			yellowMarker.refill();
			break;
		case MARKERS[3]:
			blackMarker.refill();
			break;
		case MARKERS[4]:
			violetMarker.refill();
			break;
		case MARKERS[5]:
			greenMarker.refill();
			break;
	}
}

function showWarning(msg) {
    let dialog = document.createElement('div'),
        dialogOverlay = document.createElement('div');

    dialogOverlay.className = 'dialog-overlay';
    dialog.className = 'dialog';

    dialog.innerHTML = `<p>${msg}</p>`;

    document.body.append(dialogOverlay, dialog);

    setTimeout(() => {
        dialogOverlay.remove();
        dialog.remove();
    }, 3000);
}