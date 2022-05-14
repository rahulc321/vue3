import axios from 'axios';

const token = localStorage.getItem('token');
//const token = 'abc';
//alert(token);
const instance = axios.create({
    baseURL: 'https://admin.ecotime.my/api',
    //baseURL: 'https://upskill-edukators.com/public/ecotime/api/auth',
    //baseURL: 'http://127.0.0.1:8000/api',
    headers: {
        Authorization: `Bearer ${token}`,
	withCredentials: false  
    }
})

instance.interceptors.response.use(function (response) {
   // console.log(response);
    // Any status code within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
}, function (error) {
   // console.log(error);
    // Any status codes outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

export default instance;
