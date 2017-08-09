let searchBar = document.getElementById("search-bar");

searchBar.addEventListener('keypress', function(e) {
  let key = e.which || e.keyCode;
  if (key === 13) {fetchSearch()}} );

function fetchSearch() {
  console.log(createQuery(searchBar.value));
}

function createQuery(searchTerms){
  let query = "http://www.recipepuppy.com/api/?q=";
  searchTerms = searchTerms.replace(/\s+/g,"+");
  query += searchTerms;
  return query;
}

//http://www.recipepuppy.com/api/?q=omelet
