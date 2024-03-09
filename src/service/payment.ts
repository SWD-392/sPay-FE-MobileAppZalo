import axios from 'axios';
import dotenv from 'dotenv';


const BASE_URL = process.env.API_URL;
const QUERY_STORE = '/api/stores';

export const getStore = async (key: string) => {
    console.log('getStore function called');
  try {
    const response = await axios.get(
        `${BASE_URL}${QUERY_STORE}${key}`
        
        );
        console.log('API request successful');
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error('Error:', error);
  }
};