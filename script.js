let movies=[
{
  name:"Avengers Infinity War",
  poster:"https://i5.walmartimages.com/seo/Avengers-Infinity-War-Movie-Poster-Print-Regular-Style-Size-24-X-36_65e23347-2ccc-4581-9700-581e0ea9c3a8.a808f8889bfa9e368659fbefc5e5dda4.jpeg",
  rating:8.5,
  actor:"Robert Downey Jr. Josh Brolin. Scarlett johanson"
},
{
  name:"Star Wars",
  poster:"https://www.komar.de/media/catalog/product/cache/5/image/9df78eab33525d08d6e5fb8d27136e95/4/-/4-4113_star_wars_movie_poster_rey_ma.jpg",
  rating:7.9,
  actor:"Mark Hamill. Carrie Fisher. Harrison Ford"
},
{
  name:"Guardians of the Galaxy",
  poster:"https://m.media-amazon.com/images/I/71lbFfxfMtL._AC_UF894,1000_QL80_.jpg",
  rating:9.0,
  actor:"James Gunn. Chris Pratt. Zoe Saldaña"
},
{
  name:"Joker",
  poster:"https://www.vintagemovieposters.co.uk/wp-content/uploads/2020/01/IMG_2891.jpeg",
  rating:8.9,
  actor:"Heath Ledger. Jared Leto. Jack Nicholson"
},
{
  name:"Spider-Man No Way Home",
  poster:"https://i.ebayimg.com/images/g/QYcAAOSwsbRnEU~4/s-l1200.jpg",
  rating:8.2,
  actor:"Tom Holland. Zendaya. Marisa Tomei"
},
{
  name:"Lagaan",
  poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRisJCN2d8N2mWUvJfPzeSuE5acF3Nu3YlzdQ&s",
  rating:7.8,
  actor:"Aamir Khan. Gracy Singh. Rachel Shelley"
},
{
  name:"Master",
  poster:"https://images.indianexpress.com/2021/01/master.jpg?w=350",
  rating:8.0,
  actor:"Vijay. Vijay Sethupathi. Malavika Mohanan"
},
{
  name:"Seven",
  poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjmpWTcvkrapuf1Z2d77cTl8YqTmICdAvDzQ&s",
  rating:7.5,
  actor:"David Fincher. Morgan Freeman. Gwyneth Paltrow"
},
{
  name:"Leo",
  poster:"https://images.indianexpress.com/2023/09/leo3.jpg",
  rating:7.9,
  actor:"Vijay. Trisha. Arjun"
}
];


function searchMovie(){
 let movieName = document.getElementById('search').value;
 if(movieName!==""){
  let result= movies.filter(function(movie){
    return movie.name.toUpperCase().includes(movieName.toUpperCase());

  })

  displayMovies(result);

 }else{
  displayMovies(movies);
 }
}

{/*<div> </div> */}// in html
// let movie=document.createElement("div");//in js
// movie.classList.add('one')
function displayMovies(data){
  document.getElementById("movies").innerHTML="";
  let htmlString=``;

        for(let i=0;i<data.length;i++){
          htmlString+=`<div class="movie">
        <div class="overlay">
          <div class="video">


          </div>
          <div class="details">
            <h1>${data[i].name}</h1>
            <h2>IMDB: ${data[i].rating}</h2>
            <p>${data[i].actor}</p>

          </div>
        </div>
        <img src="${data[i].poster}" alt="poster" class="poster">
        </div>`
        }
        
  document.getElementById("movies").innerHTML=htmlString;
}

displayMovies(movies);








// let movieDIV=document.createElement("div");
//   movieDIV.classList.add("movie");

//   let overlayDIV=document.createElement("div");
//   overlayDIV.classList.add("overlay")
//   movieDIV.appendChild(overlayDIV)
//   console.log(movieDIV)
