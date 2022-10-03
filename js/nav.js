// Navbar menu
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', () => {
	navbarLinks.classList.toggle('active')
});

// Dark and light mode - variables
const moon = document.getElementById('moon');
const sun = document.getElementById('sun');
const container = document.getElementById('container');
const customize = document.getElementById('customize');
/* const containerPage = document.getElementById('container-page'); 
const textColor = document.querySelectorAll('p'); */

// Dark and light mode - functions
moon.addEventListener('click', function() {
	document.body.style.backgroundColor = "#121212";
	sun.style.display = "inline";
	moon.style.display = "none";
	container.style.backgroundColor = "#121212";
	customize.style.color = "#d7d7d7";
	containerPage.style.backgroundColor = "#121212";
	textColor.style.color = "#FFFFFF";
});

sun.addEventListener('click', function() {
	document.body.style.backgroundColor = "#E7E9EC";
	sun.style.display = "none";
	moon.style.display = "inline";
	container.style.backgroundColor = "#E7E9EC";
	customize.style.color = "#000000";
});

// Search button
const search = document.getElementById('search');
const searchInput = document.getElementById('search-input');

search.addEventListener('click', function() {
	searchInput.style.display = "inherit";
	//searchInput.style.transform = "scaleX(2)";
	//searchInput.style.backgroundColor: "#DCDCDC";
});