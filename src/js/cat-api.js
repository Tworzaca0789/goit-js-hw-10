import axios from 'axios';
export { fetchBreeds };
export { fetchCatByBreed };
//const res = await axios.get(`some-url/todos`);
function fetchBreeds() {
  return axios.get(`${getUrl}/breeds`).then(response => {
    if (!response.ok) {
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
