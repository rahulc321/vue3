<template>
	<header class="container flex justify-between items-center mt-8">
		<!-- Logo -->
		<div class="w-1/2 tablet:w-1/4">
			<router-link to="/"><a href="javascript:;">
				<img class="w-36 h-6 tablet:w-52 tablet:h-8 desktop:max-w-60 desktop:h-9" src="../assets/images/logo.svg" alt="">
			</a>
			</router-link>
		</div>
		<!-- Navigation -->
		<nav class="space-x-4 desktop:space-x-8 ml-auto mr-4 desktop:mr-8 items-center hidden tablet:flex">
			<router-link to="/"><a href="javascript:;" class="text-dark-blue">Home</a></router-link>
			<a href="#" class="">About us</a>
			<router-link to="/plans"><a href="javascript:;" class="">Plans</a></router-link>
		</nav>
		<nav v-if="token==0" class="flex space-x-2 tablet:space-x-4 desktop:space-x-6 items-center">
			<router-link to="/register"><a href="javascript:;" class="hidden tablet:block py-3 px-6 text-dark-blue shadow-lg border border-gray-50 rounded-md">Register</a></router-link>
			 <router-link to="/login"><a href="javascript:;" class="py-3 px-6 bg-dark-blue text-gray-100 text-gray shadow-lg rounded-md">Login</a>
			 </router-link>


			<svg class="tablet:hidden" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M5.25 9.33301H22.75" stroke="#212121" stroke-width="1.75" stroke-linecap="round"/>
				<path d="M5.25 14H22.75" stroke="#212121" stroke-width="1.75" stroke-linecap="round"/>
				<path d="M5.25 18.667H22.75" stroke="#212121" stroke-width="1.75" stroke-linecap="round"/>
			</svg>
		</nav>

		<nav v-if="token==1" class="flex space-x-2 tablet:space-x-4 desktop:space-x-6 items-center">
			 <router-link to="/dashboard"><a href="javascript:;" class="text-gray-600 leading-4 text-sm font-semibold">Dashboard</a></router-link>
			<div class="relative"> 
				<img class="rounded-full w-6 h-6 tablet:h-12 tablet:w-12 imgh" :src="image" alt="" onerror="this.src='https://i.ibb.co/wrKHWJ4/avatar-full.png'">
			</div>
		</nav>

	</header>
	<!--===============Header================-->


</template>


<script>
import auth from '../auth'
//localStorage.removeItem("token");
const token = localStorage.getItem('token');
const EXPIRE_TIME = 5000*60*60;
setTimeout(function() {
	//alert();
	window.location.href = "/";
    localStorage.removeItem('token');
}, EXPIRE_TIME); // after an hour it will delete the data
if(token==null){
	var tkn = 0;
}else{
	var tkn = 1;
}
// alert(token);
export default {
  name: 'Header',
  components: {
   
     
  },data(){
  		return {
  			"token":tkn,
  			"image":'',
  		}
  },mounted(){
  	if(tkn ==1){
  	 auth.get('v1/user').then((response) => {
             this.image = 'https://app.thecareertrail.com/images/'+response.data.data[0].image;
 
        })

  	}
  }
}
</script>