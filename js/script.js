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
			title: "Metronom'",
			writer: "Éric Corbeyran",
			art: "Grun",
			translator: "Anna Winiarska",
			proofreader: "Bartłomiej Wiśniewski, Słowobraz",
			description:
				{
				bold: "Komiks polecany przez samego Enki Bilala, autora m.in. kultowej Trylogii Nikopola. Mistrz europejskiego komiksu napisał w przedmowie - Wchodzimy do szarej strefy, która, tak jak być powinno, jest naszym lustrzanym odbiciem i w której widać zmagającego się z rzeczywistością człowieka. To świat zarazem bliski i odległy, znajomy i niepokojący, doświadczony przez kolejne kryzysy, lecz zasadniczo stojący w miejscu. Tak było wczoraj, tak będzie jutro, bez dwóch zdań.",
				normal: "Niedaleka przyszłość. Totalitaryzm został przebrany w szaty demokracji bezpośredniej. Każdy system ma jednak luki, a za puszczeniem rewolucyjnego domina w ruch często stoi zwykły przypadek. Młoda kobieta o imieniu Lynn szuka informacji o swoim mężu. Nie wrócił z kosmicznej misji na jednej ze stacji orbitalnych. Dążenie do odkrycia, co naprawdę się wydarzyło, sprawi, że uruchomione zostaną siły, które zachwieją nie tylko jej światem. Czy jednostka ma szanse w starciu z bezwzględnym systemem? Czy rewolucja zawsze zżera swój własny ogon? Czy prawda faktycznie wyzwala?"
				},
			img: 
				{
				coverRegular: "../img/komiks/metronom/metronom_cover_regular-max.jpg",
				coverRegularThumbnail: "../img/komiks/metronom/metronom_cover_regular-max.jpg",
				coverAlternative1: "../img/komiks/metronom/metronom_cover_alternative1.jpg",
				coverAlternative2: "../img/komiks/metronom/metronom_cover_alternative2.jpg",
				inside1: "../img/komiks/metronom/metronom_inside1.jpg",
				inside2: "../img/komiks/metronom/metronom_inside2.jpg",
				inside3: "../img/komiks/metronom/metronom_inside3.jpg",
				inside4: "../img/komiks/metronom/metronom_inside4.jpg"
				},
			details:
				{
				format: "210x295 mm",
				pages: 280,
				print: "kolorowy",
				paper: "kredowy",
				typeOfBookCover: "twarda",
				date: "sierpień 2020",
				edition: "I",
				ISBN: "978-83-958554-0-5",
				price: "99,90 zł"
				},
			detailsOriginalEdition:
				{
				title: "Metronom'",
				publisher: "Glenat",
				date: "2010-2015"
				},
			filter: "Antologie/Integrale",
			new: false,		
			availability: true
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
				coverRegular: "../img/komiks/brygada/brygada_cover_regular-max.jpg",
				coverRegularThumbnail: "../img/komiks/brygada/brygada_cover_regular-min.jpg",
				coverAlternative1: "../img/komiks/brygada/brygada_cover_alternative1.jpg",
				inside1: "../img/komiks/brygada/brygada_inside1.jpg",
				inside1Alt: "przykładowa plansza komiksu Brygada",
				inside2: "../img/komiks/brygada/brygada_inside2.jpg",
				inside3: "../img/komiks/brygada/brygada_inside3.jpg",
				inside4: "../img/komiks/brygada/brygada_inside4.jpg"
				},
			details:
				{
				format: "A4",
				pages: 96,
				print: "kolorowy",
				paper: "kredowy",
				typeOfBookCover: "twarda",
				date: "listopad 2018",
				edition: "I",
				ISBN: "978-83-950587-6-9",
				price: "64,90 zł"
				},
			detailsOriginalEdition:
				{
				title: "Brigada",
				publisher: "AME Ediciones",
				date: "2015 (2013-2015)"
				},
			filter: "Antologie/Integrale",
			new: false,		
			availability: true
		}
];

