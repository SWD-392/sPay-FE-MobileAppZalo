import axios from "axios";


// const BASE_URL = process.env.API_URL;
const BASE_URL = "https://spay-app.azurewebsites.net";
const token = localStorage.getItem('token');

const QUERY_PROMOTION = '/api/v1/Cards'

export const getPromotion = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}${QUERY_PROMOTION}?PageIndex=1&PageSize=5`,
      {
        headers: {
          Authorization: `Bearer ${token}`, // Add the token to the headers
        },
      }
    );
        const data = response.data.data;
    return {data: data };
  } catch (error) {
    console.error('Error:', error);
  }
};