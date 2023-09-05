import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'notiflix/dist/notiflix-3.2.6.min.css';

import 'slim-select/dist/slimselect.css';
import SlimSelect from 'slim-select';

new SlimSelect({
  select: '.breed-select',
});

const breedSelect = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');
const catInfo = document.querySelector('.cat-info');

const arrayObjBreeds = [];

const loadBreeds = e => {
  e.preventDefault();
  const breedName = e.target.breedName.value;
};

breedSelect.addEventListener('change', loadBreeds);
breedSelect.dispatchEvent(new Event('change'));

/*
The Cat API - API Key

Thanks for signing up, welcome to the The Cat API!

Here's your API key:

live_IPLgjpcZhvWzX0sSEOFtV4lKktVJ8JWuUqlvwj6X4xumqdB0T4XxSASDSIwYovB8

Use it as the 'x-api-key' header when making any request to the API, or by adding as a query string parameter e.g. 'api_key=live_IPLgjpcZhvWzX0sSEOFtV4lKktVJ8JWuUqlvwj6X4xumqdB0T4XxSASDSIwYovB8'

More details on authentication →

📙 Useful links
*/
