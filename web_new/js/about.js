function squareHeadshot() {
	let frame= document.getElementById('headshot');
	let frameWidth = frame.offsetWidth;
	frame.style.height = frameWidth + 'px';
}

window.addEventListener('load', squareHeadshot, false);
window.addEventListener('resize', squareHeadshot, false);