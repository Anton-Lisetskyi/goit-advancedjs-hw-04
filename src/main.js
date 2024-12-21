import { getImg } from './js/pixabay-api';
import { createCardsMarkup } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const fetchUsersBtn = document.querySelector('button[type=submit]');
const loadMoreBtn = document.querySelector('.js-load-more');
const imgs = document.querySelector('.images-div');
const loaderClass = document.querySelector('.loaderClass');

let page = 1;
let searchValue = '';
let cardHeight = 0;


fetchUsersBtn.addEventListener('click', handleSearch);
loadMoreBtn.addEventListener('click', handleLoadMore);

async function handleSearch(evt) {
  evt.preventDefault();
  let searchInput = document.querySelector('input[name="search"]');
  searchValue = searchInput.value.trim();

  if (!searchValue) {
    iziToast.show({
      title: '❌',
      message: 'Please enter a search query!',
      backgroundColor: '#ef4040',
      messageColor: 'white',
    });
    return;
  }

  imgs.innerHTML = '';
  loaderClass.style.display = 'flex';

try {
    const data = await getImg(searchValue);

    if (data.totalHits === 0) {
      iziToast.show({
        title: '❌',
        message: 'No images found for the query.',
        backgroundColor: '#ef4040',
        messageColor: 'white',
      });
      loadMoreBtn.classList.add('is-hidden');
      return;
    }

    page = 1;
  createCardsMarkup(data.hits);

 const firstCard = imgs.querySelector('.gallery-card');
    if (firstCard) {
      cardHeight = firstCard.getBoundingClientRect().height;
  }
  
    if (data.totalHits > 15) {
      loadMoreBtn.classList.remove('is-hidden');
    } else {
      loadMoreBtn.classList.add('is-hidden');
    }
  } catch (error) {
    iziToast.show({
      title: '❌',
      message: `Something went wrong: ${error.message}`,
      backgroundColor: '#ef4040',
      messageColor: 'white',
    });
  } finally {
    loaderClass.style.display = 'none';
  }

  searchInput.value = '';
}

async function handleLoadMore() {
  page += 1;
  loaderClass.style.display = 'block';

  try {
    const data = await getImg(searchValue, page);

    if (data.hits && data.hits.length > 0) {
      createCardsMarkup(data.hits);
    }

    if (cardHeight > 0) {
      window.scrollBy({
        top: cardHeight * 2,
        behavior: 'smooth',
      });
    }

    if (page * 15 >= data.totalHits) {
      loadMoreBtn.classList.add('is-hidden');
      iziToast.show({
      message: `We're sorry, but you've reached the end of search results.`,
      backgroundColor: '#CCCCCC',
      messageColor: 'white',
    });
    }
  } catch (error) {
    iziToast.show({
      title: '❌',
      message: `Something went wrong: ${error.message}`,
      backgroundColor: '#ef4040',
      messageColor: 'white',
    });
  } finally {
    loaderClass.style.display = 'none';
  }
}
