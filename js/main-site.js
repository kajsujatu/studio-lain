// Import Database of comics
import {
	Comics
} from './comics-data.js';

// Adding Covers on Main Site





for (let i=0; i<Comics.length; i++) {

	const mainContainer = document.getElementById('container');
	const mainCover = document.createElement('div');

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
		// if New
		if (Comics[i].new != false) {
			mainCover.classList.add("new");
		};
		// if Sold
		if (Comics[i].availability == false) {
		mainCover.classList.add("sold");
	};

	mainCover.classList.add('cover');
	mainContainer.appendChild(mainCover);
	//const mainCoversOrder = mainCovers.style.order;
	//const sortCoversOldest = mainCoversOrder.sort((a, b) => a.value - b.value);
		



//	const mainCovers = document.getElementsByClassName('cover').style.order = "1";

	// console.log(mainCover);
	// console.log(mainContainer);


	const zonk = document.getElementById('test');
	zonk.addEventListener('click', function(){


		mainCover = Array.prototype.slice.call(mainCover, 0);

		mainCover.sort(function(a, b) {
			var aord = +a.id.split('-')[1];
			var bord = +b.id.split('-')[1];
			return aord - bord;
		});
		});


//const mainCoversOrder = mainCovers.style.order;
//const sortCoversOldest = mainCoversOrder.sort((a, b) => a.value - b.value);

	
//		for (let i=0; i<Comics.length; i++) {
//		
//			const mainContainer = document.getElementById('container');
//			const mainCover = document.createElement('div');
//			
//			// Order Oldest
//			return mainCover.style.order = Comics[i].id;
//	
//	}
//	
	
	};

	// const mainCovers = document.querySelectorAll('.cover');

	
	//const sortCoverAlphapetical = mainCovers.sort((a, b) => {
	//	const titleA = mainCovers.attr("alt").toUpperCase();
	//	const titleB = mainCovers.attr("alt").toUpperCase();
	//	if (titleA < titleB) {
	//	  return -1;
	//	}
	//	if (titleA > titleB) {
	//	  return 1;
	//	}
	//	  return 0;
	//  });


  

// const mainCoversOrder = mainCovers.style.order;
//
// const sortCoversOldest = mainCoversOrder.sort((a, b) => a.value - b.value);
//
// const sortCoversNewest = mainCoversOrder.sort((a, b) => b - a);
//
//
//
//   const sortInput = document.getElementById('sort-input');
//
// const sortNewest = sortInput.options['newest'];
// 
//
//
// 
// sortInput.addEventListener('change', function() {
// 
//	const mainCoversOrder = mainCovers.style.order;
//	const sortCoversNewest = mainCoversOrder.sort((a, b) => b.id - a.id);
// 
// console.log('OK');
// 
//	  return sortCoversNewest
// 
// });
//


// Sort - Alphabetical Order - by Title
//const copyComicsA = Comics.slice();
//
//const sortAlphabetical = copyComicsA.sort((a, b) => {
//	const titleA = a.title.toUpperCase();
//	const titleB = b.title.toUpperCase();
//	if (titleA < titleB) {
//	  return -1;
//	}
//	if (titleA > titleB) {
//	  return 1;
//	}
//  	return 0;
//  });
//
// Sort - Newest - by Id - Descending
//const copyComicsN = Comics.slice();

//const sortComicsByIdNewest = copyComicsN.sort((a, b) => b.id - a.id);

// Sort - Oldest - by Id - Ascending
//const copyComicsO = Comics.slice();
//
//const sortComicsByIdOldest = copyComicsO.sort((a, b) => a.id - b.id);
//
//
//const sortInput = document.getElementById('sort-input');
//
//const sortNewest = sortInput.options['newest'];
//
//sortNewest.addEventListener('click', function() {
//
//	const copyComicsN = Comics.slice();
//	const sortComicsByIdNewest = copyComicsN.sort((a, b) => b.id - a.id);
//
//console.log('OK');
//
//	return sortComicsByIdNewest
//
//});








