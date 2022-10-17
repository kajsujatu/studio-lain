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

	// Filtering elements
		const filtersInput = document.getElementById('filters-input');	
		//const mainCoverFilter = document.querySelectorAll('[data-filter]');



		function result() {
			const output = document.getElementById('output');
			output.value = "";

			for (let i=0; i<filtersInput.options.length; i++) {

				if (filtersInput.options[i].selected === true) {
					output.value += filtersInput.options[i].value + " ";
					document.getElementById('output').innerHTML = output.value;
				}
			}
			

		};

		filtersInput.addEventListener('click', function() {

		});
		
	//	const mainCoversHTML = document.getElementsByClassName('cover');

	//	for (let k=0; k<mainCoversHTML.length; k++) {

	//		console.log(mainCoversHTML[k].classList.value);

	//		if (mainCoversHTML[k].classList.value != "new") {
	//			this.style.display = "none";
	//		};
	//
	//		};
	//
	
	

		filtersInput.addEventListener('click', function() {
				if (mainCover[i].classList.value.contains(`${filtersInput.children[0].innerText}`) != true) {
					mainCover.style.display = "none";
				}
				else if (filtersInput.value != "nowosci") {
					mainCover.classList.contains('new').style.display = "none";
				};
		});

};



const input = document.getElementById('my-input');
const listFilters = document.getElementById('filters-input');


input.addEventListener('click', function() {
	listFilters.style.display = "block";
});


//mobiscroll.select('#filters-input', {
//    inputElement: document.getElementById('my-input'),
//    touchUi: false
//});