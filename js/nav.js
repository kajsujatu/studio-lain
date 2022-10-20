// Import Database of comics
import {
	Comics
} from './comics-data.js';

// Navbar menu
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', () => {
	navbarLinks.classList.toggle('active')
});

// Dark and light mode
const toggleModeButton = document.getElementById('toggle-mode');
const currentMode = localStorage.getItem("mode");
if (currentMode == "dark") document.body.classList.add("dark-mode");

toggleModeButton.addEventListener('click', function() {
	document.body.classList.toggle('dark-mode');  
	let mode = "light";
 	if (document.body.classList.contains("dark-mode")) mode = "dark";
 	localStorage.setItem("mode", mode);
});

// Search button
const search = document.getElementById('search');
const searchInput = document.getElementById('search-input');

searchInput.addEventListener('input', function() {
	console.log(searchInput.value);
});

// Search comics title
const iconSearch = document.getElementById('icon-search');
iconSearch.addEventListener('click', function() {
	for (let i=0; i<Comics.length; i++) {
	let dataSearch = `${Comics[i].title}` + `|` + `${Comics[i].writer}` + `|` + `${Comics[i].description}`;
	dataSearch = dataSearch.toLowerCase();
	let stringToSearch = searchInput.value.toLowerCase();
	if (dataSearch.includes(stringToSearch)) {
		let dataLink = `${Comics[i].url}`;
		console.log("Jetem tu:" + dataLink);
		} else console.log("Brak wyników");
	};
});