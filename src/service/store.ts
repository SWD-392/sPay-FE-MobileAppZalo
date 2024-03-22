import axios from 'axios';
import dotenv from 'dotenv';


// const BASE_URL = process.env.API_URL;
const BASE_URL = 'https://spay-app.azurewebsites.net'
const token = localStorage.getItem('token');
const QUERY_STORE = '/api/v1/Stores';

export const getStore = async (key: string) => {
    console.log('getStore function called');
  try {
    const response = await axios.get(
        `${BASE_URL}${QUERY_STORE}/${key}`,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Add the token to the headers
          },
        }
        
        );
        console.log('API request successful');
    return response.data;
  } catch (error) {
    console.error('Error:', error);
  }
};