import axios from 'axios';

export const baseURL = 'http://localhost:8080';

export const makeRequest = axios.create({ baseURL });
