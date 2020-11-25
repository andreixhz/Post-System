import axios from 'axios';

const url = "http://localhost:3333";

const api = axios.create({
    baseURL: url,
    timeout: 1000,
});

export default api;
