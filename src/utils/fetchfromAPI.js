import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const apiKey = import.meta.env.VITE_RAPID_API_KEY;

const options = {
  params: {
    maxResults: '50'
  },
  headers: {
    'x-rapidapi-key': apiKey,
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
  }
};





export const fetchFromAPI = async (url) => {
   const response = await axios.get(`${BASE_URL}/${url}`,options);

   return response.data;
}
