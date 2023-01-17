/* eslint-disable no-mixed-spaces-and-tabs */
// Import Database of comics
import {
	Comics
} from './comics-data.js';

// Navbar menu
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', () => {
	// eslint-disable-next-line semi
	navbarLinks.classList.toggle('active')
});

// Dark and light mode
const toggleModeButton = document.getElementById('toggle-mode');
const currentMode = localStorage.getItem('mode');
if (currentMode == 'dark') document.body.classList.add('dark-mode');

toggleModeButton.addEventListener('click', function() {
	document.body.classList.toggle('dark-mode');  
	let mode = 'light';
 	if (document.body.classList.contains('dark-mode')) mode = 'dark';
 	localStorage.setItem('mode', mode);
});

// Search panel
const search = document.getElementById('icon-search');
const iconSearch = document.getElementById('icon-search-content');
const iconReturn = document.getElementById('icon-return');
const searchLayout = document.getElementById('search-layout');
const searchLayoutClose = document.getElementById('search-layout-close');
const searchInput = document.getElementById('search-input');
const searchOutput = document.getElementById('search-output');

search.addEventListener('click', function() {
	searchLayout.style.display = 'flex';
	document.body.style.overflow = 'hidden';
});

searchLayoutClose.addEventListener('click', function() {
	searchLayout.style.display = 'none';
	searchOutput.innerHTML = '';
	document.body.style.overflowY = 'scroll';
});

searchInput.addEventListener('input', function() {
	searchOutput.innerHTML = '';
});

// Search content
function searchContent() {	
	if (searchInput.value == '' || searchInput.value == ' ') {
		let emptyResultDiv = document.createElement('div');
		searchOutput.appendChild(emptyResultDiv);
		emptyResultDiv.classList.add('result-element');
		emptyResultDiv.innerHTML = `<p>Wpisz w pole frazę, którą chcesz wyszukać.</p>`;
	} else {
	let resultDiv = document.createElement('div');
	searchOutput.appendChild(resultDiv);
	resultDiv.classList.add('result-element');
	resultDiv.innerHTML = `<p>Wyniki wyszukiwania dla frazy "<span class="search-phrase">${searchInput.value}</span>":</p>`;
	
	for (let i=0; i<Comics.length; i++) {
	let dataSearch = `${Comics[i].title} | ${Comics[i].writer} | ${Comics[i].art} | ${Comics[i].translator} | ${Comics[i].proofreader} | ${Comics[i].description} | ${Comics[i].details} | ${Comics[i].detailsOriginalEdition}`;
	dataSearch = dataSearch.toLowerCase();
	let stringToSearch = searchInput.value.toLowerCase();

	if (dataSearch.includes(stringToSearch)) {
	//	console.log(Comics[i].url);
		let resultDiv = document.createElement('div');
		searchOutput.appendChild(resultDiv);
		resultDiv.classList.add('result-element');
		resultDiv.innerHTML = `<p>Sprawdź: <a href="${Comics[i].url}">${Comics[i].title}</a>`;
		}
	}
	
	}
		
}

iconSearch.addEventListener('click', searchContent);

iconReturn.addEventListener('click', function() {
	searchInput.value = '';
	searchOutput.innerHTML = '';
});