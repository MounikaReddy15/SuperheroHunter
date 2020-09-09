


const search  = document.getElementById('search-bar');
const suggestion = document.getElementById('suggestions');


const searchHero = async searchName => {
 const res = await fetch(`https://www.superheroapi.com/api.php/3071693936250675/search/${searchName}`);
 const heros = await res.json();
 const results = heros.results;
//   console.log(results);
 let matches = results.filter(hero => {
     const regex = new RegExp(`^${searchName}`, 'gi');
     return hero.name.match(regex);
 });
 console.log(matches);

// if(searchName.length === 0 ) {
//     matches = [];
//     suggestion.innerHTML = '';
// }

displayData(matches);
};

var favours = new Array();
const favouriteList = (names) => {
    // console.log(names);
    favours.push(names);
     localStorage.setItem("favours", JSON.stringify(favours));
    // var storage = JSON.stringify(favours);
    
    // var storage = JSON.parse(localStorage['favours']);
    // console.log(favours);
    // console.log(storage);
    window.alert("Added to Favorites");
    
    
    
}
const displayData = (matches) => {
    if(matches.length > 0) {
        // map returns an array from an array
        const html = matches.map(match => `
         
       <div>
            <h4><a href="hero.html?name=${match.name}" > ${match.name} </a></h4>
         
        <button style="color:blue; height:25px; margin-left:100px; "
         onclick = "favouriteList(${match.id})" > Add to Favorites </button>
         </div>
        `
        ).join('');

        suggestion.innerHTML = html;
    }
};


search.addEventListener('keyup', () => searchHero(search.value));