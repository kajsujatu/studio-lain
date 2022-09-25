// Import Database of comics
import {
	Comics
} from './comics-data.js';

// Adding Covers on Main Site
const mainContainer = document.getElementById('container');

for (let i=0; i<Comics.length; i++) {

	const mainCover = document.createElement('div');
	mainCover.classList.add('cover');
	mainContainer.appendChild(mainCover);

	// Adding attributes from Comics Array to Cover Class:
		// Cover
		mainCover.style.backgroundImage = `url(${Comics[i].img.coverMainSite}`;
		// Order Newest by default
		mainCover.style.order = -(Comics[i].id);
		// Link
		mainCover.addEventListener("click", function(){
			window.location = Comics[i].url;
		});
		// Alt
		mainCover.setAttribute("alt",`${Comics[i].title}`);
		// Data Filter
		// mainCover.setAttribute("filter", `${Comics[i].filter}`);
		mainCover.classList.add(`${Comics[i].filter}`);
		// if New
		if (Comics[i].new != false) {
			mainCover.classList.add("new");
		};
		// if Sold
		if (Comics[i].availability == false) {
		mainCover.classList.add("sold");
		};

	// Sorting elements
		const sortInput = document.getElementById('sort-input')		

		sortInput.addEventListener('change', function() {
			// Sort by Newest (deafult)
			if (sortInput.value == "najnowsze") {
				mainCover.style.order = -(Comics[i].id);
			}
			// Sort by Oldest
			else if (sortInput.value == "najstarsze") {
				mainCover.style.order = Comics[i].id;
			}
			// Sort Alphabetically
			else if (sortInput.value == "alfabetycznie") {
				mainCover.style.order = Comics[i].title.charCodeAt(0);
			};
		});

		

		console.log(mainCover.className); 

	// Filtering elements
		const filtersInput = document.getElementById('filters-input');	
		//const mainCoverFilter = document.querySelectorAll('[data-filter]');


		filtersInput.addEventListener('change', function() {
				if (mainCover.classList.contains(`${filtersInput.value}`) != true) {
					mainCover.style.display = "none";
				}
				else if (filtersInput.value == "nowosci") {
					mainCover.className('new').style.display = "none";
				}
		});



};

// const zonk = document.getElementById('test');

// const zonk2 = document.getElementById('test2');

