<template>
   <body class="font-sans min-h-screen h-full w-full bg-login bg-cover bg-blend-soft-light bg-[#12c2e9] relative before:absolute before:top-0 before:left-0 before:min-h-screen before:w-full before:h-full before:mix-blend-multiply before:bg-gradient-to-t before:from-[#2d6de9] before:to-[#12c2e9]">
	<div class="container isolate flex min-h-screen justify-center items-center">
		<div class="max-w-lg min-h-3xl w-full mx-auto p-6 tablet:p-16 desktop:p-24 rounded-lg bg-white flex flex-col items-center justify-center">
			<a href="./index.html">
				<img src="./assets/images/logo.svg" alt="">
			</a>
			<p class="text-2xl font-medium text-light-blue my-10">Register</p>
			<form ref="anyName" class="flex flex-col space-y-6 w-full" method="post" @submit="register">
				<div class="flex flex-col">
					<label for="name"> Name <span class="text-red-600">*</span></label>
					<input class="rounded border-gray-300" type="text" id="name" name="name" placeholder="Name" v-model="post.name">
				</div>
				<div class="flex flex-col">
					<label for="email"> Email <span class="text-red-600">*</span></label>
					<input class="rounded border-gray-300" type="email" id="email" name="email" placeholder="abc@gmail.com" v-model="post.email">
				</div>
				<div class="flex justify-between items-center gap-2">
					<div class="flex flex-col w-1/2">
						<label for="password"> Password <span class="text-red-600">*</span></label>
						<input class="rounded border-gray-300" type="password" id="password" name="password" placeholder="********" autocomplete="new-password" v-model="post.cpassword" v-on:keyup="check">
					</div>
					<div class="flex flex-col w-1/2">
						<label for="password-conf"> Confirm Password <span class="text-red-600">*</span></label>
						<input class="rounded border-gray-300" type="password" id="password-conf" name="password" placeholder="********" autocomplete="new-password" v-model="post.password" v-on:keyup="check">
					</div>
					
				</div>
				<div class="flex flex-col">
				<p class="ermsg"></p>
				</div>

				<div class="flex flex-col">
					<label for="profile_type"> Profile type <span class="text-red-600">*</span></label>
					<select class="rounded-md border-gray-300" name="profile_type" id="profile_type" v-model="post.profile_type">
						<option value="student">Student</option>
						<option value="student">Job Seeker</option>
					</select>
				</div>

				<div class="flex flex-col">
					<p>
						Already have an account? 
						 <router-link to="/login"><a href="javascript:;" class="text-dark-blue font-medium">Log in</a></router-link>
					</p>

					<div class="mt-6 w-full flex space-x-3">
						<!-- <button class="py-3 px-8 tablet:px-16 font-medium text-gray-700 border border-gray-300 rounded-md" type="reset">Reset</button> -->
						<button type="submit" class="py-3 px-12 tablet:px-16 font-medium bg-dark-blue text-gray-100 text-gray shadow-lg rounded-md">Register</button>
						<p class="plswait" style="display: none;color:green">Please Wait...</p>
					</div>
				</div>
			</form>
		</div>
	</div>
 
</body>
	
</template>
<script>

import auth from './auth'
import $ from 'jquery'


export default {
  name: 'Register',
 props: {

  },
   data(){
    return {
    	post:{
    		name:'',
    		email:'',
    		password:'',
    		profile_type:''
    	}
     
  	}
   },methods:{
   	check(){
   		console.log(this.post.cpassword)

   		if(this.post.cpassword != this.post.password){
   			$('.ermsg').html("Password and Confirm Password should be same").css('color','red');
   			$('.rounded-md').hide();
   		}else{
   			$('.ermsg').html(" ")
   			$('.rounded-md').show();
   		}
   	},
   	register(e){

   		$('.plswait').show();
   		// if(this.post.email == undefined || this.post.password == undefined){
   		// 	this.$toast.warning("Email or password both fields are required");
   			
   		// }else{
   			var data = {
   				"name":this.post.name,
   				"email":this.post.email,
   				"password":this.post.password,
   				"profile_type":this.post.profile_type
   			}
   			console.log(this.post.profile_type);
   		// this.$toast.success("success");
   		auth.post('register',data).then((response) => {
   		var tost = this.$toast;
   		$('.plswait').hide();
        if(response.data.status==false){
        	
        	console.log(response);
        	$.each(response.data.message, function (key, val) {
        		tost.info('🙃 '+val+' !!');
    		});

        }else{
        	tost.success('Congratulations, You have Successfully Register.');
        	this.$refs.anyName.reset();
        	var data ={};
        	this.$router.push('/login');
        }
        
      	})
   		 
   		e.preventDefault();
   	}
   }
}
</script>