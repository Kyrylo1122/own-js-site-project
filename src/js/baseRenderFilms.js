import { fetchFilms } from './fetchAPI';
import cardTemplate from './cardTemplate';
import { filterOfGenres } from './genresSettings';
import { renderPaginationBtn } from './btnPagination';

const containerEl = document.querySelector('.main-gallery__list');
const pageContainer = document.querySelector('.page');
const pagFirstBtn = document.querySelector('.pagination__btn--firstPage');
let page = 1;
renderCards(page);

function renderCards(pageNumb) {
  fetchFilms(pageNumb).then(({ results }) => {
    const render = results
      .map(({ poster_path, title, release_date, genre_ids, vote_average }) => {
        const releaseDate = release_date.slice(0, 4);
        const allGenres = filterOfGenres(genre_ids);
        return cardTemplate(
          poster_path,
          title,
          allGenres,
          releaseDate,
          vote_average
        );
      })
      .join('');
    containerEl.innerHTML = render;
  });
  renderPaginationBtn(pageNumb, pageContainer);
}

pageContainer.addEventListener('click', fetchNewPage);

function fetchNewPage(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  page = Number(e.target.id);
  renderCards(page);
  scroll(0, 0);
}

pagFirstBtn.addEventListener('click', renderFirstPage);

function renderFirstPage(e) {
  renderCards(1);
  scroll(0, 0);
}
