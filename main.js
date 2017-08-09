let searchBar = document.getElementById("search-bar");

searchBar.addEventListener('keypress', function(e) {
  let key = e.which || e.keyCode;
  if (key === 13) {fetchSearch()}} );

function fetchSearch() {
  console.log(searchBar.value);
}
