// Import Database of comics
import {
	Comics
} from './comics-data.js';



// Back link
const backLinkTop = document.getElementById('back-link-top');
backLinkTop.addEventListener('click', function() {
	history.back();
});


// Choose number of Comics and fill divs with data
function chooseComics(num) {
	
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
			coverAlternative2Thumbnail.style.opacity = "100%";
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
	document.getElementsByClassName('inside-thumbnails')[0].src = `${comicsInside1}`;
	document.getElementsByClassName('inside-thumbnails')[0].setAttribute("alt",`${comicsInside1Alt}`);

	// Inside 2
	const comicsInside2 = Comics[num].img.inside2;

	document.getElementsByClassName('inside-thumbnails')[1].src = `${comicsInside2}`;
	
	// Inside 3
	const comicsInside3 = Comics[num].img.inside3;

	document.getElementsByClassName('inside-thumbnails')[2].src = `${comicsInside3}`;

	// Inside 4
	const comicsInside4 = Comics[num].img.inside4;

	if (comicsInside4 != null) {
	//	document.getElementById('inside4-thumbnail').style.display = "block";
	document.getElementsByClassName('inside-thumbnails')[3].src = `${comicsInside4}`;
	}

	// Description Bold

	const comicsDescriptionBold = Comics[num].description.bold;
	if (comicsDescriptionBold != null) {
	document.getElementById('description-bold').innerHTML = comicsDescriptionBold;
	};

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
	const comicsRelatedComics = Comics[num].relatedComics.img1;
	if (comicsRelatedComics != null) {
	document.getElementById('related-comics-section').style.display = "block";
	document.getElementById('related-comics').src = `${comicsRelatedComics}`;
	};
			
	return;
};


	



//const windowUrl = window.location.href;

//switch windowUrl {
//	case Comics[0].url:
//		chooseComics(0);
//		break;
//		default:
//			console.log('blabla');
//}

//function siteCom(i) {


	//	!!!!!!!!!!!!!!!!
//for (let i=0; i<Comics.length-2; i++) {
//
//if (window.location.pathname = Comics[i].url) {	
//	chooseComics(i);
//
//	window.stop()
//
//	console.log(pathNum);
//	console.log(window.location.pathname);
//	console.log(Comics[i].url);
//	};
//
//};



chooseComics(0);


//	//};


//const comicsMetronom = Comics[0].url;

//if (window.location.href = comicsMetronom) {
//	chooseComics(0);
//}	else {
//	console.log('blabla');
//};

// chooseComics(4);

// chooseComics(0);

//O - Metronom
//1 - WiekEvy
//2 - Duam
//3 - Korriganie
//4 - Brygada

function getPics() {}
const imgs = document.querySelectorAll('.gallery-img');
const fullPage = document.querySelector('#fullpage');

const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');

imgs.forEach(img => {
  img.addEventListener('click', function() {
    fullPage.style.backgroundImage = 'url(' + img.src + ')';
    fullPage.style.display = 'block';
  });


  leftArrow.addEventListener('click', function() {
	fullPage.style.backgroundImage = 'url(' + img.previousElementSibling.src + ')';
	fullPage.style.display = 'block';
});

rightArrow.addEventListener('click', function() {
	fullPage.style.backgroundImage = 'url(' + img.nextElementSibling.src + ')';
	fullPage.style.display = 'block';
});


});


//leftArrow.addEventListener('click', function() {
//	fullPage.style.backgroundImage = 'url(' + imgs[2].previousElementSibling.src + ')';
//	fullPage.style.display = 'block';
//});

rightArrow.addEventListener('click', function() {
	fullPage.style.backgroundImage = 'url(' + img.src[+1] + ')';
	fullPage.style.display = 'block';
});










