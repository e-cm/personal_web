'use strict';

function initScroll() {
	// let canvas = document.getElementsByClassName('canvas')[0];

	/* create event listeners related to scrolling on project pages*/
	scrollEffects('canvas', 'centerarrow');
	scrollEffects('description', 'leftarrow');
	scrollEffects('slides', 'rightarrow');

	/* default scroll event listeners for all pages*/
	window.addEventListener('resize', function () {
		if (window.innerWidth <= 670) {
			setBarSize(canvas);
		}
	});
	canvas.addEventListener('scroll', function () {
		if (window.innerWidth <= 670) {
			setBarSize(canvas);
		}
	});
}

function scrollEffects(elementID, arrowID) {
	var element = document.getElementById(elementID);
	var arrow = document.getElementById(arrowID);
	var canvas = document.getElementsByClassName('canvas')[0];
	/* if no element was found by the ID, it is the canvas */
	if (!element) element = canvas;

	/* check that the element and arrow exists */
	if (element && arrow) {

		/* check if the arrow needs to be displayed */
		indicateScroll(element, arrow);

		/* whenever the element is scrolled, update the scroll bar and arrow */
		element.addEventListener('scroll', function () {
			/* resize scroll bars */
			setBarSize(element);
			/* control when the arrow is visible */
			indicateScroll(element, arrow);
		});

		/* recalculate scroll bars and arrows when resizing the window*/
		window.addEventListener('resize', function () {
			/* if the window is in desktop mode, update scroll bars */
			if (window.innerWidth > 670) {
				setBarSize(element);
			}
			indicateScroll(element, arrow);
		});
	}
}

function setBarSize(element) {
	var scrollPercentage = void 0;
	var barSize = void 0;

	/* calculate the percentage the element has been scrolled*/
	scrollPercentage = element.scrollTop / (element.scrollHeight - element.clientHeight);

	/* calculate the pixel width of the scroll bar, capping it when the window exceeds 1200px */
	if (window.innerWidth < 1200) {
		barSize = scrollPercentage * (window.innerWidth / 2 - 40); /* 40 = border-LR (15) - center logo offset (25) */
	} else {
		barSize = scrollPercentage * 560; /* 560 = max-canvas-width/2 (600) - border-LR (15) - center logo offset (25) */
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

// display an indicator that the content is scrollable 
// only if they haven't yet scrolled
function indicateScroll(element, arrow) {
	/* only display the scroll arrow if the content overflows the page */
	if (element.scrollHeight > element.clientHeight) {
		if (element.scrollTop > 0 && arrow.style.opacity == 1) {
			arrow.style.opacity = 0;
		} else if (element.scrollTop == 0) {
			arrow.style.opacity = 1;
		}
		/* otherwise don't display it */
	} else {
		arrow.style.opacity = 0;
	}
}

window.addEventListener('load', initScroll);