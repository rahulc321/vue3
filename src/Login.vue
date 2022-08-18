<template>
<!-- For Loader -->
<loading v-model:active="loading" :can-cancel="false" />
<!-- For Loader -->


<body class="font-sans min-h-screen h-full w-full bg-login bg-cover bg-blend-soft-light bg-[#12c2e9] relative before:absolute before:top-0 before:left-0 before:min-h-screen before:w-full before:h-full before:mix-blend-multiply before:bg-gradient-to-t before:from-[#2d6de9] before:to-[#12c2e9]">
    <div class="container isolate flex min-h-screen justify-center items-center">

        <div class="max-w-lg min-h-xl w-full mx-auto p-6 tablet:p-16 desktop:p-24 rounded-lg bg-white flex flex-col items-center justify-center">
            <a href="./index.html">
                <img src="./assets/images/logo.svg" alt="">
            </a>
            <p class="text-2xl font-medium text-light-blue my-10">Login</p>
            <form class="flex flex-col space-y-6 w-full" method="post" @submit.prevent="login">
                <div class="flex flex-col">
                    <label for="email"> Email <span class="text-red-600">*</span></label>
                    <input class="rounded border-gray-300" type="text" id="email" name="email" placeholder="Email" v-model="post.email">
                     <div v-if="errors.email" class="invalid-feedback">Email is required</div>
                </div>
                <div class="flex flex-col">
                    <label for="email"> Password <span class="text-red-600">*</span></label>
                    <input class="rounded border-gray-300" type="password" id="password" name="password" placeholder="********" v-model="post.password">
                    <div v-if="errors.password" class="invalid-feedback">Password is required</div>
                </div>
                <div class="flex flex-col">
                    <router-link to="/forgot-password"><a class="text-light-blue" href="javascript:;"> Forgot Password?</a></router-link>
                    <p>
                        Don't have an account?
                        <router-link to="/register"><a class="text-dark-blue font-medium" href="javascript:;">Register now</a></router-link>
                    </p>

                    <div class="mt-6 w-full flex space-x-3">
                        <button type="submit" class="py-3 px-16 bg-dark-blue font-medium text-gray-100 text-gray shadow-lg rounded-md">Log in</button>
                        
                    </div>
                </div>
            </form>
        </div>
    </div>

</body>
</template>

<style type="text/css">
  .invalid-feedback{
    color: red;
  }
</style>

<script>
import axios from 'axios'
import auth from './auth'
import Loading from 'vue-loading-overlay';

export default {

    name: 'Login',
    props: {},
    components: {
        Loading
    },
    data() {
        return {
            errors:[],
            post: {
                email: '',
                password: '',
            },
            loading: false

        }
    },
    methods: {
        login(e) {
                this.loading = true;
                this.errors=[];
                if(!this.post.email){
                this.errors.email = true;
                this.errors.push('email is required!.');
                this.loading = false;
                }

                if(!this.post.password){
                this.errors.password = true;
                this.loading = false;
                this.errors.push('password field is required!.');
                }

                if(this.errors.length > 0){
                return false;
               }
               //console.log(this.errors.length);

                var data = {
                    "email": this.post.email,
                    "password": this.post.password
                }

                
                auth.post('login', data)
                    .then(response => {
                        this.loading = false;
                        if (response.data.status == true) {
                            this.$toast.success(response.data.message);
                            // Store Token
                            localStorage.setItem('token', response.data.data.access_token);
                            localStorage.setItem('name', response.data.data.name);
                            localStorage.setItem('email', response.data.data.email);
                            window.location.href = "/"
                        }
                    })
                    .catch(error => {
                        this.loading = false;
                        this.$toast.error(error.response.data.message);
                    });

             

        }
    },
    mounted() {
        axios.get('https://admin.ecotime.my/api/adminLogin').then((response) => {
            console.log(response.data)
        })
    }
}
</script>
