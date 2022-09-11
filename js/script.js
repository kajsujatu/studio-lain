// Dark and light mode - variables
const moon = document.getElementById('moon');
const sun = document.getElementById('sun');
const container = document.getElementById('container');

// Dark and light mode - functions
moon.addEventListener('click', function() {
	document.body.style.backgroundColor = '#121212';
	sun.style.display = "inherit";
	moon.style.display = "none";
	container.style.backgroundColor = '#121212';
});

sun.addEventListener('click', function() {
	document.body.style.backgroundColor = '#E7E9EC';
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


// Objects
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



console.log(allComics[1['id']]);

console.log(allComics.sort());

console.log(duam['id']);

console.log(allComics['duam'['id']]);
	
