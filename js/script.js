// Dark and light mode - variables
const moon = document.getElementById('moon');
const sun = document.getElementById('sun');
const container = document.getElementById('container');
const customizeText = document.querySelectorAll('.customize-text');

// Dark and light mode - functions
moon.addEventListener('click', function() {
	document.body.style.backgroundColor = "#121212";
	sun.style.display = "inherit";
	moon.style.display = "none";
	container.style.backgroundColor = "#121212";
	//customizeText.style.color = "white";
});

sun.addEventListener('click', function() {
	document.body.style.backgroundColor = "#E7E9EC";
	sun.style.display = "none";
	moon.style.display = "inherit";
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


/* // Objects
function Comics(id, title, writer, art, status, filter, newComics) {
	this.id = id;
	this.title = title;
	this.writer = writer;
	this.art = art;
	this.status = status;
	this.filter = filter;
	this.newComics = Boolean;
}

const duam = new Comics(20, "Duam", "Felix Vega", "Felix Vega", "Dostępne", "Antologie/Integrale", false);
const metronom = new Comics(15, "Metronom", "Eric Corbeyran", "Grun", "Dostępne", "Antologie/Integrale", false);


const allComics = [duam, metronom];


*/

/*

const duam = {
	id: 20,
	title: "Duam",
	writer: "Felix Vega",
	art: "Felix Vega",
	statusOfAvailable: "Dostępne",
	filter: "Antologie/Integrale",
	newComics: false
};

const metronom = {
	id: 15,
	title: "Metronom",
	writer: "Eric Corbeyran",
	art: "Grun",
	statusOfAvailable: "Dostępne",
	filter: "Antologie/Integrale",
	newComics: false
};




for (prop in duam) {
	if(duam.hasOwnProperty(prop)) {
		console.log("property: " + prop + ",  wartość: " + duam[prop]);
	}
}

const allComics = [duam, metronom];
*/



/*

const allComics = {
	duam: {
		id: 20,
		title: "Duam",
		writer: "Felix Vega",
		art: "Felix Vega",
		statusOfAvailable: "Dostępne",
		filter: "Antologie/Integrale",
		newComics: false
	},
	
	metronom: {
		id: 15,
		title: "Metronom",
		writer: "Eric Corbeyran",
		art: "Grun",
		statusOfAvailable: "Dostępne",
		filter: "Antologie/Integrale",
		newComics: false
	}
};


const arrayOfComics = [duam, metronom];




const filterId = Object.values(allComics);

Object.entries

allComics.sort(function(duam, metronom) {
    return parseFloat(duam.id) - parseFloat(metronom.id);
	}
);


	/*

function Comics(id, title, writer, art, statusOfAvailable, filter, newComics) {
	this.id = id;
	this.title = title;
	this.writer = writer;
	this.art = art;
	this.statusOfAvailable = statusOfAvailable;
	this.filter = filter;
	this.newComics = newComics
};

const duam = new Comics(20, "Duam", "Felix Vega", "Felix Vega", "Dostępne", "Antologie/Integrale", false)

*/

//Array



const duam = {
	id: 20,
	title: "Duam",
	writer: "Felix Vega",
	art: "Felix Vega",
	statusOfAvailable: "Dostępne",
	filter: "Antologie/Integrale",
	newComics: false
};

const metronom = {
	id: 15,
	title: "Metronom",
	writer: "Eric Corbeyran",
	art: "Grun",
	statusOfAvailable: "Dostępne",
	filter: "Antologie/Integrale",
	newComics: false
};

const comicsArray = [];
	
comicsArray[0] = duam;
comicsArray[1] = "metronom";

