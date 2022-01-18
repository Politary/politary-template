import axios from 'axios';

export const API_URL = `https://api.com`;

export const API = axios.create({
    baseURL: API_URL,
});
