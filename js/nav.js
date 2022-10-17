// Navbar menu
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', () => {
	navbarLinks.classList.toggle('active')
});

// Dark and light mode - variables
const moon = document.getElementById('moon');
const sun = document.getElementById('sun');
const container = document.getElementById('container');
const customize = document.getElementById('customize');

const containerPage = document.getElementById('container-page'); 
const details = document.querySelector('.details');
const breadcrumbsElement = document.querySelectorAll('.breadcrumbs-element');
const breadcrumbsElementLinkBack = document.getElementById('back-link-top');
const breadcrumbsElementLinkCatalog = document.getElementById('catalog-link-top');

// Dark and light mode - functions
moon.addEventListener('click', function() {
	document.body.style.backgroundColor = "var(--main-color)";
	document.body.style.transition = "background-color .5s ease-in-out";
	sun.style.display = "inline";
	moon.style.display = "none";

	//for Main site
	if (container != null) {
	container.style.backgroundColor = "var(--main-color)";
	container.style.transition = "background-color .5s ease-in-out";

	for (let i=0; i<container.children.length; i++) {
		container.children[i].style.boxShadow = "4px 4px 8px rgb(62 177 183 / 40%)";
		container.children[i].style.transition = "box-shadow .5s ease-in-out";
	};

	};
	if (customize != null) {
	customize.style.color = "#d7d7d7";
	};

	//for Comics site
	containerPage.style.backgroundColor = "var(--main-color)";
	containerPage.style.transition = "background-color .5s ease-in-out";
	containerPage.style.color = "#d7d7d7";
	details.style.backgroundColor = "#282828";
	details.style.transition = "background-color .5s ease-in-out";
	for (let i=0; i<2; i++) {
		breadcrumbsElement[i].style.backgroundColor = "#282828";
		breadcrumbsElement[i].style.transition = "background-color .5s ease-in-out";
		breadcrumbsElement[i].style.color = "#d7d7d7";
	};
	breadcrumbsElementLinkBack.style.color = "#d7d7d7";
	breadcrumbsElementLinkCatalog.style.color = "#d7d7d7";
});

sun.addEventListener('click', function() {
	document.body.style.backgroundColor = "var(--bright-color)";
	document.body.style.transition = "background-color .5s ease-in-out";
	sun.style.display = "none";
	moon.style.display = "inline";

	//for Main site
	if (container != null) {
	container.style.backgroundColor = "var(--bright-color)";
	container.style.transition = "background-color .5s ease-in-out";

	for (let i=0; i<container.children.length; i++) {
		container.children[i].style.boxShadow = "4px 4px 8px rgb(0 0 0 / 40%)";
		container.children[i].style.transition = "box-shadow .5s ease-in-out";
	};
	};

	if (customize != null) {
	customize.style.color = "#000000";
	};

	//for Comics site
	containerPage.style.backgroundColor = "var(--bright-color-100)";
	containerPage.style.transition = "background-color .5s ease-in-out";
	containerPage.style.color = "#000000";
	details.style.backgroundColor = "var(--bright-color)";
	details.style.transition = "background-color .5s ease-in-out";
	for (let i=0; i <2; i++) {
	breadcrumbsElement[i].style.backgroundColor = "var(--bright-color-100)";
	breadcrumbsElement[i].style.transition = "background-color .5s ease-in-out";
	breadcrumbsElement[i].style.color = "var(--main-color)";
	};
	breadcrumbsElementLinkBack.style.color = "var(--main-color)";
	breadcrumbsElementLinkCatalog.style.color = "var(--main-color)";
});

// Search button
const search = document.getElementById('search');
const searchInput = document.getElementById('search-input');

search.addEventListener('click', function() {
	searchInput.style.display = "inherit";
	//searchInput.style.transform = "scaleX(2)";
	//searchInput.style.backgroundColor: "#DCDCDC";
});