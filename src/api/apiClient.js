import axios from 'axios';
import { BASE_URL } from '../constants/apiUrls';

const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});

export default apiClient;
