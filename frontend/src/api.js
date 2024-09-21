import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api', // Adjust as needed
    headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token') ? `Bearer ${localStorage.getItem('token')}` : '',
    },
});

export default api;
