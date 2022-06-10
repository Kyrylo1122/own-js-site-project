import { genres } from './listOFGenres.mjs';

export function getGenre(id) {
  const genresArr = genres.find(res => res.id === id);
  return genresArr.name;
}
export function filterOfGenres(allIdGenres) {
  return allIdGenres
    .map(genre => {
      return getGenre(genre);
    })
    .splice(0, 2)
    .join(', ');
}
