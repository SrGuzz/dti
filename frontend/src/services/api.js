import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:8789/api',
});

export default api;
