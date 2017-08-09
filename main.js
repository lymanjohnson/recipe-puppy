
let searchBar = document.getElementById("search-bar");

searchBar.addEventListener('keypress', function(e) {
  let key = e.which || e.keyCode;
  if (key === 13) {fetchSearch(createQuery(searchBar.value))}} );

function createQuery(searchTerms){
  let query = "http://recipepuppyproxy.herokuapp.com/api/?i=";
  searchTerms = searchTerms.replace(/\s+/g,"+");
  query += searchTerms;
  return query;
}


function fetchSearch(url) {
   fetch(url)
   .then (
     function(response) {
       if (response.status !== 200) {
         console.log("Error "+ response.status);
       }
       response.json().then(function(data){
         let markup = "";
           for(i=0;i<data.results.length;i++) {
            console.log(data.results[i]);

            let link          = data.results[i].href;
            let thumbnailURL  = data.results[i].thumbnail;
            let ingredients   = data.results[i].ingredients;
            let title         = data.results[i].title;

             let htmlBlock =`
          <div href = "${link}">
            <p>${title}</p>
            <p>${ingredients}</p>
            <img src="${thumbnailURL}">
          </div>
           `;
           markup += htmlBlock;
          }
          console.log(markup);

          let wrapper = document.getElementById("wrapper");
          wrapper.innerHTML = markup;


       });

     }

   );

 }
