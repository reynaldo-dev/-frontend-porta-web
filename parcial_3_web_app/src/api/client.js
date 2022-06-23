import axios from "axios";
import nProgress from "nprogress";

nProgress.configure({showSpinner: false});

const http = axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL,
    headers: {
        'Content-type': 'application/json'
    }
})

http.interceptors.request.use((config) => {
    nProgress.start();
    return config;
}, (Error) => {
    nProgress.done();
    return Promise.reject(Error);
})


http.interceptors.response.use((config) => {
    nProgress.done();
    return config;
}, (Error) => {
    nProgress.done();
    return Promise.reject(Error);
})

export default http;