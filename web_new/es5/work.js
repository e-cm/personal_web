'use strict';

// Makes each project frame a square
function squareFrame() {
   var canvas = document.getElementById('canvas_work');
   var squareWidth = document.getElementsByClassName('project')[0].offsetWidth;
   canvas.style.gridAutoRows = squareWidth + 'px';
}

window.addEventListener('load', squareFrame);
window.addEventListener('resize', squareFrame);