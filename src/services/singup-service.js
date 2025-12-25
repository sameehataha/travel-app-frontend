import axios from "axios";
import { API_ENDPOINTS } from "../config/api";
export const signupHandler = async (name, number, email, password) => {
  try {
    const response = await axios.post(API_ENDPOINTS.register, {
      username: name,
      phoneNumber: number,
      email: email,
      password: password,
    });
    console.log("Success:", response.data);
    return response.data;
  } catch (err) {
    console.error("Signup error:", err.response?.data || err.message);
    throw err;
  }
};
