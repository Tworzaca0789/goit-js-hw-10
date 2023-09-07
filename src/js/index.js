import axios from 'axios';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { fetchBreeds, fetchCatByBreed } from './cat-api';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'notiflix/dist/notiflix-3.2.6.min.css';
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';
const selectors = {
  breedSelect: document.querySelector('.breed-select'),
  loader: document.querySelector('.loader'),
  error: document.querySelector('.error'),
  catInfo: document.querySelector('.cat-info'),
};
selectors.breedSelect.classList.add('is-hidden');
selectors.loader.classList.add('is-hidden');
selectors.error.classList.add('is-hidden');
selectors.catInfo.classList.add('is-hidden');

fetchBreeds()
  .then(data => {
    selectors.breedSelect.classList.remove('is-hidden');
    data.forEach(el => {
      const option = document.createElement('option');
      option.value = el.id;
      option.textContent = el.name;
      selectors.breedSelect.appendChild(option);
      return option;
    });

    new SlimSelect({
      select: '.breed-select',
    });
  })
  .catch(onFetchBreedError);

function onFetchBreedError(error) {
  Loading.remove();
  Notify.failure('Oops! Something went wrong! Try reloading the page!', {
    position: 'center-center',
    width: '400px',
  });
}
const onSelectBreed = e => {
  Loading.arrows('Loading data, please wait...');
  const selected = e.target.selectedOptions[0];

  fetchCatByBreed(selected.value)
    .then(data => {
      selectors.catInfo.innerHTML = `
      <div class="list-div">
      <div>
        <img src="${data[0].url}" alt="${data[0].breeds[0].name}" width="400"/>
        </div>
        <div>
        <h1>${data[0].breeds[0].name}</h1>
        <p>${data[0].breeds[0].description}</p>
        <p>${data[0].breeds[0].temperament}</p>
        </div>s
        </div>`;
      Loading.remove();
      selectors.catInfo.classList.remove('is-hidden');
    })
    .catch(onFetchBreedError);
};
selectors.breedSelect.addEventListener('change', onSelectBreed);
