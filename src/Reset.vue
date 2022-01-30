<template>
   <body class="font-sans min-h-screen h-full w-full bg-login bg-cover bg-blend-soft-light bg-[#12c2e9] relative before:absolute before:top-0 before:left-0 before:min-h-screen before:w-full before:h-full before:mix-blend-multiply before:bg-gradient-to-t before:from-[#2d6de9] before:to-[#12c2e9]">
	<div class="container isolate flex min-h-screen justify-center items-center">
		<div class="max-w-lg min-h-3xl w-full mx-auto p-6 tablet:p-16 desktop:p-24 rounded-lg bg-white flex flex-col items-center justify-center">
			<a href="./index.html">
				<img src="./assets/images/logo.svg" alt="">
			</a>
			<p class="text-2xl font-medium text-light-blue my-10">Reset Password</p>
			<form ref="anyName" class="flex flex-col space-y-6 w-full" @submit="forgot">
				<div class="flex flex-col">
					<p class="text-base leading-5">Enter the email address accociated with your accound and we'll send an email with instructoins to reset your password.</p>
				</div>
				<!-- <div class="flex flex-col">
					<label for="email"> Email <span class="text-red-600">*</span></label>
					<input class="rounded border-gray-300" type="email" id="email" name="email" placeholder="example.com" v-model="post.email">
				</div>
 -->
				<div class="flex flex-col">
					<label for="email"> Password <span class="text-red-600">*</span></label>
					<input class="rounded border-gray-300" type="text" id="email" name="password" placeholder="Password" v-model="post.password" v-on:keyup="check">
				</div>

				<div class="flex flex-col">
					<label for="email">Confirm Password <span class="text-red-600">*</span></label>
					<input class="rounded border-gray-300" type="text" id="email" name="password" placeholder="Password" v-model="post.cpassword" v-on:keyup="check">
					<p class="ermsg">{{message}}</p>
					
				</div>

				<div class="flex flex-col">
					<div class="mt-6">
						<button  v-if="!isHidden" type="submit" class="py-3 px-16 font-medium bg-dark-blue text-gray-100 text-gray shadow-lg rounded-md">Send →</button>
					</div>
				</div>
			</form>
		</div>
	</div>
 
</body>

	
</template>
<style type="text/css">
	.ermsg{
		color: red
	}
</style>
<script>
import auth from './auth'

export default {
    name: 'Forgot',
	 props: {

	  },
	  data(){
	  	return{
	  		post:{
	  			"password":null
	  			
	  		},
	  		message: "",
	  		isHidden: false
	  	}
	  },methods:{

	  	check(){
   		//console.log(this.post.cpassword)
   		 
   		if(this.post.cpassword != this.post.password){
   			this.message ='Password and Confirm Password should be same.';
   			this.isHidden =true;
   		}else{
   			this.message ='';
   			this.isHidden =false;
   		}
   		},

	  	forgot(e){

	  		var data = {
   				"email":this.$route.query.email, 
   				"password":this.post.password, 
   				"password_confirmation":this.post.cpassword, 
   				"token":this.$route.query.token, 
   			}


	  		if(this.post.password ==null){
	  			this.$toast.error('Both field are required !');
	  		}else{
	  		 auth.post('reset-password',data).then((response) => {
	  		 	//console.log(response.data.data.temp_token);
	  		 	this.$toast.success(response.data.message);
	  		 	this.$refs.anyName.reset();
	        	this.$router.push('/login');
	        	return false;
	  		 }).catch((error) => {
			    
			    this.$toast.error(error.response.data.message);
			    
			});
	  		}
	  		e.preventDefault();
	  	}
	  }
	}

</script>