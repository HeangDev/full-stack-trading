import api from "./axios";

export const loginAPI = (data: { country_code: string, phone_number: string; password: string }) => api.post('/login', data);

export const registerAPI = (data: { country_code: string, phone_number: string; password: string; username: string, referral_code: string }) => api.post('/register', data);

export const changePasswordAPI = (data: { current_password: string, new_password: string, confirm_password: string }) => api.post("/change_password", data);

export const logoutAPI = () => api.post('/logout');

export const fetchUserProfileAPI = () => api.get('/me');