import apiClient from './apiClient';
import { SIGNUP_URL } from '../constants/apiurl';

export const signup = async (mobileNumber, otp, name,) => {
  try {
    const response = await apiClient.post(SIGNUP_URL, {
      mobileNumber,
      otp,
      name,
    });
    return response.data;
  } catch (error) {
    console.error('Signup API Error:', error.response?.data || error.message);
    throw error;
  }
};
