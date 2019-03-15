'use strict';

/* * * Functions * * */

// perform CSS-alterations and initialize listeners
function init() {
	toggleFade();
	squareRatio();
	window.addEventListener('resize', squareRatio);

	// Fade into the colour of the page you're going to
	document.getElementById('work').addEventListener('click', function (e) {
		fadeOnExit('red', this.href, e);
	});

	document.getElementById('about').addEventListener('click', function (e) {
		fadeOnExit('blue', this.href, e);
	});

	var proj_links = document.getElementsByClassName('pic_link');
	for (var i = 0; i < proj_links.length; i++) {
		proj_links[i].addEventListener('click', function (e) {
			fadeOnExit('yellow', this.href, e);
		});
	}
}

// fade-out on page switch
function fadeOnExit(colour, url, event) {
	event.preventDefault();
	colourFade(colour);
	setTimeout(function () {
		window.location = url;
	}, 500);
	toggleFade();
}

// Fade into page on load
function toggleFade() {
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

// keep relevent grid objects square
function squareRatio() {
	var target = void 0;

	if (eval(target = document.getElementById('headshot'))) {
		squareHeadshot();
	} else if (eval(target = document.getElementById('canvas_work'))) {
		squareProject();
	}
}

function squareHeadshot() {
	var headshot = document.getElementById('headshot');
	var headshotWidth = headshot.offsetWidth;
	headshot.style.height = headshotWidth + 'px';
}

function squareProject() {
	var canvas = document.getElementById('canvas_work');
	var projectWidth = document.getElementsByClassName('project')[0].offsetWidth;
	canvas.style.gridAutoRows = projectWidth + 'px';
}

/* * * Main * * */

window.addEventListener('load', init);