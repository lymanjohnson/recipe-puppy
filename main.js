let searchBar = document.getElementById("search-bar");

searchBar.addEventListener('keypress', function(e) {
  let key = e.which || e.keyCode;
  if (key === 13) {fetchSearch()}} );

function createQuery(searchTerms){
  let query = "http://www.recipepuppy.com/api/?q=";
  searchTerms = searchTerms.replace(/\s+/g,"+");
  query += searchTerms;
  return query;
}

function fetchSearch(){
fetch(createQuery(searchBar))
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        console.log(data.results[0].title);
        let title = data.results[0].title;
        console.log(title);
        console.log(`The first Star Wars movie is ${title}`);

        //render characters

        let characters = data.results[0].characters;



        function renderCharacters(){
          return `
            <ul>
              ${characters.map(character => `<li>${character}</li>`).join('')}
            </ul>
          `;
        }

        console.log(characters);


      //let's set up the HTML
      //characters as array then as li

         let markup = `
           <div class="title">
             <p>Title: ${title}</p>
             <p>Episode ID: ${data.results[0].episode_id}</p>
             <ul>Characters:
               <li>${data.results[0].characters}</li>
             </ul>
             ${renderCharacters(data.results.characters)}
           </div>
         `

         document.body.innerHTML = markup;

      });
    }
  )
}
