/* * * Colours * * */
let red = 'rgba(255,75,75,1)';
let blue = 'rgba(75,75,255,1)';
let yellow = 'rgba(255,255,75,1)';


/* * * Functions * * */

// Perform CSS-alterations and initialize listeners
function init() {
	toggleFade();
	squareRatio();
	window.addEventListener('resize', squareRatio);

	// Fade into the colour of the page you're going to
	document.getElementById('work').addEventListener('click', function(e){
		fadeOnExit('red', this.href, e);
	});

	document.getElementById('about').addEventListener('click', function(e){
		fadeOnExit('blue', this.href, e);
	});

	// If you're on the main page, add listener to each project link
	let proj_links = document.getElementsByClassName('pic_link');
	for (let i = 0; i < proj_links.length; i++) {
	    proj_links[i].addEventListener('click', function(e){
			fadeOnExit('yellow', this.href, e);
		});

		proj_links[i].addEventListener('mouseenter', function(e){
			proj_links[i].children[0].style.display = 'none';
			proj_links[i].children[1].style.display = 'block';
		});

		proj_links[i].addEventListener('mouseleave', function(e){
			proj_links[i].children[0].style.display = 'block';
			proj_links[i].children[1].style.display = 'none';
		});
	}
}

// Fade-out on page switch
function fadeOnExit(colour, url, event) {
	event.preventDefault();
	colourFade(colour);
	setTimeout(function(){ window.location = url; }, 500);
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
		work_link.style.color = red;
		about_link.style.color = 'black';
		body.style.backgroundColor = red;
	}
	else if (colour == 'blue') {
		work_link.style.color = 'black';
		about_link.style.color = blue;
		body.style.backgroundColor = blue;
	}
	else if (colour == 'yellow') {
		work_link.style.color = 'black';
		about_link.style.color = 'black';
		body.style.backgroundColor = yellow;
	}
}

// Keep relevent grid objects square on the main page and about page
function squareRatio() {
	let target;
	
	if (eval(target = document.getElementById('headshot'))) {
		squareHeadshot(target);
	}
	else if (eval(target = document.getElementById('canvas_work'))) {
		squareProject(target); 
	}
}

function squareHeadshot(headshot) {
	let headshotWidth = headshot.offsetWidth;
	headshot.style.height = headshotWidth + 'px';
}

function squareProject(canvas) {
    let projectWidth = document.getElementsByClassName('project')[0].offsetWidth;
    canvas.style.gridAutoRows = projectWidth + 'px';
}


/* * * Main * * */

window.addEventListener('load', init);