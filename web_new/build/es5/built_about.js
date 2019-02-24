'use strict';

// Fade page on load
function fade() {
	document.getElementsByClassName('canvas')[0].classList.toggle('fade');
}

// Fade colour when changing pages
function colourFade(colour) {
	var body = document.getElementsByTagName("BODY")[0];
	if (colour == 'red') {
		body.style.backgroundColor = 'rgba(255,25,25,1)';
	} else if (colour == 'blue') {
		body.style.backgroundColor = 'rgba(25,25,255,1)';
	} else if (colour == 'yellow') {
		body.style.backgroundColor = 'rgba(255,255,25,1)';
	}
}

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

document.getElementById('about').addEventListener('click', function (event) {
	event.preventDefault();
	var url = this.href;
	colourFade('blue');
	setTimeout(function () {
		window.location = url;
	}, 1000);
	fade();
});

var proj_links = document.getElementsByClassName('pic_link');
for (var i = 0; i < proj_links.length; i++) {
	proj_links[i].addEventListener('click', function (event) {
		event.preventDefault();
		var url = this.href;
		colourFade('yellow');
		setTimeout(function () {
			window.location = url;
		}, 750);
		fade();
	});
}

window.addEventListener('load', fade);
'use strict';

function squareHeadshot() {
	var frame = document.getElementById('headshot');
	var frameWidth = frame.offsetWidth;
	frame.style.height = frameWidth + 'px';
}

window.addEventListener('load', squareHeadshot, false);
window.addEventListener('resize', squareHeadshot, false);