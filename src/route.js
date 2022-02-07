import {
    createRouter,
    createWebHashHistory,
    createWebHistory
} from 'vue-router'
import Login from './Login.vue'
import Register from './Register.vue'
import Plans from './Plans.vue'
import Home from './Home.vue'
import App from './App.vue'
import Forgot from './Forgot.vue'
import Dashboard from './Dashboard.vue'
import Reset from './Reset.vue'
import ChangePass from './ChangePass.vue'


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/forgot-password',
        name: 'Forgot Password',
        component: Forgot
    },
    {
        path: '/reset-password',
        name: 'Reset Password',
        component: Reset
    },
    {
        path: '/plans',
        name: 'Plans',
        component: Plans
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/change-password',
        name: 'Change Password',
        component: ChangePass
    }
]

// const router = createRouter({
//     history: createWebHashHistory(),
//     routes
// })

const router = createRouter({
  history: createWebHistory("/"),
  routes
})
export default router