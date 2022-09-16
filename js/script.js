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
			title: "Wiek Evy - XXe ciel.com",
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
	
	// Brygada
		{
			id: 4, 
			title: "Brygada",
			writer: "Enrique Fernandez",
			art: "Enrique Fernandez",
			translator: "Piotr Beliński",
			proofreader: "Damian Pietrzak",
			description:
				{
				bold: "Historia od Enrique Fernandeza, jednego ze współczesnych mistrzów komiksu hiszpańskiego. Autor uważany jest za jednego z najlepszych kolorystów na świecie i to widać na każdej stronie tej historii. Nie tylko historyjki obrazkowe są jego domeną, pracuje również przy tworzeniu animacji.",
				normal: "Krasnolud, weteran walk, kapitan Ivro został zwerbowany by dowodzić brygadą skazańców. Jego oddział walczy w trwającej od lat wojnie przeciwko czarnym elfom. Podczas jednej z bitew tajemnicza mgła rzuca ich na terytorium dziwnej, pełnej chaosu krainy. Tam będą musieli stoczyć kolejną wojnę, tym razem by przetrwać jako grupa. Elfy, wiedźmy, czarownice, ludzie, demony, smoki to wszystko znajdziecie w tej niezwykłej opowieści z gatunku dark fantasy. Prawie 100 stron unikalnego stylowo, wysmakowanego artystycznie komiksu."
				},
			img: 
				{
				coverRegular: "img/komiks/brygada/brygada_cover_regular-min.jpg",
				coverAlternative1: "img/komiks/brygada/brygada_cover_alternative1.jpg",
				inside1: "img/komiks/brygada/brygada_inside1.jpg",
				inside2: "img/komiks/brygada/brygada_inside2.jpg",
				inside3: "img/komiks/brygada/brygada_inside3.jpg",
				inside4: "img/komiks/brygada/brygada_inside4.jpg",
				},
			availability: true,
			filter: "Antologie/Integrale",
			new: false			
		}
];


// Comics Brygada - Details
const comicsBrygada = Comics[4];

// Comics Brygada - Details - Title
const titleBrygada = comicsBrygada.title;
document.getElementById('title').innerHTML = titleBrygada;

// Comics Brygada - Details - Writer
const writerBrygada = comicsBrygada.writer;
document.getElementById('writer').innerHTML = writerBrygada;

// Comics Brygada - Details - Art
const artBrygada = comicsBrygada.art;
document.getElementById('art').innerHTML = artBrygada;

// Comics Brygada - Details - Translator
const translatorBrygada = comicsBrygada.translator;
document.getElementById('translator').innerHTML = translatorBrygada;

// Comics Brygada - Details - Proofreader
const proofreaderBrygada = comicsBrygada.proofreader;
document.getElementById('proofreader').innerHTML = proofreaderBrygada;

// Comics Brygada - Details - Cover
const coverBrygada = comicsBrygada.img.coverRegular;
document.getElementById('cover-brygada').style.backgroundImage = `url(${coverBrygada}`;


function chooseComics(number) {
	
}





// Comics Metronom - Details
const comicsMetronom = Comics[0];

//const titleMetronom = comicsMetronom.title;
//document.getElementById("title").innerHTML = titleMetronom;



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