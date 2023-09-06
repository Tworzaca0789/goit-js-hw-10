import axios from 'axios';
export { fetchBreeds };
export { fetchCatByBreed };

const API_KEY =
  'live_IPLgjpcZhvWzX0sSEOFtV4lKktVJ8JWuUqlvwj6X4xumqdB0T4XxSASDSIwYovB8';

axios.defaults.headers.common['x-api-key'] = API_KEY;
//url api o kotach
const getUrl = 'https://api.thecatapi.com/v1';
//const res = await axios.get(`some-url/todos`);
function fetchBreeds() {
  return axios.get(`${getUrl}/breeds`).then(response => {
    if (!response.status) {
      throw new Error(response.status);
    }
    return response.data;
  });
}
function fetchCatByBreed(breedId) {
  return axios
    .get(`${getUrl}/images/search?breed_ids=${breedId}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.data;
    });
}
