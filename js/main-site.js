// Import Database of comics
import {
	Comics
} from './comics-data.js';

const mainContainer = document.getElementById('container');
const sortInput = document.getElementById('sort-input');
const filtersInput = document.getElementById('filters-input');

// Operations with Covers on Main Site
for (let i=0; i<Comics.length; i++) {

	// Adding Covers on Main Site
	const mainCover = document.createElement('div');
	mainCover.classList.add('cover');
	mainContainer.appendChild(mainCover);

	// Adding Picture to div.cover
	const mainCoverPicture = document.createElement('picture');
	mainCover.appendChild(mainCoverPicture);

	const sourceOfPictureDesktop = document.createElement('source');
	mainCoverPicture.appendChild(sourceOfPictureDesktop);
	sourceOfPictureDesktop.setAttribute('srcset', `${Comics[i].img.coverMainSiteDesktop}`);
	sourceOfPictureDesktop.setAttribute('media', `(min-width: 33.313rem)`);

	const sourceOfPictureMobile = document.createElement('source');
	mainCoverPicture.appendChild(sourceOfPictureMobile);
	sourceOfPictureMobile.setAttribute('srcset', `${Comics[i].img.coverMainSiteMobile}`);
	sourceOfPictureMobile.setAttribute('media', `(max-width: 33.313rem)`);

	const mainCoverPictureImage = document.createElement('img');
	mainCoverPicture.appendChild(mainCoverPictureImage);
	mainCoverPictureImage.setAttribute('src', `${Comics[i].img.coverMainSiteMobile}`);
	mainCoverPictureImage.setAttribute('alt', `${Comics[i].img.coverImgAlt}`);

	// Adding attributes from Comics Array to Cover Class:
		// Cover
	//	mainCover.style.backgroundImage = `url(${Comics[i].img.coverMainSite}`;
		// Order Newest by default
		mainCover.style.order = -(Comics[i].id);
		// Link
		mainCover.addEventListener('click', function(){
			window.location = Comics[i].url;
		//	window.location = "../komiks/comics-site.html";
		});
		// Alt
		mainCover.setAttribute('alt',`${Comics[i].title}`);
		// Data Filter
		mainCover.classList.add(`${Comics[i].filter}`);
		// If New
		if (Comics[i].new != false) mainCover.classList.add('new');
		// If Sold
		if (Comics[i].availability == false) mainCover.classList.add('sold');
		// Last items
		if (Comics[i].lastItems == true) mainCover.classList.add('last-items');

	// Adding titles uder covers
	const titleUnderCover = document.createElement('div');
	titleUnderCover.classList.add('title-under-cover');
	mainCover.appendChild(titleUnderCover);
	
	titleUnderCover.innerHTML = `${Comics[i].title}`;

	// Sorting options
	sortInput.addEventListener('change', function() {	
		switch (sortInput.value) {
			case 'najnowsze': // Sort by Newest (deafult)
			mainCover.style.order = -(Comics[i].id);
			break;
			case 'najstarsze': // Sort by Oldest
			mainCover.style.order = Comics[i].id;
			break;
			case 'alfabetycznie-a-z': // Sort Alphabetically A-Z
			mainCover.style.order = Comics[i].title.charCodeAt(0);
			break;
			case 'alfabetycznie-z-a': // Sort Alphabetically Z-A
			mainCover.style.order = -(Comics[i].title.charCodeAt(0));
			break;
		default: // Sort by Newest (deafult)
			mainCover.style.order = -(Comics[i].id);
		}
	});
			
	// Filtering options
		const coversByClass = document.getElementsByClassName('cover')[i];

		filtersInput.addEventListener('change', function() {
			for (let i=0; i<document.getElementsByClassName('cover').length; i++) {
	
				switch (filtersInput.value) {
					case 'wszystkie': // Show all comics
						coversByClass.style.display = 'block';
						break;
					case 'nowosci': // Filter by new comics
						if (coversByClass.classList.value.includes('new')) coversByClass.style.display = 'block';
						else coversByClass.style.display = 'none';
						break;
					case 'dostepne': // Filter by available comics
						if (coversByClass.classList.value.includes('sold')) coversByClass.style.display = 'none';
						else coversByClass.style.display = 'block';
						break;
					case 'ostatnie-sztuki': // Filter by last items
						if (coversByClass.classList.value.includes('last-items')) coversByClass.style.display = 'block';
						else coversByClass.style.display = 'none';
						break;
					case 'wyprzedane': // Filter by sold comics
						if (coversByClass.classList.value.includes('sold')) coversByClass.style.display = 'block';
						else coversByClass.style.display = 'none';
						break;
					case 'antologie-integrale':
						if (coversByClass.classList.value.includes('antologie-integrale')) coversByClass.style.display = 'block';
						else coversByClass.style.display = 'none';
						break;
					case 'alan-moore':
						if (coversByClass.classList.value.includes('alan-moore')) coversByClass.style.display = 'block';
						else coversByClass.style.display = 'none';
						break;						
					case 'enrique-fernandez':
						if (coversByClass.classList.value.includes('enrique-fernandez')) coversByClass.style.display = 'block';
						else coversByClass.style.display = 'none';
						break;
					case 'lukasz-kowalczuk':
						if (coversByClass.classList.value.includes('lukasz-kowalczuk')) coversByClass.style.display = 'block';
						else coversByClass.style.display = 'none';
						break;
					case 'seria-abc-warriors':
						if (coversByClass.classList.value.includes('seria-abc-warriors')) coversByClass.style.display = 'block';
						else coversByClass.style.display = 'none';
						break;
					case 'seria-absalom':
						if (coversByClass.classList.value.includes('seria-absalom')) coversByClass.style.display = 'block';
						else coversByClass.style.display = 'none';
						break;
					case 'seria-sedzia-dredd':
						if (coversByClass.classList.value.includes('seria-sedzia-dredd')) coversByClass.style.display = 'block';
						else coversByClass.style.display = 'none';
						break;
					case 'seria-uniwersum-dredda-sedzia-anderson':
						if (coversByClass.classList.value.includes('seria-uniwersum-dredda-sedzia-anderson')) coversByClass.style.display = 'block';
						else coversByClass.style.display = 'none';
						break;
					case 'seria-uniwersum-dredda-lawless':
						if (coversByClass.classList.value.includes('seria-uniwersum-dredda-lawless')) coversByClass.style.display = 'block';
						else coversByClass.style.display = 'none';
						break;
					case 'seria-uniwersum-dredda-mroczni-sedziowie':
						if (coversByClass.classList.value.includes('seria-uniwersum-dredda-mroczni-sedziowie')) coversByClass.style.display = 'block';
						else coversByClass.style.display = 'none';
						break;
					case 'seria-slaine':
						if (coversByClass.classList.value.includes('seria-slaine')) coversByClass.style.display = 'block';
						else coversByClass.style.display = 'none';
						break;
					case 'seria-solo':
						if (coversByClass.classList.value.includes('seria-solo')) coversByClass.style.display = 'block';
						else coversByClass.style.display = 'none';
						break;
					case 'seria-stickleback':
						if (coversByClass.classList.value.includes('seria-stickleback')) coversByClass.style.display = 'block';
						else coversByClass.style.display = 'none';
						break
					case 'seria-straznicy-masery':
						if (coversByClass.classList.value.includes('seria-straznicy-masery')) coversByClass.style.display = 'block';
						else coversByClass.style.display = 'none';
						break;	
					case 'seria-yiu':
						if (coversByClass.classList.value.includes('yiu')) coversByClass.style.display = 'block';
						else coversByClass.style.display = 'none';
						break;		
				default:
					coversByClass.style.display = 'block';
				}
			}
		});

		// Search for comics
		const searchCovers = document.getElementById('search-main-cover-input');
		searchCovers.addEventListener('input', function() {
			const coversByClassAltAttribute = coversByClass.getAttribute('alt').toLowerCase();
			if (coversByClassAltAttribute.includes(searchCovers.value.toLowerCase())) coversByClass.style.display = 'block';
			else coversByClass.style.display = 'none';
		});	

	}