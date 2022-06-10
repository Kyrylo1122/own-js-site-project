import { fetchFilms } from './fetchAPI';
import cardTemplate from './cardTemplate';
import { filterOfGenres } from './genresSettings';

const containerEl = document.querySelector('.main-gallery__list');
// let page = 1;

fetchFilms().then(({ data }) => {
  const results = data.results;
  const render = results
    .map(
      ({
        poster_path,
        title,
        release_date,
        genre_ids,
        vote_average,
        media_type,
      }) => {
        if (media_type !== 'movie') {
          return;
        }
        const releaseDate = release_date.slice(0, 4);
        const allGenres = filterOfGenres(genre_ids);
        return cardTemplate(
          poster_path,
          title,
          allGenres,
          releaseDate,
          vote_average
        );
      }
    )
    .join('');
  containerEl.innerHTML = render;
});
