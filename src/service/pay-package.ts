import axios from "axios";


// const BASE_URL = process.env.API_URL;
const BASE_URL = 'https://spay-app.azurewebsites.net'
const QUERY_PROMOTION = '/api/Card'

export const getPromotion = async () => {
  try {
    const response = await axios.get(
        `${BASE_URL}${QUERY_PROMOTION}`
        );
        const data = response.data.data;
    return {data: data };
  } catch (error) {
    console.error('Error:', error);
  }
};