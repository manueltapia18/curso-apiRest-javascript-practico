
async function getTrendingMoviesPreview() {
  const res = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`);
  const data = await res.json();
  
  const movies = data.results;

  trendingMoviesPreviewList.innerHTML = "";

  movies.forEach(movie => {
    const movieContainer = document.createElement('div');
    movieContainer.classList.add('movie-container');
    const movieImg = document.createElement('img');
    movieImg.classList.add('movie-img');
    movieImg.setAttribute('alt', movie.title);
    movieImg.setAttribute('src', `https://image.tmdb.org/t/p/w300/${movie.backdrop_path}`);
    
    movieContainer.appendChild(movieImg);
    trendingMoviesPreviewList.appendChild(movieContainer);
  });
  
}


async function getcategoriesPreview() {
  const res = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`);
  const data = await res.json();

  categoriesPreviewList.innerHTML = "";
  const categories = data.genres;
  categories.forEach(categori => {
    const categoryContainer = document.createElement('div');
    categoryContainer.classList.add('category-container');
    const categoryTitle = document.createElement('h3');
    categoryTitle.classList.add('category-title');
    categoryTitle.setAttribute('id', `id${categori.id}`);
    categoryTitle.addEventListener('click',()=>{
      location.hash = `#category=${categori.id}-${categori.name}`
    })
    const categoryTitleText = document.createTextNode(categori.name)
    
    categoryTitle.appendChild(categoryTitleText);
    categoryContainer.appendChild(categoryTitle);
    console.log(categoryContainer);
    categoriesPreviewList.appendChild(categoryContainer)
  });
}

async function getMoviesByCategory() {
  const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${id}`);
  const data = await res.json();
  
  const movies = data.results;

  genericSection.innerHTML = "";
  movies.forEach(movie => {
    const movieContainer = document.createElement('div');
    movieContainer.classList.add('movie-container');
    const movieImg = document.createElement('img');
    movieImg.classList.add('movie-img');
    movieImg.setAttribute('alt', movie.title);
    movieImg.setAttribute('src', `https://image.tmdb.org/t/p/w300/${movie.backdrop_path}`);
    
    movieContainer.appendChild(movieImg);
    genericSection.appendChild(movieContainer);
  });
  
}

getMoviesByCategory()





































