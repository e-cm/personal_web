// Makes each project frame a square
function squareFrame() {
	let canvas = document.getElementById('canvas');
    let squareWidth = document.getElementsByClassName('project')[0].offsetWidth;
    canvas.style.gridAutoRows = squareWidth + 'px';
}

window.addEventListener('load', squareFrame, false);
window.addEventListener('resize', squareFrame, false);