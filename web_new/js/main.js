// Makes each project frame a square
function squareFrame() {
	let canvas = document.getElementById('canvas_work');
    let squareWidth = document.getElementsByClassName('project')[0].offsetWidth;
    canvas.style.gridAutoRows = squareWidth + 'px';
}

function squareHeadshot() {
	let frame= document.getElementById('headshot');
	let frameWidth = frame.offsetWidth;
	frame.style.height = frameWidth;
}

window.addEventListener('load', squareFrame, false);
window.addEventListener('resize', squareFrame, false);