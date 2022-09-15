// Dark and light mode - variables
const moon = document.getElementById('moon');
const sun = document.getElementById('sun');
const container = document.getElementById('container');
const customizeText = document.querySelectorAll('.customize-text');

// Dark and light mode - functions
moon.addEventListener('click', function() {
	document.body.style.backgroundColor = "#121212";
	sun.style.display = "inline";
	moon.style.display = "none";
	container.style.backgroundColor = "#121212";
	//customizeText.style.color = "white";
});

sun.addEventListener('click', function() {
	document.body.style.backgroundColor = "#E7E9EC";
	sun.style.display = "none";
	moon.style.display = "inline";
	container.style.backgroundColor = "#E7E9EC";
});

// Search button
const search = document.getElementById('search');
const searchInput = document.getElementById('search-input');

search.addEventListener('click', function() {
	searchInput.style.display = "inherit";
	//searchInput.style.transform = "scaleX(2)";
	//searchInput.style.backgroundColor: "#DCDCDC";
});

//Array of all Comics
const Comics = [
	// Metronom
		{
			id: 15, 
			title: "Metronom",
			writer: "Eric Corbeyran",
			art: "Grun",
			statusOfAvailable: true,
			filter: "Antologie/Integrale",
			newComics: false
		},
		
	// Wiek Evy - XXe ciel.com
		{
			id: 2, 
			title: "Wiek Evy - XXe ciel.comganie",
			writer: "Bernard Yslaire",
			art: "Bernard Yslaire",
			statusOfAvailable: true,
			filter: "Antologie/Integrale",
			newComics: false
		},		

	// Duam 
		{
			id: 20,
			title: "Duam",
			writer: "Felix Vega",
			art: "Felix Vega",
			statusOfAvailable: true,
			filter: "Antologie/Integrale",
			newComics: false
		},

	// Korriganie
		{
			id: 16, 
			title: "Korriganie",
			writer: "Thomas Mosdi",
			art: "Emmanuel Civiello",
			statusOfAvailable: true,
			filter: "Antologie/Integrale",
			newComics: false
		},

];

// Sort - Alphabetical Order - by Title
const copyComicsA = Comics.slice();

const sortAlphabetical = copyComicsA.sort((a, b) => {
	const titleA = a.title.toUpperCase();
	const titleB = b.title.toUpperCase();
	if (titleA < titleB) {
	  return -1;
	}
	if (titleA > titleB) {
	  return 1;
	}
  	return 0;
  });

// Sort - Newest - by Id - Descending
//const copyComicsN = Comics.slice();

//const sortComicsByIdNewest = copyComicsN.sort((a, b) => b.id - a.id);

// Sort - Oldest - by Id - Ascending
const copyComicsO = Comics.slice();

const sortComicsByIdOldest = copyComicsO.sort((a, b) => a.id - b.id);


const sortInput = document.getElementById('sort-input');

const sortNewest = sortInput.options['newest'];

sortNewest.addEventListener('click', function() {

	const copyComicsN = Comics.slice();
	const sortComicsByIdNewest = copyComicsN.sort((a, b) => b.id - a.id);

console.log('OK');

	return sortComicsByIdNewest

});




