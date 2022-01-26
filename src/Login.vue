<template>
   <body class="font-sans min-h-screen h-full w-full bg-login bg-cover bg-blend-soft-light bg-[#12c2e9] relative before:absolute before:top-0 before:left-0 before:min-h-screen before:w-full before:h-full before:mix-blend-multiply before:bg-gradient-to-t before:from-[#2d6de9] before:to-[#12c2e9]">
	<div class="container isolate flex min-h-screen justify-center items-center">

		<div class="max-w-lg min-h-xl w-full mx-auto p-6 tablet:p-16 desktop:p-24 rounded-lg bg-white flex flex-col items-center justify-center">
			<a href="./index.html">
				<img src="./assets/images/logo.svg" alt="">
			</a>
			<p class="text-2xl font-medium text-light-blue my-10">Login</p>
			<form class="flex flex-col space-y-6 w-full" method="post" @submit="login">
				<div class="flex flex-col">
					<label for="email"> Email <span class="text-red-600">*</span></label>
					<input class="rounded border-gray-300" type="text" id="email" name="email" placeholder="Email" v-model="post.email" >
				</div>
				<div class="flex flex-col">
					<label for="email"> Password <span class="text-red-600">*</span></label>
					<input class="rounded border-gray-300" type="password" id="password" name="password" placeholder="********" v-model="post.password">
				</div>
				<div class="flex flex-col">
					 <router-link to="/forgot-password"><a class="text-light-blue" href="javascript:;"> Forgot Password?</a></router-link>
					<p>
						Don't have an account? 
						 <router-link to="/register"><a class="text-dark-blue font-medium" href="javascript:;">Register now</a></router-link>
					</p>

					<div class="mt-6">
						<button type="submit" class="py-3 px-16 bg-dark-blue font-medium text-gray-100 text-gray shadow-lg rounded-md">Log in</button>
            <p class="plswait" style="display: none;color:green">Please Wait...</p>
					</div>
				</div>
			</form>
		</div>
	</div>
 
</body>
	
</template>

<script>

import axios from 'axios'
import auth from './auth'
import $ from 'jquery'

 
export default {

  name: 'Login',
  props: {

  },
   
   data(){
    return {
    	post:{
    		emai:'',
    		Password:'',
    	}
     
  	}
   },methods:{
   	login(e){

   		if(this.post.email == undefined || this.post.password == undefined){
   			//alert();
   			// console.log('required');
   			this.$toast.warning("Email or password both fields are required");
   			
   		}else{
   			var data = {
   				"email":this.post.email,
   				"password":this.post.password
   			}
      $('.plswait').show();

   		// this.$toast.success("success");
   		axios.post('https://dev-career-traill-37xvv.ondigitalocean.app/api/login',data).then((response) => {
        $('.plswait').hide();
        //console.log(response.data.message)
        if(response.data.status==true){
         // console.log(response.data.data.access_token);
          // Store Token
          localStorage.setItem('token',response.data.data.access_token);
          const token = localStorage.getItem('token');
          //const token = 'abc';
         // alert(token);
          localStorage.setItem('name',response.data.data.name);
          localStorage.setItem('email',response.data.data.email);
        	this.$toast.success('You have Successfully Login');
          //this.$router.push('/dashboard');
          window.location.href = "/"
        }else{
          this.$toast.error(response.data.message);
        }

      }).catch((error) => {
          this.$toast.error("Some went Wrong !!");
          $('.plswait').hide();
        })
   		 
   		}
		 


   		e.preventDefault();
   	}
   },
   mounted(){
    
   	axios.get('https://api.thecareertrail.com/api/v1/exams').then((response) => {
        console.log(response.data)
      })
 
   }
    }

</script>