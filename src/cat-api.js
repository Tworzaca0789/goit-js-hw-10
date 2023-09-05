import axios from 'axios';

const API_KEY =
  live_IPLgjpcZhvWzX0sSEOFtV4lKktVJ8JWuUqlvwj6X4xumqdB0T4XxSASDSIwYovB8;

axios.defaults.headers.common['x-api-key'] = API_KEY;

const getUrl = breedName =>
  ` https://api.thecatapi.com/v1/images/search?s=${breedName}`;

const options = {
  value: idBreed,
  select: breedName,
};
function fetchBreeds() {}
