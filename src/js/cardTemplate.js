export default function cardTemplate(poster, title, genre, dateRelease, rate) {
  return `<li class="card">
    <div class="card__container">
<img
          src="https://image.tmdb.org/t/p/w200/${poster}"
          alt="poster"
          class="card__img"
        />

    </div>
    <div class="card__meta meta">
      <p class="meta__title"> ${title}</p>
      <ul class="meta__list list">
        <li class="meta__item meta__item--genres"> ${genre}</li>
        <li class="meta__item"> ${dateRelease}</li>
        <li class="meta__item meta__item--rating"> ${rate}</li>
      </ul>
    </div>
  </li>`;
}
