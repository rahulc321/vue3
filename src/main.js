import { createApp } from 'vue'
//import App from './App.vue'
import App from './App.vue'
import router from './route'
import './index.css'
import Toaster from "@meforma/vue-toaster";
import axios from 'axios'
import VueAxios from 'vue-axios'

const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

const myarrayv = [ {name:"abc"}]
// axios.defaults.baseURL = 'https://api.example.com';
//  console.log(axios);
createApp(App).use(router).use(Toaster).use(VueAxios, axios).mount('#app')