// Choose number of Comics and fill divs with data
function chooseComics(num) {
	
	// Title
	const comicsTitle = Comics[num].title;
	document.getElementById('title').innerHTML = comicsTitle;

	// Writer
	const comicsWriter = Comics[num].writer;
	document.getElementById('writer').innerHTML = comicsWriter;		

	// Art
	const comicsArt = Comics[num].art;
	document.getElementById('art').innerHTML = comicsArt;

	// Translator
	const comicsTranslator = Comics[num].translator;
	document.getElementById('translator').innerHTML = comicsTranslator;

	// Proofreader
	const comicsProofreader = Comics[num].proofreader;
	document.getElementById('proofreader').innerHTML = comicsProofreader;

	// Cover - Main Site
	// const comicsCover = Comics[num].img.coverRegular;
	// document.getElementById('cover-regular').style.backgroundImage = `url(${comicsCover}`;

	// Cover
	const comicsCover = Comics[num].img.coverRegular;
	document.getElementById('cover-big').src = `${comicsCover}`;

	// Cover
	const comicsCoverRegularThumbnail = Comics[num].img.coverRegular;
	document.getElementById('cover-regular-thumbnail').src = `${comicsCoverRegularThumbnail}`;
	document.getElementById('cover-regular-thumbnail').style.display = "inline";
	document.getElementById('cover-regular-thumbnail').style.opacity = "50%";

	// Cover Alternative 1
	const comicsCoverAlt1 = Comics[num].img.coverAlternative1;
	document.getElementById('cover-alternative1-thumbnail').src = `${comicsCoverAlt1}`;
	document.getElementById('cover-alternative1-thumbnail').style.display = "inline";
	if (comicsCoverAlt1 != null) {
		document.getElementById('cover-alternative1-thumbnail').style.display = "inline";
	} else {
			document.getElementById('cover-alternative1-thumbnail').style.display = "none";
	};

	// Cover Alternative 2
	const comicsCoverAlt2 = Comics[num].img.coverAlternative2;
	document.getElementById('cover-alternative2-thumbnail').src = `${comicsCoverAlt2}`;
	if (comicsCoverAlt2 != null) {
	document.getElementById('cover-alternative2-thumbnail').style.display = "inline";
	} else {
		document.getElementById('cover-alternative2-thumbnail').style.display = "none";
	};

	// Functions for changing thumbnails
	const coverRegularThumbnail = document.getElementById('cover-regular-thumbnail');
	const coverBig = document.getElementById('cover-big');
	const coverAlternative1Thumbnail = document.getElementById('cover-alternative1-thumbnail');
	const coverAlternative2Thumbnail = document.getElementById('cover-alternative2-thumbnail');
	
	coverRegularThumbnail.addEventListener('click', function() {	
		if (coverBig.src != Comics[num].img.coverRegular) {
			coverBig.src = Comics[num].img.coverRegular;
			coverRegularThumbnail.style.opacity = "50%";
			coverAlternative1Thumbnail.style.opacity = "100%";
		};
	});
	
	coverAlternative1Thumbnail.addEventListener('click', function() {	
		if (coverBig.src != Comics[num].img.coverAlternative1) {
			coverBig.src = Comics[num].img.coverAlternative1;
			coverAlternative1Thumbnail.style.opacity = "50%";
			coverRegularThumbnail.style.opacity = "100%";
			coverAlternative2Thumbnail.style.opacity = "100%";
		};
	});

	coverAlternative2Thumbnail.addEventListener('click', function() {	
		if (coverBig.src != Comics[num].img.coverAlternative2) {
			coverBig.src = Comics[num].img.coverAlternative2;
			coverAlternative2Thumbnail.style.opacity = "50%";
			coverRegularThumbnail.style.opacity = "100%";
			coverAlternative1Thumbnail.style.opacity = "100%";
		};
	});

	// Inside 1
	const comicsInside1 = Comics[num].img.inside1;
	const comicsInside1Alt = Comics[num].img.inside1Alt;
	document.getElementById('inside1-thumbnail').src = `${comicsInside1}`;
	document.getElementById('inside1-thumbnail').setAttribute("alt",`${comicsInside1Alt}`);

	// Inside 2
	const comicsInside2 = Comics[num].img.inside2;
	Comics[num].img.inside2
	document.getElementById('inside2-thumbnail').src = `${comicsInside2}`;
	
	// Inside 3
	const comicsInside3 = Comics[num].img.inside3;
	Comics[num].img.inside3
	document.getElementById('inside3-thumbnail').src = `${comicsInside3}`;

	// Inside 4
	const comicsInside4 = Comics[num].img.inside4;
	Comics[num].img.inside4
	document.getElementById('inside4-thumbnail').src = `${comicsInside4}`;

	// Description Bold
	const comicsDescriptionBold = Comics[num].description.bold;
	document.getElementById('description-bold').innerHTML = comicsDescriptionBold;

	// Description Normal
	const comicsDescriptionNormal = Comics[num].description.normal;
	document.getElementById('description-normal').innerHTML = comicsDescriptionNormal;

	// Details Format
	const comicsDetailsFormat = Comics[num].details.format;
	document.getElementById('details-format').innerHTML = comicsDetailsFormat;

	// Details Pages
	const comicsDetailsPages = Comics[num].details.pages;
	document.getElementById('details-pages').innerHTML = comicsDetailsPages;

	// Details Print
	const comicsDetailsPrint = Comics[num].details.print;
	document.getElementById('details-print').innerHTML = comicsDetailsPrint;

	// Details Paper
	const comicsDetailsPaper = Comics[num].details.paper;
	document.getElementById('details-paper').innerHTML = comicsDetailsPaper;

	// Details Type of book cover
	const comicsDetailsTypeOfBookCover = Comics[num].details.typeOfBookCover;
	document.getElementById('details-type-of-book-cover').innerHTML = comicsDetailsTypeOfBookCover;

	// Details Date
	const comicsDetailsDate = Comics[num].details.date;
	document.getElementById('details-date').innerHTML = comicsDetailsDate;

	// Details Edition
	const comicsDetailsEdition = Comics[num].details.edition;
	document.getElementById('details-edition').innerHTML = comicsDetailsEdition;

	// Details ISBN
	const comicsDetailsISBN = Comics[num].details.ISBN;
	document.getElementById('details-isbn').innerHTML = comicsDetailsISBN;

	// Details Price
	const comicsDetailsPrice = Comics[num].details.price;
	document.getElementById('details-price').innerHTML = comicsDetailsPrice;

	return;
};

chooseComics(4);


function getPics() {} //just for this demo
const imgs = document.querySelectorAll('.gallery-img');
const fullPage = document.querySelector('#fullpage');

imgs.forEach(img => {
  img.addEventListener('click', function() {
    fullPage.style.backgroundImage = 'url(' + img.src + ')';
    fullPage.style.display = 'block';
  });
});

const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');

leftArrow.addEventListener('click', function() {
console.log("Działa");
});



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


