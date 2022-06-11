import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/';
const API_KEY = '9b627b5c13f01f3f3d8206e8b910ae85';

export async function fetchFilms(page) {
  try {
    const { data } = await axios.get(
      `/3/trending/movie/week?api_key=${API_KEY}&page=${page}`
    );

    return data;
  } catch (error) {
    throw new Error('Something gone wrong', error);
  }
}
