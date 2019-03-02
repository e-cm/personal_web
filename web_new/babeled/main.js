'use strict';

var page = {
	init: function init() {
		fade();
		square();
		window.addEventListener('resize', square);

		// Fade into the colour of the page you're going to
		document.getElementById('work').addEventListener('click', function (event) {
			event.preventDefault();
			var url = this.href;
			colourFade('red');
			setTimeout(function () {
				window.location = url;
			}, 1000);
			fade();
		});

		document.getElementById('about').addEventListener('click', function (e) {
			fadeTo('blue', this.href, e);
		});

		var proj_links = document.getElementsByClassName('pic_link');
		for (var i = 0; i < proj_links.length; i++) {
			proj_links[i].addEventListener('click', function (event) {
				event.preventDefault();
				var url = this.href;
				colourFade('yellow');
				setTimeout(function () {
					window.location = url;
				}, 1000);
				fade();
			});
		}
	}
};

function fadeTo(colour, url, event) {
	event.preventDefault();
	colourFade('blue');
	setTimeout(function () {
		window.location = url;
	}, 1000);
	fade();
}

// Fade page on load
function fade() {
	document.getElementsByClassName('canvas')[0].classList.toggle('fade');
}

// Fade colour when changing pages
function colourFade(colour) {
	var body = document.getElementsByTagName("BODY")[0];
	var work_link = document.getElementById('work');
	var about_link = document.getElementById('about');

	if (colour == 'red') {
		work_link.style.color = 'rgba(255,25,25,1)';
		about_link.style.color = 'black';
		body.style.backgroundColor = 'rgba(255,25,25,1)';
	} else if (colour == 'blue') {
		work_link.style.color = 'black';
		about_link.style.color = 'rgba(25,25,255,1)';
		body.style.backgroundColor = 'rgba(25,25,255,1)';
	} else if (colour == 'yellow') {
		work_link.style.color = 'black';
		about_link.style.color = 'black';
		body.style.backgroundColor = 'rgba(255,255,25,1)';
	}
}

// keep relevent grids square
function square() {
	var exists;

	if (eval(exists = document.getElementById('headshot'))) {
		squareHeadshot();
	} else if (eval(exists = document.getElementById('canvas_work'))) {
		squareFrame();
	}
}

function squareHeadshot() {
	var frame = document.getElementById('headshot');
	var frameWidth = frame.offsetWidth;
	frame.style.height = frameWidth + 'px';
}

function squareFrame() {
	var canvas = document.getElementById('canvas_work');
	var squareWidth = document.getElementsByClassName('project')[0].offsetWidth;
	canvas.style.gridAutoRows = squareWidth + 'px';
}

window.addEventListener('load', page.init);