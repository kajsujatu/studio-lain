//import {
//	Comics
//} from './script.js'




//Array of all Comics
const Comics = [
	// Metronom
		{
			id: 1, 
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
				coverMainSite: "../img/komiks/metronom/metronom_cover_main-site.jpg",
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
			new: true,		
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
				coverMainSite: "../img/komiks/brygada/brygada_cover_regular-min.jpg",
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
			availability: true,
			url: "../komiks/brygada.html"
		}
];







// Cover - Main Site
const comicsCoverMain0 = Comics[0].img.coverMainSite;
document.getElementById('cover-metronom').style.backgroundImage = `url(${comicsCoverMain0}`;
const comicsOrder0 = Comics[0].id;
document.getElementById('cover-metronom').style.order = comicsOrder0;

if (Comics[0].new != false) {
	document.getElementById('cover-metronom').classList.add("new");
};

const comicsCoverMain4 = Comics[4].img.coverMainSite;
document.getElementById('cover-brygada').style.backgroundImage = `url(${comicsCoverMain4}`;

const comicsOrder4 = Comics[4].id;
document.getElementById('cover-brygada').style.order = comicsOrder4;

if (Comics[4].new != false) {
	document.getElementById('cover-brygada').classList.add("new");
} 

const coverBrygada = document.getElementById('cover-brygada');
coverBrygada.addEventListener("click", function(){
	window.location = "../komiks/brygada.html";
});

//document.getElementById('cover-brygada').setAttribute("href", comicsLink);










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





