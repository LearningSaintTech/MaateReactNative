import apiClient from './apiClient';

export const login = async (email, password) => {
  return apiClient.post('/login', { email, password }).then(res => res.data);
};
