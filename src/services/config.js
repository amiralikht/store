import axios from "axios";

const API = axios.create({baseURL:"https://fakestoreapi.in/api"});

API.interceptors.response.use(
    (response) =>response.data, 
    (error) => Promise.reject(error)
)

API.interceptors.request.use(
    (request)=> {
        // request.headers.set('x-rapidapi-key', '11cab23b26msh23dd9e8a01cc306p1e7446jsn8941a396b26a');
        // request.headers.set('x-rapidapi-host', 'real-time-amazon-data.p.rapidapi.com');
        // request.params.set('')
        return request;
    },
    (error) => Promise.reject(error)
)

export default API;