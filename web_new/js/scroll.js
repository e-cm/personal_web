function initScroll() {
	let canvas = document.getElementsByClassName('canvas')[0];

	scrollBars('description');
	scrollBars('slides')

	canvas.addEventListener('scroll', function() {
		setBarSize(canvas);
	});

	window.addEventListener('resize', function() {
		if (window.innerWidth <= 670) setBarSize(canvas);
	});
}

function scrollBars(elementID) {
	let element = document.getElementById(elementID);
	
	if (element) {
		element.addEventListener('scroll', function() {
			setBarSize(element);
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
	barSize = scrollPercentage * (window.innerWidth / 2 - 40);

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