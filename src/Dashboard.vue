<template>
<!-- For Loader -->
<loading v-model:active="loaderOne" :can-cancel="false" />
<!-- For Loader -->

<Header />


<!--===============Intro=================-->
	<!--===============breadcrumb=================-->
	<section class="container">
		<nav class="flex mt-4 desktop:mt-9" aria-label="Breadcrumb">
			<ol class="inline-flex items-center space-x-1 desktop:space-x-3">
			  <li class=""> <a href="#" class="text-gray-500 hover:text-gray-700"> Home </a> </li>
			  <li class="flex items-center">
				  <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
				  <a href="#" class="text-gray-600 hover:text-gray-700 ml-1 desktop:ml-2 text-sm font-medium">My Dashboard</a>
			  </li>
			</ol>
		  </nav>
	</section>

	<!--===============Content=================-->
	<section class="container mt-4">
		<!-- Content goes here -->
		<div class="flex tablet:bg-white tablet:rounded-2xl">
			<!-- Dahboard menu -->
			<div class="hidden tablet:block tablet:rounded-l-2xl bg-trail-tail pl-5 py-14 w-64">
				<nav class="flex flex-col gap-y-8">
					<a class="flex gap-x-6 items-center text-gray-500 font-normal" href="#my_career">
						<!-- icon -->
						<svg class="w-5" width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M6.76471 0C6.49412 0 6.22353 0.298508 6.22353 0.895522V3.8806H0.811765C0.270588 3.8806 0 4.1791 0 4.47761V6.26866C1.89412 9.55224 4.6 10.7463 8.38824 11.3433V10.7463C8.38824 10.4478 8.65882 9.85075 9.2 9.85075H14.0706C14.3412 9.85075 14.8824 10.1493 14.8824 10.7463V11.6418C18.9412 11.0448 20.8353 9.85075 23.2706 6.86567V4.47761C23.2706 4.1791 23 3.58209 22.4588 3.58209H17.0471V0.597015C16.7765 0.298507 16.5059 0 15.9647 0H6.76471ZM7.57647 1.49254H15.1529V3.8806H7.57647V1.49254ZM0 8.95522V19.403C0 19.7015 0.270588 20.2985 0.811765 20.2985H22.1882C22.4588 20.2985 23 20 23 19.403V8.95522C20.5647 11.6418 18.4 12.5373 14.6118 13.1343V14.3284C14.6118 14.9254 14.3412 14.9254 14.3412 15.2239H14.0706H9.2H8.92941C8.92941 15.2239 8.92941 15.2239 8.65882 15.2239V13.1343C4.87059 12.8358 2.16471 11.3433 0 8.95522ZM9.74118 11.6418V13.7313H12.9882V12.5373V11.6418H9.74118Z" fill="#003A9B"/>
						</svg>							
						My Career
					</a>
					<a class="flex gap-x-6 items-center text-gray-500 font-normal" href="#">
						<!-- icon -->
						<svg class="w-5" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M13.71 2.9062C14.0845 2.63273 14.5363 2.48535 15 2.48535C15.4638 2.48535 15.9155 2.63273 16.29 2.9062L25.5663 9.6762C26.7875 10.5662 26.1588 12.4975 24.6488 12.5012H5.35001C3.84001 12.4975 3.21251 10.5662 4.43251 9.6762L13.7088 2.9062H13.71ZM16.25 7.81245C16.25 7.48093 16.1183 7.16299 15.8839 6.92857C15.6495 6.69415 15.3315 6.56245 15 6.56245C14.6685 6.56245 14.3506 6.69415 14.1161 6.92857C13.8817 7.16299 13.75 7.48093 13.75 7.81245C13.75 8.14397 13.8817 8.46191 14.1161 8.69633C14.3506 8.93075 14.6685 9.06245 15 9.06245C15.3315 9.06245 15.6495 8.93075 15.8839 8.69633C16.1183 8.46191 16.25 8.14397 16.25 7.81245Z" fill="#003A9B"/>
							<path d="M14.0625 20H11.5625V13.75H14.0625V20Z" fill="#003A9B"/>
							<path d="M18.4375 20H15.9375V13.75H18.4375V20Z" fill="#003A9B"/>
							<path d="M23.125 20H20.3125V13.75H23.125V20Z" fill="#003A9B"/>
							<path d="M23.4375 21.25H6.5625C5.81658 21.25 5.10121 21.5463 4.57376 22.0738C4.04632 22.6012 3.75 23.3166 3.75 24.0625V24.6875C3.75 25.2063 4.17 25.625 4.6875 25.625H25.3125C25.5611 25.625 25.7996 25.5262 25.9754 25.3504C26.1512 25.1746 26.25 24.9361 26.25 24.6875V24.0625C26.25 23.3166 25.9537 22.6012 25.4262 22.0738C24.8988 21.5463 24.1834 21.25 23.4375 21.25V21.25Z" fill="#003A9B"/>
							<path d="M9.6875 20H6.875V13.75H9.6875V20Z" fill="#003A9B"/>
						</svg>
						My College
					</a>
					<router-link to="/exam">	
					<a class="flex gap-x-6 items-center text-gray-500 font-normal" href="javascript:;">
						<!-- icon -->
						<svg class="w-5" width="23" height="28" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.97 25.61"><path d="M11.37,21.54A3.91,3.91,0,0,1,9.56,20a4.34,4.34,0,0,0-.84-.9l-.09-.06L5.86,24.73l3.3-.23L11.11,27l2.82-5.78-.23.07a5.67,5.67,0,0,1-1.62.31A2.44,2.44,0,0,1,11.37,21.54Z" transform="translate(-4.51 -1.42)" style="fill:#003a9b"/><path d="M21.28,19.13a4.34,4.34,0,0,0-.84.9,3.91,3.91,0,0,1-1.81,1.51,4.05,4.05,0,0,1-2.33-.21l-.23-.07L18.89,27l1.95-2.54,3.3.23-2.77-5.66Z" transform="translate(-4.51 -1.42)" style="fill:#003a9b"/><path d="M25.49,10.93a2.84,2.84,0,0,0-.73-1.42A5,5,0,0,1,24,8.17a5,5,0,0,1-.2-1.58,2.8,2.8,0,0,0-.27-1.51,3.18,3.18,0,0,0-1.44-.72,6,6,0,0,1-1.52-.65,5.55,5.55,0,0,1-1.11-1.16,2.88,2.88,0,0,0-1.18-1.08,3.1,3.1,0,0,0-1.57.21A5.82,5.82,0,0,1,15,2a6,6,0,0,1-1.68-.32,4.92,4.92,0,0,0-1.24-.26,1.13,1.13,0,0,0-.32.05,2.88,2.88,0,0,0-1.18,1.08A5.55,5.55,0,0,1,9.47,3.71,6,6,0,0,1,8,4.36a3.18,3.18,0,0,0-1.44.72,2.8,2.8,0,0,0-.27,1.51A5,5,0,0,1,6,8.17a5,5,0,0,1-.8,1.34,2.84,2.84,0,0,0-.73,1.42,2.81,2.81,0,0,0,.73,1.42A5,5,0,0,1,6,13.69a5,5,0,0,1,.2,1.59,2.77,2.77,0,0,0,.27,1.5A3.09,3.09,0,0,0,8,17.5a6,6,0,0,1,1.52.66,5.76,5.76,0,0,1,1.11,1.15,3,3,0,0,0,1.18,1.09,3.07,3.07,0,0,0,1.56-.22A6,6,0,0,1,15,19.86a6,6,0,0,1,1.68.32,3.07,3.07,0,0,0,1.56.22,3,3,0,0,0,1.18-1.09,5.76,5.76,0,0,1,1.11-1.15,5.7,5.7,0,0,1,1.52-.66,3,3,0,0,0,1.43-.72,2.67,2.67,0,0,0,.28-1.5,5,5,0,0,1,.2-1.59,5,5,0,0,1,.8-1.34A2.81,2.81,0,0,0,25.49,10.93ZM15,18.28a7.56,7.56,0,0,1-7.75-7.35A7.57,7.57,0,0,1,15,3.58a7.57,7.57,0,0,1,7.75,7.35A7.56,7.56,0,0,1,15,18.28Z" transform="translate(-4.51 -1.42)" style="fill:#003a9b"/><path d="M15,4.78a6.32,6.32,0,0,0-6.48,6.15A6.32,6.32,0,0,0,15,17.08a6.33,6.33,0,0,0,6.48-6.15A6.33,6.33,0,0,0,15,4.78Z" transform="translate(-4.51 -1.42)" style="fill:#003a9b"/></svg>						
						My Exam
					</a>
					</router-link>	

					<!-- Seperator -->
					<div class="border-t-2 border-blue-200 -ml-5 w-64"></div>
					<router-link to="/change-password">	
					<a class="flex gap-x-6 items-center text-gray-500 font-normal" href="javascript:;">
						<!-- icon -->
						<svg class="w-5" width="23" height="28" viewBox="0 0 23 28" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M20.5655 11.8076H18.8518V7.04698C18.8518 3.16331 15.4914 0 11.3245 0C7.15762 0 3.76363 3.16331 3.76363 7.04698V11.8076H2.04983C0.907304 11.8076 0 12.6532 0 13.7181V26.1208C0 27.1857 0.907304 28.0313 2.04983 28.0313H20.5655C21.7081 28.0313 22.6154 27.1857 22.6154 26.1208V13.7181C22.6154 12.6532 21.7081 11.8076 20.5655 11.8076ZM6.61996 7.04698C6.61996 4.63535 8.737 2.66219 11.3245 2.66219C13.912 2.66219 16.029 4.63535 16.029 7.04698V11.8076H6.61996V7.04698ZM12.0302 20.2013V22.2685C12.0302 22.6443 11.6941 22.9262 11.3245 22.9262C10.9212 22.9262 10.6188 22.6443 10.6188 22.2685V20.2013C9.94674 19.9508 9.47628 19.3244 9.47628 18.604C9.47628 17.6644 10.3164 16.8814 11.3245 16.8814C12.3326 16.8814 13.1727 17.6644 13.1727 18.604C13.1727 19.3244 12.7023 19.9508 12.0302 20.2013Z" fill="#003A9B"/>
						</svg>
						Change Password 
					</a></router-link>
					<a @click="logout" class="flex gap-x-6 items-center text-gray-500 font-normal" href="javascript:;">
						<!-- icon -->
						<svg class="w-5" width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M17.25 14.375V11.5H10.0625V8.625H17.25V5.75L21.5625 10.0625L17.25 14.375ZM15.8125 12.9375V18.6875H8.625V23L0 18.6875V0H15.8125V7.1875H14.375V1.4375H2.875L8.625 4.3125V17.25H14.375V12.9375H15.8125Z" fill="#003A9B"/>
						</svg>
						Sign out
					</a>
				</nav>
			</div>
			<!-- Dashboard content -->
			<div class="w-full tablet:pl-9 tablet:pr-12 tablet:py-12 desktop:pl-16  desktop:py-9">

				<div class="txt">
					<p class="txt2"><span class="imp" style="color: red"><i class="fa fa-bullhorn" aria-hidden="true"></i>  Important</span> : For better matching results, please complete all the profile sections below and provide as much information as you can.</p>
					<br>
				</div>

				<!-- Avatar -->
				<div class="flex gap-x-10 items-center">
					<!-- <img class="rounded-full h-24 w-24 object-cover object-top" src="./assets/images/avatar_full.png" alt=""> -->
					<img class="rounded-full h-24 w-24 object-cover object-top" :src="image"  alt=""  onerror="this.src='https://i.ibb.co/wrKHWJ4/avatar-full.png'">
					 
					<input  class="text-base leading-5 bg-trail-tail border border-blue-200 px-6 py-2 rounded-md" type="file" name="" v-on:change="file">
				</div>

				<!-- Basic Information -->
				<div class="mt-10 w-full relative" x-data="{ showForm : true }">
					<h2 class="text-base text-dark-blue font-medium mb-7 desktop:text-xl">Basic Information  </h2>
					<button class="absolute top-0 right-0 dd1" v-on:click="click">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<circle cx="12" cy="12" r="11.5" fill="#DCF6FF" stroke="#95DCF4" stroke-linecap="round"/>
							<path d="M10.5038 15.5028L14.7278 11.2787L12.7215 9.27238L8.4974 13.4965C8.43924 13.5547 8.39793 13.6276 8.37785 13.7074L7.90967 16.0906L10.2924 15.6224C10.3724 15.6024 10.4456 15.561 10.5038 15.5028ZM16.0915 9.91511C16.2619 9.74463 16.3577 9.51344 16.3577 9.27238C16.3577 9.03133 16.2619 8.80014 16.0915 8.62966L15.3706 7.90875C15.2001 7.73832 14.9689 7.64258 14.7278 7.64258C14.4868 7.64258 14.2556 7.73832 14.0851 7.90875L13.3642 8.62966L15.3706 10.636L16.0915 9.91511Z" fill="#003A9B"/>
						</svg>						
					</button>

					<Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors }" v-if="form1" class="formstyle">
					<div class="flex justify-between items-center gap-2">

						 

						<div class="flex flex-col w-1/3 gap-y-1">
							<label for="name"> Name <span class="text-red-600">*</span></label>
							<Field class="rounded border-gray-300" type="text"   name="name" placeholder="Name" :class="{ 'is-invalid': errors.name }" value="{{user.name}}" v-model="post.name"></Field>
							<div class="invalid-feedback">{{errors.name}}</div>
						</div>
						<!--  -->
						

						 
						<!--  -->
						<div class="flex flex-col w-1/3 gap-y-1">
							<label for="name"> Email <span class="text-red-600">*</span></label>
							<Field class="rounded border-gray-300" type="email"   name="email" placeholder="abc.com" v-model="post.email"></Field>
							<div class="invalid-feedback">{{errors.email}}</div>
						</div>

						<div class="flex flex-col w-1/3 gap-y-1">
								<label for="profile_type"> Date of Birth <span class="text-red-600">*</span></label>
								<Field class="rounded border-gray-300" type="text" name="date_of_birth"   placeholder="DOB" v-model="post.date_of_birth" id="txtDate"></Field>
								<div class="invalid-feedback">{{errors.date_of_birth}}</div>
							</div>


						</div>
						 

						<div class="flex justify-between items-center gap-2">

						<div class="flex flex-col w-1/3 gap-y-1">
								<label for="profile_type"> Gender <span class="text-red-600">*</span></label>
								<Field as="select" class="rounded-md border-gray-300" name="gender" id="profile_type" v-model="post.gender">
								<option value="" selectted>Select</option>
									<option value="male">Male</option>
									<option value="female">Female</option>
									<option value="other">other</option>
								</Field>
								<div class="invalid-feedback">{{errors.gender}}</div>
							</div>

							<div class="flex flex-col w-1/3 gap-y-1">
								<label for="profile_type"> Citizenship <span class="text-red-600"> *</span></label>
								<Field as="select" class="rounded-md border-gray-300" name="nationality_id" v-model="post.nationality_id">
								<option value="" selectted>Select</option>
									<option v-for="nationalitie in nationalities" :value="nationalitie.id" :key="nationalitie.id">{{nationalitie.name}}</option>
									 
								</Field>
								<div class="invalid-feedback">{{errors.nationality_id}}</div>
							</div>
							<div class="flex flex-col w-1/3 gap-y-1">
								<label for="profile_type"> Select Applicable Category<span class="text-red-600"> *</span></label>
								<Field as="select" class="rounded-md border-gray-300" name="quota" v-model="post.quota">
								<option value="" selectted>Select</option>
									<option v-for="(value, key) in quota[0]" :value="key" :key="key">{{value}}</option>
								</Field>
								<div class="invalid-feedback">{{errors.quota}}</div>
							</div>
						</div>

						<div class="flex justify-between items-center gap-2">
						<div class="flex flex-col w-1/3 gap-y-1">
							<label for="name"> Phone <span class="text-red-600">*</span></label>
							<Field class="rounded border-gray-300" type="text"   name="phone" placeholder="9758463790" v-model="post.phone"></Field>
							<div class="invalid-feedback">{{errors.phone}}</div>
						</div>
						<div class="flex flex-col w-1/3 gap-y-1">
							<label for="name"> Profile Type <span class="text-red-600">*</span></label>
							<Field as="select" class="rounded-md border-gray-300" name="profile_type"  v-model="post.profile_type">
									<option value="" selectted>Select</option>
									<option value="student" selected="">Student</option>
									<option value="Job Seeker">Job Seeker</option>
									 
								</Field>
							<div class="invalid-feedback">{{errors.profile_type}}</div>
						</div>

						<div class="flex flex-col w-1/3 gap-y-1">
							<label for="profile_type"> Current Location<span class="text-red-600"> *</span></label>
								<Field as="select" class="rounded-md border-gray-300" name="location_id"  v-model="post.location_id">
								<option value="" selectted>Select</option>
									<option v-for="location in locations" :value="location.id" :key="location.state">{{location.state}}</option>
								</Field>
								<div class="invalid-feedback">{{errors.location_id}}</div>
						</div>
						
						</div>

						<div class="flex justify-between items-center gap-2">
						<label class="">Are you appearing /qualified Class 12 or Equivalent exam this year (Y/N)?<span class="text-red-600">*</span> </label>

						<Field as="select" class="rounded-md border-gray-300" name="is_current_12ex"  v-model="post.is_current_12ex">
									<option value="" selectted>Select</option>
									<option value="true">Yes</option>
									<option value="false">No</option>
									 
								</Field>
						
						 
						</div>
						<div class="invalid-feedback">{{errors.is_current_12ex}}</div>

						<div class="flex flex-col">		
							<div  class="mt-2 w-full flex space-x-3">
								<button style="height: 55px;" v-on:click="cancel" class="py-3 px-16 font-medium text-gray-700 border border-gray-300 rounded-md" type="button">Cancel</button>
								<button class="py-3 px-16 font-medium bg-dark-blue text-gray-100 text-gray shadow-lg rounded-md" type="submit">Save</button>
							</div>
						</div>
					</form>

					<dl v-if="formDetail1" class="divide-y"  x-show="!showForm">
						<div class="grid grid-cols-2 text-xs pb-3 pt-3.5 desktop:text-base">
							<dt class="font-light text-gray-400">Name</dt>
							<dd class="font-normal text-gray-500">{{user.name}}</dd>
						</div>
						<div class="grid grid-cols-2 text-xs pb-3 pt-3.5 desktop:text-base">
							<dt class="font-light text-gray-400">Email</dt>
							<dd class="font-normal text-gray-500">{{user.email}}</dd>
						</div>

						<div class="grid grid-cols-2 text-xs pb-3 pt-3.5 desktop:text-base">
							<dt class="font-light text-gray-400">Date of Birth</dt>
							<dd class="font-normal text-gray-500" v-if="user.date_of_birth != null">{{dob}}</dd>
						</div>

						<div class="grid grid-cols-2 text-xs pb-3 pt-3.5 desktop:text-base">
							<dt class="font-light text-gray-400">Gender</dt>
							<dd class="font-normal text-gray-500 upercase">{{user.gender}}</dd>
						</div>

						<div class="grid grid-cols-2 text-xs pb-3 pt-3.5 desktop:text-base">
							<dt class="font-light text-gray-400">Citizenship</dt>
							<dd class="font-normal text-gray-500 upercase">{{user.nationality_name}}</dd>
						</div>

						<div class="grid grid-cols-2 text-xs pb-3 pt-3.5 desktop:text-base">
							<dt class="font-light text-gray-400">Category</dt>
							<dd class="font-normal text-gray-500 upercase">{{user.quota}}</dd>
						</div>

						<div class="grid grid-cols-2 text-xs pb-3 pt-3.5 desktop:text-base">
							<dt class="font-light text-gray-400">Phone</dt>
							<dd class="font-normal text-gray-500">{{user.phone}}</dd>
						</div>

						<div class="grid grid-cols-2 text-xs pb-3 pt-3.5 desktop:text-base">
							<dt class="font-light text-gray-400">Profile Type</dt>
							<dd class="font-normal text-gray-500 upercase">{{user.profile_type}}</dd>
						</div>
						
						
						
						

						<div class="grid grid-cols-2 text-xs pb-3 pt-3.5 desktop:text-base">
							<dt class="font-light text-gray-400">Location</dt>
							<dd class="font-normal text-gray-500"><span class="location"></span></dd>
						</div>
						

						

						 
					  </dl>

					

				</div>

				<!-- Education & Career -->
				<div class="mt-10 w-full relative">
					<h2 class="text-base text-dark-blue font-medium  mb-7 desktop:text-xl">Education & Career</h2>
					<button class="absolute top-0 right-0" v-on:click="click1">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<circle cx="12" cy="12" r="11.5" fill="#DCF6FF" stroke="#95DCF4" stroke-linecap="round"/>
							<path d="M10.5038 15.5028L14.7278 11.2787L12.7215 9.27238L8.4974 13.4965C8.43924 13.5547 8.39793 13.6276 8.37785 13.7074L7.90967 16.0906L10.2924 15.6224C10.3724 15.6024 10.4456 15.561 10.5038 15.5028ZM16.0915 9.91511C16.2619 9.74463 16.3577 9.51344 16.3577 9.27238C16.3577 9.03133 16.2619 8.80014 16.0915 8.62966L15.3706 7.90875C15.2001 7.73832 14.9689 7.64258 14.7278 7.64258C14.4868 7.64258 14.2556 7.73832 14.0851 7.90875L13.3642 8.62966L15.3706 10.636L16.0915 9.91511Z" fill="#003A9B"/>
						</svg>						
					</button>


					<!-- Second step start -->
					<Form @submit="onSubmit2" v-if="form2" :validation-schema="schema2" v-slot="{ errors }" class="formstyle">
					<div class="flex justify-between items-center gap-2">

						 

						<div class="flex flex-col w-1/2 gap-y-1">
							<label for="name"> Last Qualifying Exam <span class="text-red-600">*</span></label>
							<Field as="select" class="rounded-md border-gray-300" name="qualifying_exam_id" v-model="last_qualifying_exam_id">
								<option value="" selectted>Select</option>
								<option  v-for="exam in exams" :value="exam.id" :key="exam.id">{{exam.name}}</option>
							 
								</Field>

								<div class="invalid-feedback">{{errors.qualifying_exam_id}}</div>
							 
						</div>
						<!--  -->

						<div class="flex flex-col w-1/2 gap-y-1">
							<label for="name">Exam Stream<span class="text-red-600"> *</span></label>
							<Field as="select" class="rounded-md border-gray-300" name="qualifying_exam_stream_id" v-model="last_qualifying_exam_stream_id">
								<option value="" selectted>Select</option>
								<option  v-for="stream in streams" :value="stream.id" :key="stream.id">{{stream.name}}</option>
							 
								</Field>

								<div class="invalid-feedback">{{errors.qualifying_exam_stream_id}}</div>
							 
						</div>
						 

						</div>


						<!--  -->
						<div class="flex justify-between items-center gap-2">
						<div class="flex flex-col w-1/2 gap-y-1">
								<label for="profile_type"> Score<span class="text-red-600"> *</span></label>
								<Field class="rounded border-gray-300" type="text"   name="score_in_grade" placeholder="A" v-model="score"></Field>
								<div class="invalid-feedback">{{errors.score_in_grade}}</div>
						</div>

						<div class="flex flex-col w-1/2 gap-y-1">
							<label for="name">Score Type<span class="text-red-600"> *</span></label>
							<Field as="select" class="rounded-md border-gray-300" name="score_type" v-model="score_type">
								<option value="" selected="">Select</option>
								<option value="grade" >grade</option>
							 
								</Field>
							<div class="invalid-feedback">{{errors.score_type}}</div>
							 
						</div>
						</div>
						<!--  -->

						 

						<div class="flex justify-between items-center gap-2">

						<div class="flex flex-col w-1/2 gap-y-1">
								<label for="profile_type"> current Career </label>
								<Field as="select" class="rounded-md border-gray-300" name="career_id"  v-model="current_career_id">
								<option value="" selectted>Select</option>
									<option v-for="carrer in careers" :value="carrer.id" :key="carrer.id">{{carrer.name}}</option>
									 
								</Field>
								 
								 <div class="invalid-feedback">{{errors.career_id}}</div>
							</div>


							<div class="flex flex-col w-1/2 gap-y-1">
								<label for="profile_type">Career Location Preference (Select two)</label>
								<Field as="select" class="rounded-md border-gray-300 cl"   name="preferred_college_locations_test" multiple="multiple">
									<option value="" hidden>Select</option>
									<option v-for="location in locations" :value="location.id" :key="location.id">{{location.state}}</option>
									 
								</Field>

								<div class="invalid-feedback">{{errors.preferred_college_locations_test}}</div>
								 
							</div>

							 
							 
						</div>


						<div class="flex justify-between items-center gap-2">

						<div class="flex flex-col w-1/2 gap-y-1">
								<label for="profile_type">College Location Preference (Select two)</label>
								<Field as="select" class="rounded-md border-gray-300 collegeLocation" id="collegeLocation"   name="multiple" multiple="multiple">
									 
									<option v-for="location in locations" :value="location.id" :key="location.id">{{location.state}}</option>
									 
								</Field>

								<div class="invalid-feedback"></div>
								 
							</div>


							<div class="flex flex-col w-1/2 gap-y-1">
								<label for="profile_type">Course Preference (Select multiple)</label>
								<Field as="select" class="rounded-md border-gray-300 cp"   name="states" multiple>
								<option v-for="course in courses" :value="course.id" :key="course.id">{{course.title}}</option>
									 
								</Field>
								 <div class="invalid-feedback"></div>
							</div>

							 
							 
						</div>

						<div class="flex justify-between items-center gap-2">

						<div class="flex flex-col w-1/2 gap-y-1">
								<label for="profile_type">Current Certification (Select multiple)</label>
								<Field as="select" class="rounded-md border-gray-300 cc" name="cc" multiple>
								<option v-for="certification in certifications" :value="certification.id" :key="certification.id">{{certification.name}}</option>
									 
								</Field>
								 <div class="invalid-feedback"></div>
							</div>


							<div class="flex flex-col w-1/2 gap-y-1">
								<label for="profile_type">Career Sector Preference</label>
								<Field as="select" class="rounded-md border-gray-300" name="sector_preference" v-model="sector_preference">
									<option value="" selected>Select</option>
									<option value="public">Public</option>
									<option value="private">Private</option>
									 
								</Field>
								 <div class="invalid-feedback">{{errors.sector_preference}}</div>
							</div>

							 
							 
						</div>

						


						 

						 
						<div class="flex flex-col">		
							<div class="mt-2 w-full flex space-x-3">
								<button style="height: 55px;" v-on:click="cancel2" class="py-3 px-16 font-medium text-gray-700 border border-gray-300 rounded-md" type="button">Cancel</button>
								<button class="py-3 px-16 font-medium bg-dark-blue text-gray-100 text-gray shadow-lg rounded-md" type="submit">Save</button>

								 
							</div>
						</div>
					</form>
					<!-- Second step start -->

					<dl class="divide-y">
						<div class="grid grid-cols-2 text-xs pb-3 pt-3.5 desktop:text-base">
							<dt class="font-light text-gray-400">Last Qualifying Exam</dt>
							<dd class="font-normal text-gray-500" v-if="last_qualifying_exam != null">{{last_qualifying_exam.name}}</dd>
						</div>
						<div class="grid grid-cols-2 text-xs pb-3 pt-3.5 desktop:text-base">
							<dt class="font-light text-gray-400">Exam Stream</dt>
							<dd class="font-normal text-gray-500" v-if="last_qualifying_exam_stream != null">{{last_qualifying_exam_stream.name}}</dd>
						</div>
						<div class="grid grid-cols-2 text-xs pb-3 pt-3.5 desktop:text-base">
							<dt class="font-light text-gray-400">Score</dt>
							<dd class="font-normal text-gray-500 upercase" v-if="score != null">{{score}}</dd>
						</div>

						<div class="grid grid-cols-2 text-xs pb-3 pt-3.5 desktop:text-base">
							<dt class="font-light text-gray-400">Score Type</dt>
							<dd class="font-normal text-gray-500 upercase" v-if="score_type != null">{{score_type}}</dd>
						</div>

						<div class="grid grid-cols-2 text-xs pb-3 pt-3.5 desktop:text-base">
							<dt class="font-light text-gray-400">Current Career</dt>
							<dd class="font-normal text-gray-500" v-if="current_career != null">{{current_career.name}}</dd>
						</div>




						<div class="grid grid-cols-2 text-xs pb-3 pt-3.5 desktop:text-base">
							<dt class="font-light text-gray-400">Career Location Preference</dt>
							<dd class="font-normal text-gray-500"><span v-for="(preferred_career_location,i) in preferred_career_locations" :value="preferred_career_location.id" :key="preferred_career_location.id">
							<span v-if="i != 0">, </span>{{preferred_career_location.state}}</span></dd>
						</div>
						<div class="grid grid-cols-2 text-xs pb-3 pt-3.5 desktop:text-base">
							<dt class="font-light text-gray-400">College Location Preference</dt>
							<dd class="font-normal text-gray-500"><span v-for="(preferred_college_location,i) in preferred_college_locations" :value="preferred_college_location.id" :key="preferred_college_location.id">
							<span v-if="i != 0">, </span>
							{{preferred_college_location.state}}</span></dd>
						</div>

						<!-- Course Prefrence -->

						<div class="grid grid-cols-2 text-xs pb-3 pt-3.5 desktop:text-base">
							<dt class="font-light text-gray-400">Course Preference</dt>
							<dd class="font-normal text-gray-500"><span v-for="(preferred_course,i) in preferred_courses" :value="preferred_course.id" :key="preferred_course.id">
							<span v-if="i != 0">, </span>
							{{preferred_course.title}}</span></dd>
						</div>


						

						

						<div class="grid grid-cols-2 text-xs pb-3 pt-3.5 desktop:text-base">
							<dt class="font-light text-gray-400">Current Certifications</dt>
							<dd class="font-normal text-gray-500"><span v-for="(current_certification, i) in current_certifications" :value="current_certification.id" :key="current_certification.id">

							<span v-if="i != 0">, </span>
							{{current_certification.name}}</span></dd>
						</div>

						<div class="grid grid-cols-2 text-xs pb-3 pt-3.5 desktop:text-base">
							<dt class="font-light text-gray-400">Career Sector Preference</dt>
							<dd class="font-normal text-gray-500 upercase" v-if="sector_preference != null">{{sector_preference}}</dd>
						</div>


					  </dl>
				</div>
				 
				<!-- Skills & Interests -->
				<div class="mt-10 w-full relative">
					<h2 class="text-base text-dark-blue font-medium  mb-7 desktop:text-xl">Skills & Interests</h2>

					<!-- Step 30 -->
					<div v-if="step3">
					 <stepthree />
					 </div>

					<button class="absolute top-0 right-0" v-on:click="click3">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<circle cx="12" cy="12" r="11.5" fill="#DCF6FF" stroke="#95DCF4" stroke-linecap="round"/>
							<path d="M10.5038 15.5028L14.7278 11.2787L12.7215 9.27238L8.4974 13.4965C8.43924 13.5547 8.39793 13.6276 8.37785 13.7074L7.90967 16.0906L10.2924 15.6224C10.3724 15.6024 10.4456 15.561 10.5038 15.5028ZM16.0915 9.91511C16.2619 9.74463 16.3577 9.51344 16.3577 9.27238C16.3577 9.03133 16.2619 8.80014 16.0915 8.62966L15.3706 7.90875C15.2001 7.73832 14.9689 7.64258 14.7278 7.64258C14.4868 7.64258 14.2556 7.73832 14.0851 7.90875L13.3642 8.62966L15.3706 10.636L16.0915 9.91511Z" fill="#003A9B"/>
						</svg>						
					</button>

					<dl class="divide-y">

						<div class="grid grid-cols-2 text-xs pb-3 pt-3.5 desktop:text-base">
							<dt class="font-light text-gray-400">Sector/Industry Interests</dt>
							<dd class="font-normal text-gray-500"><span v-for="(listIndustrie,i) in listIndustries" >
							<span v-if="i != 0">, </span>{{listIndustrie.name}}</span></dd>
						</div>

						<div class="grid grid-cols-2 text-xs pb-3 pt-3.5 desktop:text-base">
							<dt class="font-light text-gray-400">Stream Interests</dt>
							<dd class="font-normal text-gray-500"><span v-for="(education_stream,i) in education_streams" >
							<span v-if="i != 0">, </span>{{education_stream.name}}</span></dd>
						</div>
						<div class="grid grid-cols-2 text-xs pb-3 pt-3.5 desktop:text-base">
							<dt class="font-light text-gray-400">Specialization Interests</dt>
							<dd class="font-normal text-gray-500"><span v-for="(specialization_interest,i) in specialization_interests" >
							<span v-if="i != 0">, </span>{{specialization_interest.name}}</span></dd>
						</div>
						<div class="grid grid-cols-2 text-xs pb-3 pt-3.5 desktop:text-base">
							<dt class="font-light text-gray-400">Career Interests</dt>
							<dd class="font-normal text-gray-500"><span v-for="(career,i) in careersStep3" >
							<span v-if="i != 0">, </span>{{career.name}}</span></dd>
						</div>

						<div class="grid grid-cols-2 text-xs pb-3 pt-3.5 desktop:text-base">
							<dt class="font-light text-gray-400">Your Interests</dt>
							<dd class="font-normal text-gray-500"><span v-for="(hard_skill,i) in hard_skills" >
							<span v-if="i != 0">, </span>{{hard_skill.name}}</span></dd>
						</div>
						<div class="grid grid-cols-2 text-xs pb-3 pt-3.5 desktop:text-base">
							<dt class="font-light text-gray-400">Top 3 Skills</dt>
							<dd class="font-normal text-gray-500"><span v-for="(soft_skill,i) in soft_skills" >
							<span v-if="i != 0">, </span>{{soft_skill.name}}</span></dd>
						</div>


					</dl>

					<h2 class="text-base text-dark-black font-medium  mb-7 desktop:text-xl">Entrance Exam Details</h2>
					<dl class="divide-y">
						<div class="grid grid-cols-2 text-xs pb-3 pt-3.5 desktop:text-base" v-for="(entrance_exam,i) in entrance_exams">
							<dt class="font-light text-gray-400">{{entrance_exam.entrance_exam_name}}</dt>
							<dd class="font-normal text-gray-500" v-if="entrance_exam.score_type=='percentage'">{{entrance_exam.score_in_percentage}}%</dd>

							<dd class="font-normal text-gray-500" v-else-if="entrance_exam.score_type=='grade'">{{entrance_exam.score_in_grade}}</dd>

							<dd class="font-normal text-gray-500" v-else-if="entrance_exam.score_type=='cgpa'">{{entrance_exam.score_in_cgpa}}</dd>
						</div>
						<!-- <div class="grid grid-cols-2 text-xs pb-3 pt-3.5 desktop:text-base">
							<dt class="font-light text-gray-400">AIEEE</dt>
							<dd class="font-normal text-gray-500">90%</dd>
						</div> -->
						
					</dl>
				</div>
			</div>
		</div>

	</section>
	<Footer />

	<button @click="buttonClickHandler" id="foo" style="display: none">Click Me!</button>

