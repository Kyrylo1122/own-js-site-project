export function renderPaginationBtn(page, container) {
  let allBtn = '';
  const firstEl = '';
  let addLi = null;
  let beforePage = page - 2;
  let afterPage = page + 2;
  for (let i = beforePage; i <= afterPage; i += 1) {
    if (i <= 0) {
      continue;
    }
    if (i === page) {
      addLi = `<li class='page__item'><button class='page__btn page__btn--active' id='${i}'>${i}</button></li>`;
    } else
      addLi = `<li class='page__item'><button class='page__btn' id='${i}'>${i}</button></li>`;

    allBtn += addLi;
  }

  container.innerHTML = allBtn;
}
