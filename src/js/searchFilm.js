const API =
  'https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false';
const form = document.querySelector('.form');

form.addEventListener('submit', searchFilmSubmit);
function searchFilmSubmit(e) {
  e.preventDefault();
  const inputValue = new FormData(e.target.value);
  console.log(inputValue);
}