</template>
<style type="text/css">
	.text1{
		font-size: 15px;
	}
	.gap-y-1 {
   row-gap: 0.25rem !important;
}
li.select2-results__option.select2-results__message {
    color: red;
}
.invalid-feedback {
    font-size: 12px;
    height: 18px !important;
}
.upercase:first-letter {
  text-transform: uppercase
}
p.txt2 {
    border-radius: 7px;
    background: #dcf6fe;
    padding: 14px;
    /*margin-top: -37px;*/
}
i.fa.fa-bullhorn {
    font-size: 23px;
}
.desktop\:py-9 {
    padding-top: 0rem !important;
    padding-bottom: 2.25rem;
}
</style>

<script>
import Header from './layout/header.vue'
import Footer from './layout/footer.vue'
import App from './App.vue'
import stepthree from './stepthree.vue'
import auth from './auth'
import moment from "moment";
import { onUpdated } from 'vue'
import Loading from 'vue-loading-overlay';
 

import { Form, Field } from 'vee-validate';
import * as Yup from 'yup';



export default {


  name: 'Dashboard',
  components: {
   Header,
   Loading,
   Footer,
   App,
   Form,
   Field,
   stepthree,
  
     
  },data(){

  	const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  	const schema = Yup.object().shape({
            name: Yup.string()
                .required('Name is required').nullable(),
            email: Yup.string()
                .required('Email is required')
                .email('Email is invalid').nullable(),
            // date_of_birth: Yup.string()
            //     .required('Date of Birth is required').nullable(), 

             profile_type: Yup.string()
                .required('Profile type is required').nullable(),
            gender: Yup.string()
                .required('Gender is required').nullable(),
            nationality_id: Yup.string()
                .required('Citizenship is required').nullable(),
            quota: Yup.string()
                .required('Category is required').nullable(),
            phone: Yup.string()
            	.min(10, "Invalid Format")
            	.max(10, "Invalid Format")
            	.matches(phoneRegExp, 'Invalid Format')
                .required('Phone is required').nullable(),
            location_id: Yup.string()
                .required('Current Location is required').nullable(),
            is_current_12ex: Yup.string()
                .required('This Field is required').nullable(),
            
             
        });

  	const schema2 = Yup.object().shape({
  			qualifying_exam_id: Yup.string()
                .required('This is required').nullable(),
			qualifying_exam_stream_id: Yup.string()
                .required('This is required').nullable(),
            score_in_grade: Yup.string()
                .required('This is required').nullable(),
            score_type: Yup.string()
                .required('This is required').nullable(),
           // career_id: Yup.string()
                //.required('This is required').nullable(),
           // preferred_college_locations_test: Yup.string()
                //.required('This is required').nullable(),
           // sector_preference: Yup.string()
              //  .required('This is required').nullable(),

  	});


  	return {
  		//isLoading: true,
  		schema,
  		schema2,
  		// Step2
  		loading: false,
  		"loaderOne":true,
  		"max":"",
  		"score":"",
  		"preferred_career_locations":"",
  		"preferred_college_locations":"",
  		"current_career":"",
  		"current_career_id":"",
  		"current_certifications":"",
  		"last_qualifying_exam":"",
  		"last_qualifying_exam_id":null,
  		"last_qualifying_exam_stream_id":null,
  		"last_qualifying_exam_stream":"",
  		"score_type":"",
  		"sector_preference":"",
  		"preferred_courses":"",
  		// Step2

  		//step3
  		"education_streams":'',
  		"specialization_interests":'',
  		"careersStep3":'',
  		"soft_skills":'',
  		"soft_skills":'',
  		"hard_skills":'',
  		"entrance_exams":'',
  		//step3
  		"form1":false,
  		"form2":false,
  		"step3":false,
  		"exams":"",
  		"dob":"",
  		"certifications":"",
  		"streams":"",
  		"careers":"",
  		"locations":"",
  		"industries":"",
  		"listIndustries":"",
  		"courses":"",
  		"formDetail1":true,
  		"nationalities":"",
  		 
  		"quota":"",
  		"user":'',
  		"user":'',
  		"image":'',
  		"post":{
  			 
  			"name":'',
  			"email":'',
  			"date_of_birth":'',
  			"gender":'',
  			"nationality_id":'',
  			"quota":'',
  			"phone":'',
  			"profile_type":'',
  			"location_id":'',
  			"is_current_12ex":'',
  		}
  	}
  },

created () {
	console.log('tttttttt');
  this.abc();
},
  methods:{

  	file(e){
  		const image = e.target.files[0];
  		const config = {
                    headers: {
                        'content-type': 'multipart/form-data'
                    }
                }
        let data = new FormData();
        data.append('image', image);

  		
  		this.loaderOne = true; 
  		auth.post('v1/updateImage',data, config).then((response) => {
  	 			//console.log(response);
  	 			this.$toast.success("Profile updated successfully");
  	 			auth.get('v1/user').then((response) => {
  	 				this.image = 'https://app.thecareertrail.com/images/'+response.data.data[0].image;
  	 			$('.imgh').attr("src",this.image);
  	 			this.loaderOne = false;
  	 				// this.form1 = false;
  	 				// this.formDetail1 = true;
		      //       this.user = response.data.data[0];
		        })

  	 	});

  	},
  	onSubmit(values){
  			this.loaderOne = true;
  			var x = localStorage.getItem("dob");
  			// const image = e.target.files[0];
  			//this.post.date_of_birth = x;


			values['date_of_birth'] = x;
  			// console.log(values); return false;

  	 		auth.post('v1/update_basic_step',values).then((response) => {
  	 			//console.log(response);
  	 			this.$toast.success("Profile updated successfully");
  	 			auth.get('v1/user').then((response) => {
  	 				this.form1 = false;
  	 				this.formDetail1 = true;
  	 				this.loaderOne = false;
		            this.user = response.data.data[0];

					if(this.user.date_of_birth != null){
					//this.dob = user.date_of_birth;
					var x = localStorage.getItem("dob");
					this.dob = x;

					this.post.location_id = response.data.data[0].location_id;
		             auth.get('v1/states').then((response) => {
		            	this.locations = response.data.data;

		            	for (let j = 0; j < this.locations.length; j++) {	
		            		if(this.post.location_id == this.locations[j].id){
		            			$('.location').text(this.locations[j].state);
		            		}
		            	}
		             
		             
		        	})

					}
		        })

  	 		});
            // display form values on success
            // alert('SUCCESS!! :-)\n\n' + JSON.stringify(values, null, 4));
        },

    onSubmit2(val){
    	//alert();
    	this.loading = true;
    	this.loaderOne = true;
    	//console.log(val);
    	let obj = {
    		"sector_preference":val.sector_preference,
    		"score_type":val.score_type,
    		"score_in_grade":val.score_in_grade,
    		 "qualifying_exam_id":val.qualifying_exam_id,
    		 "qualifying_exam_stream_id":val.qualifying_exam_stream_id,
    		 "career_id":val.career_id,
    		"preferred_career_locations":$(".cl").val(),
    		 "preferred_college_locations":$("#collegeLocation").val(),
    		 "preferred_courses":$(".cp").val(),
    		// "preferred_career_locations":,
    		"current_certifications":$('.cc').val(),
    	}
    	console.log(obj);
    	auth.post('v1/update_extended_step',obj).then((response) => {
    		this.abc();
  	 		this.loading = false;
  	 		this.loaderOne = false;
  	 		this.form2 = false;
  	 		this.$toast.success("Profile updated successfully");
			}).catch(error => {
			this.loading = false;
			this.$toast.error(error.response.data.message);
			});;

    	//console.log(obj);

    	
    },
    buttonClickHandler(){
    	this.abc();
    },
    logout(){
    	this.loaderOne =true;
  		var result = confirm("Are you sure you want to logout?");
		if (result) {
			auth.post('logout').then((response) => {
			localStorage.removeItem("token");
			this.loaderOne =false;
			//this.$toast.success('You have Successfully Logout');
			window.location.href = "/"
		}).catch(error => {
			localStorage.removeItem("token");
			//this.$toast.success('You have Successfully Logout');
			window.location.href = "/"
		});
		}
  	},

  	click(){
  		 $( "#txtDate" ).datepicker({ maxDate: '0'});
  		 
  		this.allapiData();
   		this.form1 = !this.form1;
   		//this.formDetail1 = false;
  		},
  	click1(){
  		this.abc();
  		this.allapiData();
   		 this.form2 = !this.form2;
  		},

  	cancel(){
  		this.form1 = false;
  		//this.formDetail1 = true;
  	},
  	cancel2(){
  		this.form2 = false;
  		//this.formDetail1 = true;
  	},
  	click3(){

  		this.step3 = !this.step3;
  		//this.formDetail1 = true;
  	},


  	allapiData(){



  		auth.get('v1/user').then((response) => {
        	 
             if(response.data.data[0].date_of_birth !=null){
             	 
              this.post.date_of_birth = moment(response.data.data[0].date_of_birth).format('DD-MM-YYYY');
             
         	}
 
        })

  		
  		
  		// nationalities
        auth.get('v1/nationalities').then((response) => {
            this.nationalities = response.data.data;
        })

        

        auth.get('v1/exams/certifications').then((response) => {
            this.certifications = response.data.data;
        })
        // Get location
        // auth.get('v1/locations').then((response) => {
        //     this.locations = response.data.data;
        // })

        // Get Quota
        auth.get('v1/quota').then((response) => {
            this.quota = response.data.data;
             
        })

         // Get Exam
        auth.get('v1/qualifying-exams').then((response) => {
            this.exams = response.data.data;
            //console.log(response);   
        })

         // Get Education streams
        auth.get('v1/qualifying-exam-streams').then((response) => {
            this.streams = response.data.data;
            //console.log(response);   
        })

         // Get Education careers
        auth.get('v1/careers').then((response) => {
            this.careers = response.data.data;
            //console.log('carer',response);   
        })

         // Get Education locations

         // Get Education courses
        auth.get('v1/courses').then((response) => {
            this.courses = response.data.data;
            //console.log('courses',response);   
        })
         // Get industries
        auth.get('v1/industries').then((response) => {
            this.industries = response.data.data;
            //console.log('courses',response);   
        })

        

        

        auth.get('v1/states').then((response) => {
            this.locations = response.data.data;
             
            this.loaderOne= false; 
        })

  	},abc(){
  		// Get Second step
        auth.get('v1/get_extended_profile').then((response) => {
        	let res =response.data.data;
        	this.score = res.score_in_grade;
        	this.preferred_career_locations = res.preferred_career_locations;
        	this.preferred_college_locations = res.preferred_college_locations;
        	this.current_career = res.current_career;
        	if(res.current_career != null){
        	this.current_career_id = res.current_career.id;
        	}
        	this.current_certifications = res.current_certifications;
        	this.last_qualifying_exam = res.last_qualifying_exam;
        	this.last_qualifying_exam_stream = res.last_qualifying_exam_stream;
        	this.score_type = res.score_type;


        	if(res.last_qualifying_exam != null){
        	this.last_qualifying_exam_id = res.last_qualifying_exam.id;
        	
        	}

        	if(res.preferred_courses != null){
        	this.preferred_courses = res.preferred_courses;
        	
        	}

        	if(res.last_qualifying_exam_stream != null){
        	this.last_qualifying_exam_stream_id = res.last_qualifying_exam_stream.id;
        	}
        	//console.log('>>>>>>',this.qualifying_exam_id)
        	this.sector_preference = res.sector_preference;
        	let preferred_courses = res.preferred_courses;

        	// Selected Cl value
        	var cl=[];
        	for (let i = 0; i < this.preferred_career_locations.length; i++) {	
        		cl.push(this.preferred_career_locations[i].id);
        	}
        	$('.cl').val(cl).select2({maximumSelectionLength: 2,placeholder: "Select"});
        	// College Location Prefrence
        	var collegeLocation=[];
        	for (let k = 0; k < this.preferred_college_locations.length; k++) {	
        		collegeLocation.push(this.preferred_college_locations[k].id);
        	}

        	$('.collegeLocation').val(collegeLocation).select2({maximumSelectionLength: 2,placeholder: "Select"});

        	// preferred_courses
        	var cp =[];
        	for (let j = 0; j < res.preferred_courses.length; j++) {	
        		cp.push(res.preferred_courses[j].id);
        	}

        	$('.cp').val(cp).select2({maximumSelectionLength: 2,placeholder: "Select"});

        	// current_certifications

        	var cc1 =[];
        	for (let j = 0; j < res.current_certifications.length; j++) {	
        		cc1.push(res.current_certifications[j].id);
        	}

        	$('.cc').val(cc1).select2({placeholder: "Select"});

        	// Step3*******************************************/
        	this.education_streams = res.education_streams;
        	this.specialization_interests = res.specialization_interests;
        	this.careersStep3 = res.careers;
        	this.hard_skills = res.hard_skills;
        	this.soft_skills = res.soft_skills;
        	this.entrance_exams = res.entrance_exams;
        	this.listIndustries = res.industries;
        	// Step3*******************************************/

            
        })

        $('#collegeLocation').select2({maximumSelectionLength: 2,placeholder: "Select"});
		$('.cl').select2({maximumSelectionLength: 2,placeholder: "Select"});
		$('.cp').select2({maximumSelectionLength: 2,placeholder: "Select"});
		$('.cc').select2({placeholder: "Select"});
  	}
  }
  ,mounted() {
  		 
  		 // $('.selec1').select2({maximumSelectionLength: 2});
  		 $( "#txtDate" ).datepicker({ maxDate: '0'});
		 


		 
		//$('#txtDate').attr("max", 123);
		//document.getElementById("txtDate").setAttribute("max", today);

  		auth.get('v1/user').then((response) => {
        	//this.abc();
        	//alert(response.data.data[0].date_of_birth);
             this.user = response.data.data[0];
             this.post.name = response.data.data[0].name;
             this.post.email = response.data.data[0].email;
             if(response.data.data[0].date_of_birth !=null){
              
              this.post.date_of_birth = moment(response.data.data[0].date_of_birth).format('DD-MM-YYYY');
             
         	}

         	if(this.user.date_of_birth != null){
         		//this.dob = user.date_of_birth;
         		this.dob = moment(response.data.data[0].date_of_birth).format('DD-MM-YYYY');
         		 
         	}

             this.post.gender = response.data.data[0].gender;
             this.post.nationality_id = response.data.data[0].nationality_id;
             this.post.quota = response.data.data[0].quota;
             this.post.phone = response.data.data[0].phone;
             this.post.profile_type = response.data.data[0].profile_type;
             this.post.location_id = response.data.data[0].location_id;
             this.post.is_current_12ex = response.data.data[0].is_current_12ex;
             this.image = 'https://app.thecareertrail.com/images/'+response.data.data[0].image;


             auth.get('v1/states').then((response) => {
            	this.locations = response.data.data;

            	for (let j = 0; j < this.locations.length; j++) {	
            		if(this.post.location_id == this.locations[j].id){
            			$('.location').text(this.locations[j].state);
            		}
            	}
             
             
        	})



            this.abc();
             this.loaderOne= false;
 
        }) 
  		

         
    
		
    }
}
</script>