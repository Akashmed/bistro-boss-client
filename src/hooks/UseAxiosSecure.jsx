import axios from "axios";
import UseAuth from '../hooks/UseAuth';
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: "http://localhost:5000"
});

const UseAxiosSecure = () => {
    const {logOut} = UseAuth();
    const navigate = useNavigate();
    
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token');
        config.headers.authorization = `Bearer ${token}`;
        return config;
    }, function (error) {
        return Promise.reject(error);
    })

    //intercepts 401 , 403 status
    axiosSecure.interceptors.response.use(function (response) {
        return response;
    },async (error) => {
        const status = error.response.status;
        if (status === 401 || status === 403){
           await logOut();
           navigate('/login');
        }
        return Promise.reject(error);
    })
    return axiosSecure;
};

export default UseAxiosSecure;