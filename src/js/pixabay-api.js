import axios from 'axios';


const API_KEY = '47639623-264b1095d84da06504953512f';

async function getImg(searchValue, page = 1) {
  const searchParams = {
    key: API_KEY,
    q: searchValue,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    page: page,
    per_page: 15,
  };

  const url = 'https://pixabay.com/api/';

  try {
    const res = await axios.get(url, { params: searchParams });

    if (!res.data.hits || res.data.hits.length === 0) {
      throw new Error('No images found for the query.');
    }

    return res.data;
  } catch (error) {
    console.error('Error fetching images:', error.message);
    throw error;
  }
}

export { getImg };
