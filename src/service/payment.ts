import axios from 'axios';
import dotenv from 'dotenv';

export const getStore = async (key: string) => {
    console.log('getStore function called');
  try {
    const response = await axios.get(
        `${process.env.API_URL}/api/stores/${key}`
        
        );
        console.log('API request successful');
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error('Error:', error);
  }
};