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
          <div v-if="errors.name" class="invalid-feedback">Name is required</div>
				</div>
				<div class="flex flex-col">
					<label for="email"> Email <span class="text-red-600">*</span></label>
					<input class="rounded border-gray-300" type="email" id="email" name="email" placeholder="abc@gmail.com" v-model="post.email">
          <div v-if="errors.email" class="invalid-feedback">Email is required</div>
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
        <div v-if="errors.password" class="invalid-feedback">Password is required</div>
        <div v-if="errors.passwordeight" class="invalid-feedback">Password should be greater 8 character!</div>
				<p class="ermsg"></p>
				</div>

				<div class="flex flex-col">
					<label for="profile_type"> Profile type <span class="text-red-600">*</span></label>
					<select class="rounded-md border-gray-300" name="profile_type" id="profile_type" v-model="post.profile_type">
						<option value="student">Student</option>
						<option value="Job Seeker">Job Seeker</option>
					</select>
          <div v-if="errors.profile_type" class="invalid-feedback">Profile Type is required</div>
				</div>

				<div class="flex flex-col">
					<p>
						Already have an account? 
						 <router-link to="/login"><a href="javascript:;" class="text-dark-blue font-medium">Log in</a></router-link>
					</p>

					<div class="mt-6 w-full flex space-x-3">
						<!-- <button class="py-3 px-8 tablet:px-16 font-medium text-gray-700 border border-gray-300 rounded-md" type="reset">Reset</button> -->
						<button  type="submit" class="py-3 px-16 tablet:px-16 font-medium bg-dark-blue text-gray-100 text-gray shadow-lg rounded-md">Register</button>
						<p  v-if="isHidden" style="color:green;    font-size: 15px;">Please Wait...<i class="fa fa-spinner fa-spin" style="font-size:24px"></i></p>
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

import auth from './auth'
import $ from 'jquery'




export default {
  name: 'Register',
 props: {

  },
   data(){
    return {
      errors:[],
    	post:{
    		name:'',
    		email:'',
    		password:null,
    		profile_type:''
    	},
      isHidden: false,
     
  	}
   },methods:{
   	check(){
   		//console.log(this.post.cpassword)

 
   		if(this.post.cpassword != this.post.password){
        this.errors.password = false;
   			$('.ermsg').html("Password and Confirm Password should be same").css('color','red');
   			$('.rounded-md').hide();
   		}else{
   			$('.ermsg').html(" ")
   			$('.rounded-md').show();
   		}
   	},
   	register(e){
      e.preventDefault();
      var tost = this.$toast;
   		
   		 this.errors=[];
       if(!this.post.name){
        this.errors.name = true;
        this.errors.push('Name field is required!.');
       } 
       if(!this.post.email){
        this.errors.email = true;
        this.errors.push('Email field is required!.');
         
       }
       if(!this.post.password){
        this.errors.password = true;
        this.errors.push('Password field is required!.');
         
       }
       if(!this.post.cpassword){
        this.errors.push('Confirm Password field is required!.');
         
       }
       if(!this.post.profile_type){
        this.errors.profile_type = true;
        this.errors.push('Profile type field is required!.');
         
       }
       //console.log('>>>>>>>',(this.post.cpassword).length);
       if(this.post.password !=null){
       if(this.post.cpassword.length < 8){
        this.errors.passwordeight = true;
        this.errors.push('Password should be greater 8 character!.');
         
       }
      }

       if(this.errors.length){
        $.each(this.errors, function (key, val) {
           // tost.warning('🙃 '+val+' !!');
        });
        return
       }

       this.isHidden =true;
   			var data = {
   				"name":this.post.name,
   				"email":this.post.email,
   				"password":this.post.password,
   				"profile_type":this.post.profile_type
   			}
   			console.log(this.post.profile_type);
   		// this.$toast.success("success");
   		auth.post('register',data).then((response) => {
   		
   		//$('.plswait').hide();
        this.isHidden =false;
        if(response.data.status==false){
        	
        	//console.log(response);
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
   		 
   		
   	}
   }
}
</script>