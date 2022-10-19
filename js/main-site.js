// Import Database of comics
import {
	Comics
} from './comics-data.js';

const mainContainer = document.getElementById('container');
const sortInput = document.getElementById('sort-input');
const filtersInput = document.getElementById('filters-input');
const filtersOutput = document.getElementById('filters-output');		

// Operations with Covers on Main Site
for (let i=0; i<Comics.length; i++) {

	// Adding Covers on Main Site
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
		mainCover.classList.add(`${Comics[i].filter}`);
		// If New
		if (Comics[i].new != false) mainCover.classList.add("new");
		// If Sold
		if (Comics[i].availability == false) mainCover.classList.add("sold");

	// Adding titles uder covers
	const titleUnderCover = document.createElement('div');
	titleUnderCover.classList.add('title-under-cover');
	mainCover.appendChild(titleUnderCover);
	
	titleUnderCover.innerText = `${Comics[i].title}`;

	// Sorting options
	sortInput.addEventListener('change', function() {	
		switch (sortInput.value) {
			case "najnowsze": // Sort by Newest (deafult)
			mainCover.style.order = -(Comics[i].id);
			break;
			case "najstarsze": // Sort by Oldest
			mainCover.style.order = Comics[i].id;
			break;
			case "alfabetycznie": // Sort Alphabetically
			mainCover.style.order = Comics[i].title.charCodeAt(0);
			break;
		default: // Sort by Newest (deafult)
			mainCover.style.order = -(Comics[i].id);
		};
	});
			
	// Filtering options
		const coversByClass = document.getElementsByClassName('cover')[i];

		filtersInput.addEventListener('change', function() {
			for (let i=0; i<document.getElementsByClassName('cover').length; i++) {
	
				switch (filtersInput.value) {
					case "wszystkie": // Show all comics
						coversByClass.style.display = "block";
						break;
					case "nowosci": // Filter by new comics
						if (coversByClass.classList.value.includes('new')) coversByClass.style.display = "block";
						else coversByClass.style.display = "none";
						break;
					case "dostepne": // Filter by available comics
						if (coversByClass.classList.value.includes('sold')) coversByClass.style.display = "none";
						else coversByClass.style.display = "block";
						break;
					case "wyprzedane": // Filter by sold comics
						if (coversByClass.classList.value.includes('sold')) coversByClass.style.display = "block";
						else coversByClass.style.display = "none";
						break;
					case "antologie-integrale":
						if (coversByClass.classList.value.includes('antologie-integrale')) coversByClass.style.display = "block";
						else coversByClass.style.display = "none";
						break;
					case "enrique-fernandez":
						if (coversByClass.classList.value.includes('enrique-fernandez')) coversByClass.style.display = "block";
						else coversByClass.style.display = "none";
						break;
					case "seria-yiu":
						if (coversByClass.classList.value.includes('yiu')) coversByClass.style.display = "block";
						else coversByClass.style.display = "none";
						break;		
				default:
					coversByClass.style.display = "block";
				}
			}
		});

		const searchCovers = document.getElementById('search-main-cover-input');
		
		searchCovers.addEventListener('input', function() {
			const coversByClassAltAttribute = coversByClass.getAttribute('alt').toLowerCase();

			if (coversByClassAltAttribute.includes(searchCovers.value.toLowerCase())) coversByClass.style.display = "block";
			else coversByClass.style.display = "none";
	
		});	

	};





	//if (searchCovers.value.include






//	const elementToOpenFilters = document.getElementById('element-to-open-filters');
//
//	elementToOpenFilters.addEventListener('click', function(){
//		filtersInput.style.display = "block";	
//	});
//

		//
//	if (filtersInput.value == "wszystkie") {
//		document.getElementsByClassName('cover')[i].style.display = "block";
//	}
//
//	else if (filtersInput.value == "nowosci") {
//	
//		if (coversByClass.classList.value.includes('new')) {
//			coversByClass.style.display = "block";
//		} else {
//			coversByClass.style.display = "none";
//		}
//	
//	//	document.getElementsByClassName('old')[i].style.display = "none";
//	
//
//		// const coversNew = mainCover[i].classList.value;
//		// coversNew.style.display = "none";
//	}
//
//
//	else if (filtersInput.value == "dostepne") {
//		document.getElementsByClassName('sold')[i].style.display = "none";
//	}
//	else if (filtersInput.value == "wyprzedane") {
//		document.getElementsByClassName('available')[i].style.display = "none";
//	}
//	else if (filtersInput.value == "antologie-integrale") {
//		if (document.getElementsByClassName('antologie-integrale')[i]) {
//			document.getElementsByClassName('antologie-integrale')[i].style.display = "block"
//		} else {
//			
//		}
//		
//		;
//	};
	
//	filtersInput.options.addEventListener('click', function() {
//		const output = document.getElementById('output');
//		output.value = "";
//
//		for (let i=0; i<filtersInput.options.length; i++) {
//
//			if (filtersInput.options[i].selected === true) {
//				output.value += filtersInput.options[i].value + " ";
//				document.getElementById('output').innerHTML = output.value;
//			}
//		};
//		
//
//	});
//

		
	//	const mainCoversHTML = document.getElementsByClassName('cover');

	//	for (let k=0; k<mainCoversHTML.length; k++) {

	//		console.log(mainCoversHTML[k].classList.value);

	//		if (mainCoversHTML[k].classList.value != "new") {
	//			this.style.display = "none";
	//		};
	//
	//		};
	//
	
	

//	filtersInput.addEventListener('click', function() {
//			if (mainCover[i].classList.value.contains(`${filtersInput.children[0].innerText}`) != true) {
//				mainCover.style.display = "none";
//			}
//			else if (filtersInput.value != "nowosci") {
//				mainCover.classList.contains('new').style.display = "none";
//			};
//	});




//
//const input = document.getElementById('my-input');
//const listFilters = document.getElementById('filters-input');
//
//
//input.addEventListener('click', function() {
//	listFilters.style.display = "block";
//});
//
//
//mobiscroll.select('#filters-input', {
//    inputElement: document.getElementById('my-input'),
//    touchUi: false