'use strict';

function squareHeadshot() {
	var frame = document.getElementById('headshot');
	var frameWidth = frame.offsetWidth;
	frame.style.height = frameWidth + 'px';
}

window.addEventListener('load', squareHeadshot, false);
window.addEventListener('resize', squareHeadshot, false);