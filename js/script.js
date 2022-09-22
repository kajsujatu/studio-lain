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
export const Comics = [
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
			translator: "-",
			proofreader: "-",
			description:
				{
				normal: `Wspaniale zilustrowane dark fantasy dla dorosłych. Piękny malarski styl Emmanuela Civiello tworzy świat rodem z najmroczniejszych baśni i legend. To jego debiut na polskim rynku. Autorem scenariusza jest natomiast Thomas Mosdi mający na koncie kilkadziesiąt historii do komiksów na runku frankońskim. Wspólnie z Civiello jest wielkim fanem fantasy i mitologii celtyckiej. Obydwaj autorzy to obecnie ikony europejskiego komiksu.
				Opowieść rozgrywa się w roku 1100 naszej ery. Główną bohaterką jest mała irlandzka dziewczynka imieniem Luaine. Jej rodzina zostaje napadnięta przez stwory z innego świata. Ojciec ginie, a matka i dziadek zostają porwani do innego wymiaru, gdzie rządzi mroczna bestia Balor. Szczęśliwym zbiegiem okoliczności dziewczynka zostaje przygarnięta przez Korriganów, plemię, będące skrzyżowaniem krasnoludów z czarownicami. Wraz z nimi Luaine podejmuje próbę odnalezienia swoich bliskich…`
				},
			img: 
				{
				coverMainSite: "../img/komiks/korriganie/korriganie_okladka_regularna.jpg",
				coverRegular: "../img/komiks/korriganie/korriganie_okladka_regularna.jpg",
				coverRegularThumbnail: "../img/komiks/korriganie/korriganie_okladka_regularna.jpg",
				coverAlternative1: "../img/komiks/korriganie/korriganie_okladka_alternatywna.jpg",
				inside1: "../img/komiks/korriganie/korriganie_str1.jpg",
				inside1Alt: "przykładowa plansza komiksu Korriganie",
				inside2: "../img/komiks/korriganie/korriganie_str2.jpg",
				inside3: "../img/komiks/korriganie/korriganie_str3.jpg",
				},
			details:
				{
				format: "210x295 mm",
				pages: 220,
				print: "kolorowy",
				paper: "kredowy",
				typeOfBookCover: "twarda",
				date: "wrzesień 2021",
				edition: "I",
				ISBN: "978-83-958554-6-7",
				price: "89,90 zł"
				},
			detailsOriginalEdition:
				{
				title: "Korrigans",
				publisher: "Delcourt",
				date: "2012 (2000-2007)"
				},
			relatedComics: 
				{
				},
			filter: "Antologie/Integrale",
			new: false,		
			availability: true,
			url: "../komiks/korriganie.html"
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
			relatedComics: 
				{
				img1: "../img/komiks/opowiesci-z-czasow-kobry/opowiesci-z-czasow-kobry_cover_regular.jpg"
				},
			filter: "Antologie/Integrale",
			new: false,		
			availability: true,
			url: "../komiks/brygada.html"
		}
];

