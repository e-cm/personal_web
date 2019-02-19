// Fade page on load
function fade() {
	let canvas = document.getElementsByClassName('canvas')[0];
	canvas.classList.toggle('fade');
}

// Fade colour when changing pages
function colourFade(colour) {
	let body = document.getElementsByTagName("BODY")[0];
	if (colour == 'red') {
		body.style.backgroundColor = 'red';
	}
	else if (colour == 'blue') {
		body.style.backgroundColor = 'blue';
	}
	else if (colour == 'yellow') {
		body.style.backgroundColor = 'yellow';
	}
}

// Fade into the colour of the page you're going to
document.getElementById('work').addEventListener('click', function(event){
	event.preventDefault();
	let url = this.href;
	colourFade('red');
	setTimeout(function(){ window.location = url; }, 1000);
	fade();
});

document.getElementById('about').addEventListener('click', function(event){
	event.preventDefault();
	let url = this.href;
	colourFade('blue');
	setTimeout(function(){ window.location = url; }, 1000);
	fade();
});

let proj_links = document.getElementsByClassName('pic_link');
for (let i = 0; i < proj_links.length; i++) {
    proj_links[i].addEventListener('click', function(event){
		event.preventDefault();
		let url = this.href;
		colourFade('yellow');
		setTimeout(function(){ window.location = url; }, 750);
		fade();
	});
}

window.addEventListener('load', fade);