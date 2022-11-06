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
const search = document.getElementById('icon-search');
const iconSearch = document.getElementById('icon-search-content');
const searchLayout = document.getElementById('search-layout');
const searchLayoutClose = document.getElementById('search-layout-close');
const searchInput = document.getElementById('search-input');
const searchOutput = document.getElementById('search-output');

search.addEventListener('click', function() {
	searchLayout.style.display = "flex";
});

searchLayoutClose.addEventListener('click', function() {
	searchLayout.style.display = "none";
});

searchInput.addEventListener('input', function() {
	// console.log(searchInput.value);
	// searchOutput.innerText = searchInput.value;
	
});

// Search content
iconSearch.addEventListener('click', function() {
	for (let i=0; i<Comics.length; i++) {
	let dataSearch = `${Comics[i].title} | ${Comics[i].writer} | ${Comics[i].art} | ${Comics[i].translator} | ${Comics[i].proofreader} | ${Comics[i].description} | ${Comics[i].details} | ${Comics[i].detailsOriginalEdition}`;
	dataSearch = dataSearch.toLowerCase();
	let stringToSearch = searchInput.value.toLowerCase();

	if (dataSearch.includes(stringToSearch)) {
		console.log(Comics[i].url);

		let resultDiv = document.createElement('div');
		searchOutput.appendChild(resultDiv);
		let result = `<p>Sprawdź: <a href="${Comics[i].url}">${Comics[i].title}</a>`;
		resultDiv.innerHTML = result;
		}
		
		// else {
		//	searchOutput.innerHTML = `Brak wyników`;
		//	}

	//	for (let k=0; k<Comics[i].url.length; k++) {
	//	let dataLink = `${Comics[i].url}`;
	//	searchOutput.innerHTML = `<p>Wyniki wyszukiwania:</p><p><a href="${dataLink}">${dataLink}</a>`;
	//};
		
	//	else {
	//		let resultDiv = document.createElement('div');
	//		searchOutput.appendChild(resultDiv);
	//		resultDiv.innerHTML = "Brak wyników";
	//	};
	};

});