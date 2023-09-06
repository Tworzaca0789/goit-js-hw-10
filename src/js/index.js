import axios from 'axios';
import { fetchBreeds, fetchCatByBreed } from './cat-api';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'notiflix/dist/notiflix-3.2.6.min.css';
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';

//tworzenie select
const breedSelect = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');
const catInfo = document.querySelector('.cat-info');

//dodanie klas do ukrycia
breedSelect.classList.add('is-hidden');
loader.classList.add('is-hidden');
error.classList.add('is-hidden');
catInfo.classList.add('is-hidden');

const arrayObjBreeds = [];
//kolekcja ras
fetchBreeds()
  .then(response => {
    breedSelect.classList.remove('is-hidden');
    response.forEach(breed => {
      const option = document.createElement('option');
      option.value = breed.id;
      option.textContent = breed.name;
      arrayObjBreeds.push(option);
    });
    breedSelect.insertAdjacentHTML('beforeend', arrayObjBreeds);
    new SlimSelect({
      select: '.breed-select',
    });
  })
  .catch(fetchBreedError);

function fetchBreedError(error) {
  Loading.remove();
  Notify.failure('Oops! Something went wrong! Try reloading the page!', {
    timeout: 3000,
    width: '600px',
  });
}

const onSelectBreed = e => {
  Loading.p.loader('Loading data, please wait...');
  const selected = selectedOptions[0].value;

  fetchCatByBreed(selected)
    .then(response => {
      catInfo.innerHTML = `
  <img src = "${response[0].url}" alt = "${response[0].breeds[0].name}" width = "400"/>
  <h1>${response[0].breeds[0].name}</h1>
  <p>${response[0].breeds[0].description}</p>
  <p>${response[0].breeds[0].temperament}</p>`;
      Loading.remove();
      catInfo.classList.remove('is-hidden');
    })
    .catch(fetchBreedError);
};
breedSelect.addEventListener('change', onSelectBreed);
/*const loadBreeds = e => {
  e.preventDefault();
  const breedName = e.target.breedSelect;
  fetch(getUrl)
    .then(response => response.json())
    .then(data => {
      catInfo.innerHtml = '';
      catInfo.append(...data);
    });
};

breedSelect.addEventListener('change', loadBreeds);
breedSelect.dispatchEvent(new Event('change'));*/
/*
Here's your API key:

live_IPLgjpcZhvWzX0sSEOFtV4lKktVJ8JWuUqlvwj6X4xumqdB0T4XxSASDSIwYovB8

Use it as the 'x-api-key' header when making any request to the API, or by adding as a query string parameter e.g. /n
'api_key=live_IPLgjpcZhvWzX0sSEOFtV4lKktVJ8JWuUqlvwj6X4xumqdB0T4XxSASDSIwYovB8'

*/
