import api from "./axios";

export const loginAPI = (data: { phone_number: string; password: string }) => api.post('/login', data);

export const registerAPI = (data: { phone_number: string; password: string; name: string }) => api.post('/register', data);

export const logoutAPI = () => api.post('/logout');

export const fetchUserProfileAPI = () => api.get('/me');