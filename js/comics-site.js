// Import Database of comics
import {
	Comics
} from './comics-data.js';

// Back link
const backLinkTop = document.getElementById('back-link-top');
backLinkTop.addEventListener('click', function() {
	history.go(-1);
});

// Choose number of Comics and fill divs with data
export function chooseComics(num) {
	
	// Title (breadcrumbs)
	const comicsTitleBreadcrumbs = Comics[num].title;
	document.getElementsByClassName('title')[0].innerHTML = comicsTitleBreadcrumbs;

	// Title
	const comicsTitle = Comics[num].title;
	document.getElementsByClassName('title')[1].innerHTML = comicsTitle;
	
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

	// Cover
	const comicsCover = Comics[num].img.coverRegular;
	document.getElementById('cover-big').src = `${comicsCover}`;

	// Cover
	const comicsCoverRegularThumbnail = Comics[num].img.coverRegular;
	document.getElementById('cover-regular-thumbnail').src = `${comicsCoverRegularThumbnail}`;
	document.getElementById('cover-regular-thumbnail').style.display = 'inline';
	document.getElementById('cover-regular-thumbnail').style.opacity = '50%';

	// Cover Alternative 1
	const comicsCoverAlt1 = Comics[num].img.coverAlternative1;
	document.getElementById('cover-alternative1-thumbnail').src = `${comicsCoverAlt1}`;
	document.getElementById('cover-alternative1-thumbnail').style.display = 'inline';
	if (comicsCoverAlt1 != null) {
		document.getElementById('cover-alternative1-thumbnail').style.display = 'inline';
	} else {
			document.getElementById('cover-alternative1-thumbnail').style.display = 'none';
	}

	// Cover Alternative 2
	const comicsCoverAlt2 = Comics[num].img.coverAlternative2;
	document.getElementById('cover-alternative2-thumbnail').src = `${comicsCoverAlt2}`;
	if (comicsCoverAlt2 != null) {
	document.getElementById('cover-alternative2-thumbnail').style.display = 'inline';
	} else {
		document.getElementById('cover-alternative2-thumbnail').style.display = 'none';
	}

	// Functions for changing thumbnails
	const coverRegularThumbnail = document.getElementById('cover-regular-thumbnail');
	const coverBig = document.getElementById('cover-big');
	const coverAlternative1Thumbnail = document.getElementById('cover-alternative1-thumbnail');
	const coverAlternative2Thumbnail = document.getElementById('cover-alternative2-thumbnail');
	
	coverRegularThumbnail.addEventListener('click', function() {	
		if (coverBig.src != Comics[num].img.coverRegular) {
			coverBig.src = Comics[num].img.coverRegular;
			coverRegularThumbnail.style.opacity = '50%';
			coverAlternative1Thumbnail.style.opacity = '100%';
			coverAlternative2Thumbnail.style.opacity = '100%';
		}
	});
	
	coverAlternative1Thumbnail.addEventListener('click', function() {	
		if (coverBig.src != Comics[num].img.coverAlternative1) {
			coverBig.src = Comics[num].img.coverAlternative1;
			coverAlternative1Thumbnail.style.opacity = '50%';
			coverRegularThumbnail.style.opacity = '100%';
			coverAlternative2Thumbnail.style.opacity = '100%';
		}
	});

	coverAlternative2Thumbnail.addEventListener('click', function() {	
		if (coverBig.src != Comics[num].img.coverAlternative2) {
			coverBig.src = Comics[num].img.coverAlternative2;
			coverAlternative2Thumbnail.style.opacity = '50%';
			coverRegularThumbnail.style.opacity = '100%';
			coverAlternative1Thumbnail.style.opacity = '100%';
		}
	});

	// Inside Panels
	const imagesInside = document.getElementById('img-inside');
	const comicsInsideImages = Comics[num].img.insidePanels;
	const comicsInsideImagesAlt = Comics[num].img.insidePanelsAlt;

	for (let i=0; i<Object.values(comicsInsideImages).length; i++) {
		const comicsInside = document.createElement('img');
		comicsInside.classList.add('inside-thumbnails');
		comicsInside.setAttribute('alt', `${Object.values(comicsInsideImagesAlt)[i]}`); // Set Alt to images
		imagesInside.appendChild(comicsInside);
		comicsInside.src = `${Object.values(comicsInsideImages)[i]}`;
	}

	// Links to Buy
	const buyButton = document.getElementById('buy');
	const buyLinksButton = document.getElementById('buy-links');
	const buyLinks = Comics[num].buyLinks;
	const buyShops = Comics[num].buyShops;

	if (Comics[num].availability == false) {
		buyButton.style.display = 'none';
	} else if (Comics[num].availability == true) {

	for (let i=0; i<Object.values(buyShops).length; i++) {
		const buyListItem = document.createElement('li');
		buyListItem.classList.add('buy-link');
		buyLinksButton.appendChild(buyListItem);

		const buyListItemLink = document.createElement('a');
		buyListItem.appendChild(buyListItemLink);

		buyListItemLink.setAttribute('target', '_blank');
		buyListItemLink.setAttribute('href', `${Object.values(buyLinks)[i]}`);
		buyListItemLink.textContent = `${Object.values(buyShops)[i]}`;
	}
	}

	// Description
	const comicsDescription = Comics[num].description;
	document.getElementById('description').innerHTML = comicsDescription;

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

	// Details Orignal Edition - Title
	const comicsDetailOriginalsEditionTitle = Comics[num].detailsOriginalEdition.title;
	document.getElementById('details-original-edition-title').innerHTML = comicsDetailOriginalsEditionTitle;

	// Details Original Edition - Publisher
	const comicsDetailOriginalsEditionPublisher = Comics[num].detailsOriginalEdition.publisher;
	document.getElementById('details-original-edition-publisher').innerHTML = comicsDetailOriginalsEditionPublisher;

	// Details Original Edition - Date
	const comicsDetailOriginalsEditionDate = Comics[num].detailsOriginalEdition.date;
	document.getElementById('details-original-edition-date').innerHTML = comicsDetailOriginalsEditionDate;

	// Related Comics
	const comicsRelatedComics = Comics[num].relatedComics;
	const comicsRelatedComicsLink = Comics[num].relatedComicsLink;
	const relatedComicsDiv = document.getElementById('related-comics-section');

	if (comicsRelatedComics != null) {
	for (let i=0; i<Object.values(comicsRelatedComics).length; i++) {
		relatedComicsDiv.style.display = 'grid';
		const relatedComicsLink = document.createElement('a');
		relatedComicsDiv.appendChild(relatedComicsLink);
		const relatedComicsThumbnail = document.createElement('img');
		relatedComicsLink.appendChild(relatedComicsThumbnail);
		relatedComicsLink.setAttribute('href', `${Object.values(comicsRelatedComicsLink)[i]}`);
		relatedComicsThumbnail.classList.add('related-comics');
		relatedComicsThumbnail.src = `${Object.values(comicsRelatedComics)[i]}`;
	}}

	return;
}

// chooseComics(2);
//O - Metronom
//1 - WiekEvy
//2 - Duam
//3 - Korriganie
//4 - Yiu 2
//5 - Yiu 1
//6 - opowiesci kobry
//7 - brygada
//8 - Armie zdobywcy
//9 - Solo 1
//10 - Solo 2
//11 - Solo 3

//buy button
const buyButton = document.getElementById('buy');
const buyLinksList = document.getElementById('buy-links');

buyButton.addEventListener('click', function() {
	if (buyLinksList.style.display == 'none') buyLinksList.style.display = 'block';
	else buyLinksList.style.display = 'none';
});