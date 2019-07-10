'use strict';

function initScroll() {
	var canvas = document.getElementsByClassName('canvas')[0];

	scrollBars('description');
	scrollBars('slides');

	canvas.addEventListener('scroll', function () {
		setBarSize(canvas);
	});

	window.addEventListener('resize', function () {
		if (window.innerWidth <= 670) setBarSize(canvas);
	});
}

function scrollBars(elementID) {
	var element = document.getElementById(elementID);

	if (element) {
		element.addEventListener('scroll', function () {
			setBarSize(element);
		});

		window.addEventListener('resize', function () {
			if (window.innerWidth >= 671) setBarSize(element);
		});
	}
}

function setBarSize(element) {
	var scrollPercentage = void 0;
	var barSize = void 0;

	scrollPercentage = element.scrollTop / (element.scrollHeight - element.clientHeight);

	if (window.innerWidth < 1200) {
		barSize = scrollPercentage * (window.innerWidth / 2 - 40);
	} else {
		barSize = scrollPercentage * 575;
	}

	switch (element) {
		case document.getElementById('description'):
			document.getElementById('left-scroll').style.width = barSize + 'px';
			break;

		case document.getElementById('slides'):
			document.getElementById('right-scroll').style.width = barSize + 'px';
			break;

		default:
			document.getElementById('left-scroll').style.width = barSize + 'px';
			document.getElementById('right-scroll').style.width = barSize + 'px';
	}
}

window.addEventListener('load', initScroll);