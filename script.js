const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=a11f6b98b77224df75cfcffe59e74030&page=1";
const IMG_URL = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=a11f6b98b77224df75cfcffe59e74030&query="';

const search = document.getElementsByClassName('searchbox')[0]

getMovie(API_URL);

async function getMovie(url) {
  const res = await fetch(url);
  const data = await res.json();

  showMovies(data.results);
}


search.addEventListener('keyup',(e) => {
  const searchTerm = e.target.value;
 
  if(searchTerm){
    getMovie(SEARCH_API+searchTerm)
  }
  else{
    window.location.reload();
  }
})



function showMovies(movies){
const content = document.getElementsByClassName('content')[0];
content.innerHTML = '';
movies.forEach((movie)=>{
  // console.log(movie);
    const movieCards = document.createElement('div');
    movieCards.classList.add("cards");
    // console.log(movieCards);
    movieCards.innerHTML = `
            <img src="${IMG_URL + movie.poster_path}" alt="${movie.title}">
            <div class="ratings ${getRatingColour(movie.vote_average)}">
                ${movie.vote_average}
                <i class="fas fa-star"></i>
            </div>
            <div class="description">${movie.title}</div>
            <div class="overview">${movie.overview}</div>   
    `
    content.appendChild(movieCards);
})
}


function getRatingColour(rating){
  if(rating>=8){
    return 'green'
  }else if(rating >= 5){
    return 'orange'
  }else{
    return 'red'
  }
}



  


