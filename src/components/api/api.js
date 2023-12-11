import axios from 'axios';

const API_KEY = '41185782-16af408fed5d0aaa3f3bdf615';
const BASE_URL = 'https://pixabay.com/api/';

export const getImages = async (q, page) => {
  const { data } = await axios.get(
    `${BASE_URL}?&q=${q}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return data;
};
