import axios from 'axios'
import router from 'next/router';
import { deAuthenticateAction } from '../redux/actions/auth';
import { store } from '../redux/store';
import { getCookie } from '../utils/cookies';


const defaultUrl = 'https://riqr-v1.herokuapp.com/api/';
const instance = axios.create({
    withCredentials: true,
    baseURL: defaultUrl,
})


instance.interceptors.request.use((config:any) => {
    const token = getCookie('access');
    if(token) {
        config.headers.Authorization =  token ? `Bearer ${token}` : '';
    }
    return config;
})

instance.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    if (error.response?.status === 403) {
        store.dispatch(deAuthenticateAction());
        router.push('/');
    }
    return Promise.reject(error);
});

export default instance;