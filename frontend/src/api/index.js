import axios from 'axios';

const url = "https://post-system-api.herokuapp.com";

const api = axios.create({
    baseURL: url,
    timeout: 1000,
});

export default api;
