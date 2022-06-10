import axios from 'axios';

const API_KEY = '9b627b5c13f01f3f3d8206e8b910ae85';
async function fetchFilms() {
  const res = await axios(
    'https://api.themoviedb.org/3/movie/550?api_key=9b627b5c13f01f3f3d8206e8b910ae85'
  );
  return res;
}

fetchFilms().then(res => {
  console.log(44);
  console.log(res);
});
