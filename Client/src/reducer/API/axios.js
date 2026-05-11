import axios from "axios";

const API = axios.create({
    // baseURL: "http://localhost:5000/api", // change in production
    baseURL:"/api",
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true, // for cookies if needed
});

export default API;