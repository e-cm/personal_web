function initScroll() {
	let canvas = document.getElementsByClassName('canvas')[0];

	scrollEffects('description');
	scrollEffects('slides');

	canvas.addEventListener('scroll', function() {
		setBarSize(canvas);
		indicateScroll(canvas, 'centerarrow');
	});

	window.addEventListener('resize', function() {
		if (window.innerWidth <= 670) setBarSize(canvas);
	});

}

function scrollEffects(elementID) {
	let element = document.getElementById(elementID);
	
	/* check that the element exists*/
	if (element) {

		/* only display the scroll arrow if the content overflows the page */
		if (element.scrollHeight > element.clientHeight) {
			switch (element) {
				case document.getElementById('description'):
					document.getElementById('leftarrow').style.opacity = 1; /* display the arrow */
					break;

				case document.getElementById('slides'):
					document.getElementById('rightarrow').style.opacity = 1; /* display the arrow */
					break;	
			}
		}

		element.addEventListener('scroll', function() {

			/* resize scroll bars */
			setBarSize(element);

			switch (element) {
				case document.getElementById('description'):
					document.getElementById('leftarrow').style.opacity = 1; /* display the arrow */
				    indicateScroll(element, 'leftarrow'); /* control when the arrow is visible */
					break;

				case document.getElementById('slides'):
				    indicateScroll(slides, 'rightarrow');
					break;	
			}

		});

		window.addEventListener('resize', function() {
			if (window.innerWidth >= 671) setBarSize(element);
		});
	}

}

function setBarSize(element) {
	let scrollPercentage;
	let barSize;

	scrollPercentage = element.scrollTop / (element.scrollHeight - element.clientHeight);

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
function indicateScroll(element, indicator) {
	let arrow = document.getElementById(indicator);
	if(arrow) {
		if(element.scrollTop > 0 && arrow.style.opacity == 1) {
			arrow.style.opacity = 0;
		} else if(element.scrollTop == 0) {
			arrow.style.opacity = 1;
		}
	}
}

window.addEventListener('load', initScroll);