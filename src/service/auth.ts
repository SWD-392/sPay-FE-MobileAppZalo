import axios from "axios";
import dotenv from "dotenv";

// const BASE_URL = process.env.BASE_URL;
const BASE_URL = "https://spay-app.azurewebsites.net";
// const BASE_URL = 'https://6d4d-2402-800-6318-bcb-5d9e-dc15-6f73-91a4.ngrok-free.app'
const LOGIN = "/api/v1/auth/login";

export const userLogin = async (phoneNumber: String, password: String) => {
  try {
    const response = await axios.post(`${BASE_URL}${LOGIN}`, 
      {
        
          phoneNumber: phoneNumber,
          password: password,
        
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
};
