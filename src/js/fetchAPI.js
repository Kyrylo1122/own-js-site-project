import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/';
const API_KEY = '9b627b5c13f01f3f3d8206e8b910ae85';

export async function fetchFilms() {
  try {
    const res = await axios.get(
      `/3/trending/all/week?api_key=${API_KEY}&page=12`
    );

    return res;
  } catch (error) {
    throw new Error('Something gone wrong', error);
  }
}
