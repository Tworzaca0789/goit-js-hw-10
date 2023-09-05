import axios from 'axios';
import { fetchBreeds, fetchCatByBreed } from './cat-api';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'notiflix/dist/notiflix-3.2.6.min.css';

import 'slim-select/dist/slimselect.css';
import SlimSelect from 'slim-select';

const breedSelect = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');
const catInfo = document.querySelector('.cat-info');

const arrayObjBreeds = [];
const API_KEY =
  'live_IPLgjpcZhvWzX0sSEOFtV4lKktVJ8JWuUqlvwj6X4xumqdB0T4XxSASDSIwYovB8';

axios.defaults.headers.common['x-api-key'] = API_KEY;

const getUrl = 'https://api.thecatapi.com/v1';

new SlimSelect({
  select: '.breed-select',
});

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
