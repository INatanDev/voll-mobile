import axios from "axios";

const api = axios.create({
    baseURL: "http://10.120.124.44:3000"
})

export default api;