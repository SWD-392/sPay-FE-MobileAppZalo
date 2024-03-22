import axios from 'axios';
import dotenv from 'dotenv';


// const BASE_URL = process.env.API_URL;
const BASE_URL = "https://spay-app.azurewebsites.net";

// const BASE_URL = "https://45e2-2402-800-6318-bcb-405c-ed61-8468-6a73.ngrok-free.app"
const QUERY_MEMBERSHIP = '/api/v1/Memberships';

export const getMembershipByUserKey = async (userKey: string, storeCate: string) => {
  try {
    const response = await axios.get(
        `${BASE_URL}${QUERY_MEMBERSHIP}?UserKey=${userKey}&StoreCateKey=${storeCate}`
        );
    return response.data;
  } catch (error) {
    console.error('Error:', error);
  }
};

