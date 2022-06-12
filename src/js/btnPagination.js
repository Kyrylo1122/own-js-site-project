const pagFirstBtn = document.querySelector('.pagination__btn--firstPage');
export function renderPaginationBtn(page, container) {
  let allBtn = '';
  let liElements = null;

  let beforePage = page - 2;
  let afterPage = null;

  if (page <= 3) {
    afterPage = page + 3;
    addHiddenClass();
  } else {
    afterPage = page + 2;
    removeHiddenClass();
  }

  for (let i = beforePage; i <= afterPage; i += 1) {
    if (i <= 0) {
      continue;
    }
    if (i === page) {
      liElements = `<li class='page__item'><button class='page__btn page__btn--numb page__btn--active' id='${i}'>${i}</button></li>`;
    } else
      liElements = `<li class='page__item'><button class='page__btn page__btn--numb' id='${i}'>${i}</button></li>`;

    allBtn += liElements;
  }

  container.innerHTML = allBtn;
}

function addHiddenClass() {
  if (!pagFirstBtn.classList.contains('pagination__btn--hidden')) {
    pagFirstBtn.classList.add('pagination__btn--hidden');
  }
}
function removeHiddenClass() {
  if (pagFirstBtn.classList.contains('pagination__btn--hidden')) {
    pagFirstBtn.classList.remove('pagination__btn--hidden');
  }
}
