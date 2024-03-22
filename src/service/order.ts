import axios from "axios";


// const BASE_URL = process.env.API_URL;
const BASE_URL = "https://spay-app.azurewebsites.net";
const token = localStorage.getItem('token');

const QUERY_PROMOTION = '/api/v1/Orders'

export const creatOrder = async (body:any) => {
  try {
    const response = await axios.post(
        `${BASE_URL}${QUERY_PROMOTION}`,
        body, // Add the body here
        // {
        //   headers: {
        //     Authorization: `Bearer ${token}`, // Add the token to the headers
        //   },
        // }
      );
      return response;
  } catch (error) {
    console.error('Error:', error);
  }
};