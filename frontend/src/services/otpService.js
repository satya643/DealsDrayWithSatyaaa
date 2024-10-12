import axios from 'axios';

export const sendOTP = (email) => {
  return axios.post(`https://${process.env.REACT_APP_BASE_URL}/api/auth/send-otp`, { email });
};

export const verifyOTP = (otpData) => {
  return axios.post(`https://${process.env.REACT_APP_BASE_URL}/api/auth/verify`, otpData);
};
