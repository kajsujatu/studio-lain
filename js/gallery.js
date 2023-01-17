/* eslint-disable no-mixed-spaces-and-tabs */
// gallery
const imgs = document.getElementsByClassName('inside-thumbnails');
const fullPageContainer = document.getElementById('fullpage-container');
const closeGalleryArea = document.getElementById('close-gallery-area');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');

for (let img of imgs) {
	// enlarge image
	img.addEventListener('click', function() {
		fullPageContainer.style.display = 'flex';
    	fullPageContainer.style.backgroundImage = 'url(' + img.src + ')';
		let currentImage = this;
		if (currentImage.previousElementSibling == null) leftArrow.style.display = 'none';
		if (currentImage.nextElementSibling == null) rightArrow.style.display = 'none';

		// left arrow
		leftArrow.addEventListener('click', prevImage);
		function prevImage() {
			currentImage = currentImage.previousElementSibling;
			fullPageContainer.style.backgroundImage = 'url(' + currentImage.src + ')';
			
			if (currentImage.previousElementSibling == null) leftArrow.style.display = 'none';
			rightArrow.style.display = 'flex';			
		}

		// right arrow
		rightArrow.addEventListener('click', nextImage);
		function nextImage() {

			currentImage = currentImage.nextElementSibling;
			fullPageContainer.style.backgroundImage = 'url(' + currentImage.src + ')';

			if (currentImage.nextElementSibling == null) rightArrow.style.display = 'none';
			leftArrow.style.display = 'flex';
		}
		// Prevent scrolling background
		document.body.style.overflow = 'hidden';
  	});
	
	// close full-page
	closeGalleryArea.addEventListener('click', function() {
		fullPageContainer.style.display = 'none';
		document.body.style.overflowY = 'scroll';
		rightArrow.style.display = 'flex';
		leftArrow.style.display = 'flex';	
	});
}