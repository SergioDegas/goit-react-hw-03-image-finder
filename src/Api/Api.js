import axios from 'axios';
const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '30552752-3be072d05b9e26cabdad4f15d';

export default async function fetchImages(query, page) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: 12,
    page,
  });
  const url = `${BASE_URL}/?${params}`;

  const { data } = await axios.get(url);
  return data
}
