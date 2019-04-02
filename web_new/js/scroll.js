function scrollBars(elementID) {
	let element = document.getElementById(elementID);
	
	if (element) {
		setBarSize(element);
	}
}

function setBarSize(element) {

	console.log(element);

	let scrollPercentage;
	let barSize;

	element.addEventListener('scroll', function(e){
		scrollPercentage = element.scrollTop / (element.scrollHeight - element.clientHeight);
		barSize = scrollPercentage * (window.innerHeight - 118);

		switch (element) {
			case document.getElementById('description'):
			    document.getElementById('left-scroll').style.height = barSize + 'px';
				break;

			case document.getElementById('slides'):
			    document.getElementById('right-scroll').style.height = barSize + 'px';
				break;

			default:
				document.getElementById('left-scroll').style.height = barSize + 'px';
				document.getElementById('right-scroll').style.height = barSize + 'px';
			}

	});

}

window.addEventListener('load', scrollBars('description'));
window.addEventListener('load', scrollBars('slides'));
window.addEventListener('load', scrollBars('canvas_work'));