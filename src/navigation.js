searchFormBtn.addEventListener('click',()=>{
  location.hash = '#search=';
})

trendingBtn.addEventListener('click',()=>{
  location.hash = '#trends';
})

arrowBtn.addEventListener('click',()=>{
  location.hash = '#home';
})

window.addEventListener('DOMContentLoaded',navigator,false);
window.addEventListener('hashchange',navigator,false);

function navigator() {
  console.log({location});
  if (location.hash.startsWith('#trends')) {
    trendsPage();
  } else if (location.hash.startsWith('#search=')) {
    seachPage()
  }else if (location.hash.startsWith('#movie=')) {
    movieDatailPage();
  }else if (location.hash.startsWith('#category=')) {
    categoriesPage();
  }else{
    homePage();
  }
  location.hash
  }

  function homePage() {
    console.log('Home!!');
    headerSection.classList.remove("header-container--long");
    headerSection.getElementsByClassName.background = '';
    arrowBtn.classList.add('inactive');
    headerCategoryTitle.classList.add('inactive');
    headerTitle.classList.remove('inactive');
    searchForm.classList.remove('inactive');

    trendingPreviewSection.classList.remove('inactive');
    categoriesPreviewSection.classList.remove('inactive')
    genericSection.classList.add('inactive');
    movieDetailSection.classList.add('inactive');

    getcategoriesPreview()
    getTrendingMoviesPreview();
  }
  
  function categoriesPage() {
    console.log('CATEGORY!!');
    headerSection.classList.remove("header-container--long");
    headerSection.getElementsByClassName.background = '';
    arrowBtn.classList.remove('inactive');
    headerCategoryTitle.classList.remove('inactive');
    headerTitle.classList.add('inactive');
    searchForm.classList.add('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive')
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');

    //['category','id-name']
    const [_,categoryData] = location.hash.split('=');
    const [categoryId,categoryName] = categoryData.split('-');

    headerCategoryTitle.innerHTML = categoryName;
    getMoviesByCategory(categoryId);
  }

  function movieDatailPage() {
    console.log('MOVIE!!');

    headerSection.classList.add("header-container--long");
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.add('header-arrow--white');
    headerCategoryTitle.classList.add('inactive');
    headerTitle.classList.add('inactive');
    searchForm.classList.add('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive')
    genericSection.classList.add('inactive');
    movieDetailSection.classList.remove('inactive');
  }

  function seachPage() {
    console.log('SEARCH!!');
    headerSection.classList.remove("header-container--long");
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerCategoryTitle.classList.remove('inactive');
    headerTitle.classList.add('inactive');
    searchForm.classList.add('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive')
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');
  }

  function trendsPage() {
    console.log('TRENDS!!');

    headerSection.classList.remove("header-container--long");
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerCategoryTitle.classList.remove('inactive');
    headerTitle.classList.add('inactive');
    searchForm.classList.add('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive')
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');
  }





