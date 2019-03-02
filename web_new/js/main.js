/* * * Functions * * */

// perform CSS-alterations and initialize listeners
function init() {
	toggleFade();
	squareRatio();
	window.addEventListener('resize', squareRatio);

	// Fade into the colour of the page you're going to
	document.getElementById('work').addEventListener('click', function(event){
		fadeOnExit('red', this.href, e);
	});

	document.getElementById('about').addEventListener('click', function(e){
		fadeOnExit('blue', this.href, e);
	});

	let proj_links = document.getElementsByClassName('pic_link');
	for (let i = 0; i < proj_links.length; i++) {
	    proj_links[i].addEventListener('click', function(event){
			fadeOnExit('yellow', this.href, e);
		});
	}
}

// fade-out on page switch
function fadeOnExit(colour, url, event) {
	event.preventDefault();
	colourFade(colour);
	setTimeout(function(){ window.location = url; }, 1000);
	toggleFade();
}

// Fade into page on load
function toggleFade() {
	document.getElementsByClassName('canvas')[0].classList.toggle('fade');
}

// Fade colour when changing pages
function colourFade(colour) {
	let body = document.getElementsByTagName("BODY")[0];
	let work_link = document.getElementById('work');
	let about_link = document.getElementById('about');

	if (colour == 'red') {
		work_link.style.color = 'rgba(255,25,25,1)';
		about_link.style.color = 'black';
		body.style.backgroundColor = 'rgba(255,25,25,1)';
	}
	else if (colour == 'blue') {
		work_link.style.color = 'black';
		about_link.style.color = 'rgba(25,25,255,1)';
		body.style.backgroundColor = 'rgba(25,25,255,1)';
	}
	else if (colour == 'yellow') {
		work_link.style.color = 'black';
		about_link.style.color = 'black';
		body.style.backgroundColor = 'rgba(255,255,25,1)';
	}
}

// keep relevent grid objects square
function squareRatio() {
	let target;

	if (eval(target = document.getElementById('headshot'))) {
		squareHeadshot();
	}
	else if (eval(target = document.getElementById('canvas_work'))) {
		squareProject(); 
	}
}

function squareHeadshot() {
	let headshot = document.getElementById('headshot');
	let headshotWidth = headshot.offsetWidth;
	headshot.style.height = headshotWidth + 'px';
}

function squareProject() {
	let canvas = document.getElementById('canvas_work');
    let projectWidth = document.getElementsByClassName('project')[0].offsetWidth;
    canvas.style.gridAutoRows = projectWidth + 'px';
}


/* * * Main * * */

window.addEventListener('load', init);