

// to parse the query string
const queryString = window.location.search;
// to only extract specific URL Parameter value
const urlParams = new URLSearchParams(queryString);

const name = urlParams.get('name')
console.log(name);

const details = document.getElementById('details');

function createNode(ele) {
        return document.createElement(ele);
}

function append(parent, el) {
        return parent.appendChild(el);
}

const searchHero = async name => {
    console.log(name);
    const res = await fetch(`https://www.superheroapi.com/api.php/3071693936250675/search/${name}`);
    const heros = await res.json();
    const results = heros.results[0];
    console.log(results);
    
    // displayData(results);
    // Object.entries(results).forEach(item =>
    //     console.log(`${[0].biography} ${[0]}s each cost
    //     ${[0].full-name}`)
    //  );

//     console.log(entries[2][0], ":" , entries[2][2]);
        // results.map
        let nam = createNode('h1'),
        img  = createNode('img'),
        bio = createNode('h3'),
        pow = createNode('h3');
        head = createNode('h2'),

        img.src = results.image.url;
        nam.innerHTML = results.name;

        const entries1 = results.biography;
        // console.log(entries1);
        for(const [key, value] of Object.entries(entries1)) {
                console.log(`${key}  :  ${value}`);
                bio.innerHTML += (`${key} &nbsp;&nbsp; : &nbsp;&nbsp;&nbsp; ${value}<br><br>`);
        }
        const entries2 = results.powerstats;
        head.innerHTML =  `Powerstats:`
        // console.log(entries2);
        for(const [key, value] of Object.entries(entries2)) {
                console.log(`${key} : ${value}`);
                
                pow.innerHTML += (`${key} &nbsp;&nbsp; : &nbsp;&nbsp;&nbsp; ${value}<br><br>`);
                
                
        }

        append(details, nam);
        append(details, img);
        append(details, bio);
        // append(details, head);
        append(details, pow);
        
};






// const displayData = (matches) => {

//     if(matches.length > 0) {
//         // map returns an array from an array
//         const html = matches.map(match => `
         
//        <div>
//             <h4><a href="hero.html?name=${match.name}" > ${match.name} </a></h4>
         
//         <button style="color:blue; height:25px; margin-left:100px; "
//          onclick = "favouriteList(${match.id})" > Add to Favorites </button>
//          </div>
//         `
//         ).join('');
        
//         suggestion.innerHTML = html;
//     }
// };
searchHero(name);