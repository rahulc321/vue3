<template>

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
					<a class="flex gap-x-6 items-center text-gray-500 font-normal" href="#">
						<!-- icon -->
						<svg class="w-5" width="23" height="28" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.97 25.61"><path d="M11.37,21.54A3.91,3.91,0,0,1,9.56,20a4.34,4.34,0,0,0-.84-.9l-.09-.06L5.86,24.73l3.3-.23L11.11,27l2.82-5.78-.23.07a5.67,5.67,0,0,1-1.62.31A2.44,2.44,0,0,1,11.37,21.54Z" transform="translate(-4.51 -1.42)" style="fill:#003a9b"/><path d="M21.28,19.13a4.34,4.34,0,0,0-.84.9,3.91,3.91,0,0,1-1.81,1.51,4.05,4.05,0,0,1-2.33-.21l-.23-.07L18.89,27l1.95-2.54,3.3.23-2.77-5.66Z" transform="translate(-4.51 -1.42)" style="fill:#003a9b"/><path d="M25.49,10.93a2.84,2.84,0,0,0-.73-1.42A5,5,0,0,1,24,8.17a5,5,0,0,1-.2-1.58,2.8,2.8,0,0,0-.27-1.51,3.18,3.18,0,0,0-1.44-.72,6,6,0,0,1-1.52-.65,5.55,5.55,0,0,1-1.11-1.16,2.88,2.88,0,0,0-1.18-1.08,3.1,3.1,0,0,0-1.57.21A5.82,5.82,0,0,1,15,2a6,6,0,0,1-1.68-.32,4.92,4.92,0,0,0-1.24-.26,1.13,1.13,0,0,0-.32.05,2.88,2.88,0,0,0-1.18,1.08A5.55,5.55,0,0,1,9.47,3.71,6,6,0,0,1,8,4.36a3.18,3.18,0,0,0-1.44.72,2.8,2.8,0,0,0-.27,1.51A5,5,0,0,1,6,8.17a5,5,0,0,1-.8,1.34,2.84,2.84,0,0,0-.73,1.42,2.81,2.81,0,0,0,.73,1.42A5,5,0,0,1,6,13.69a5,5,0,0,1,.2,1.59,2.77,2.77,0,0,0,.27,1.5A3.09,3.09,0,0,0,8,17.5a6,6,0,0,1,1.52.66,5.76,5.76,0,0,1,1.11,1.15,3,3,0,0,0,1.18,1.09,3.07,3.07,0,0,0,1.56-.22A6,6,0,0,1,15,19.86a6,6,0,0,1,1.68.32,3.07,3.07,0,0,0,1.56.22,3,3,0,0,0,1.18-1.09,5.76,5.76,0,0,1,1.11-1.15,5.7,5.7,0,0,1,1.52-.66,3,3,0,0,0,1.43-.72,2.67,2.67,0,0,0,.28-1.5,5,5,0,0,1,.2-1.59,5,5,0,0,1,.8-1.34A2.81,2.81,0,0,0,25.49,10.93ZM15,18.28a7.56,7.56,0,0,1-7.75-7.35A7.57,7.57,0,0,1,15,3.58a7.57,7.57,0,0,1,7.75,7.35A7.56,7.56,0,0,1,15,18.28Z" transform="translate(-4.51 -1.42)" style="fill:#003a9b"/><path d="M15,4.78a6.32,6.32,0,0,0-6.48,6.15A6.32,6.32,0,0,0,15,17.08a6.33,6.33,0,0,0,6.48-6.15A6.33,6.33,0,0,0,15,4.78Z" transform="translate(-4.51 -1.42)" style="fill:#003a9b"/></svg>						
						My Exam
					</a>

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
			<div class="w-full tablet:pl-9 tablet:pr-12 tablet:py-12 desktop:pl-16 desktop:pr-56 desktop:py-9">
				<!-- Avatar -->
				<div class="flex gap-x-10 items-center">
					<img class="rounded-full h-24 w-24 object-cover object-top" src="./assets/images/avatar_full.png" alt="">
					<button class="text-base leading-5 bg-trail-tail border border-blue-200 px-6 py-2 rounded-md">Change photo</button>
				</div>

				<!-- Basic Information -->
				<div class="mt-10 w-full relative" x-data="{ showForm : true }">
					<h2 class="text-base text-dark-blue font-medium mb-7 desktop:text-xl">Basic Information</h2>
					<button class="absolute top-0 right-0" v-on:click="click">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<circle cx="12" cy="12" r="11.5" fill="#DCF6FF" stroke="#95DCF4" stroke-linecap="round"/>
							<path d="M10.5038 15.5028L14.7278 11.2787L12.7215 9.27238L8.4974 13.4965C8.43924 13.5547 8.39793 13.6276 8.37785 13.7074L7.90967 16.0906L10.2924 15.6224C10.3724 15.6024 10.4456 15.561 10.5038 15.5028ZM16.0915 9.91511C16.2619 9.74463 16.3577 9.51344 16.3577 9.27238C16.3577 9.03133 16.2619 8.80014 16.0915 8.62966L15.3706 7.90875C15.2001 7.73832 14.9689 7.64258 14.7278 7.64258C14.4868 7.64258 14.2556 7.73832 14.0851 7.90875L13.3642 8.62966L15.3706 10.636L16.0915 9.91511Z" fill="#003A9B"/>
						</svg>						
					</button>

					<dl class="divide-y"  x-show="!showForm">
						<div class="grid grid-cols-2 text-xs pb-3 pt-3.5 desktop:text-base">
							<dt class="font-light text-gray-400">Name</dt>
							<dd class="font-normal text-gray-500">Ashiqur Rahman</dd>
						</div>
						<div class="grid grid-cols-2 text-xs pb-3 pt-3.5 desktop:text-base">
							<dt class="font-light text-gray-400">Profile Type</dt>
							<dd class="font-normal text-gray-500">Student</dd>
						</div>
						<div class="grid grid-cols-2 text-xs pb-3 pt-3.5 desktop:text-base">
							<dt class="font-light text-gray-400">Grade</dt>
							<dd class="font-normal text-gray-500">12</dd>
						</div>
						<div class="grid grid-cols-2 text-xs pb-3 pt-3.5 desktop:text-base">
							<dt class="font-light text-gray-400">Last Exam</dt>
							<dd class="font-normal text-gray-500">Grade 12</dd>
						</div>
						<div class="grid grid-cols-2 text-xs pb-3 pt-3.5 desktop:text-base">
							<dt class="font-light text-gray-400">Last Exam Stream</dt>
							<dd class="font-normal text-gray-500">Science</dd>
						</div>
					  </dl>

					<form v-if="form1" class="flex flex-col space-y-6 mt-10" x-show="showForm">
					<div class="flex justify-between items-center gap-2">
						<div class="flex flex-col w-1/3 gap-y-1">
							<label for="name"> Name <span class="text-red-600">*</span></label>
							<input class="rounded border-gray-300" type="text" id="name" name="name" placeholder="Ashikur Rahman">
						</div>

						<div class="flex flex-col w-1/3 gap-y-1">
							<label for="name"> Email <span class="text-red-600">*</span></label>
							<input class="rounded border-gray-300" type="text" id="name" name="name" placeholder="abc.com">
						</div>

						<div class="flex flex-col w-1/3 gap-y-1">
								<label for="profile_type"> Date of Birth <span class="text-red-600">*</span></label>
								<input class="rounded border-gray-300" type="text" id="name" name="name" placeholder="DOB">
							</div>


						</div>
						 

						<div class="flex justify-between items-center gap-2">

						<div class="flex flex-col w-1/3 gap-y-1">
								<label for="profile_type"> Gender <span class="text-red-600">*</span></label>
								<select class="rounded-md border-gray-300" name="profile_type" id="profile_type">
									<option value="male">Male</option>
									<option value="female">Female</option>
									<option value="other">other</option>
								</select>
							</div>

							<div class="flex flex-col w-1/3 gap-y-1">
								<label for="profile_type"> Citizenship <span class="text-red-600">*</span></label>
								<select class="rounded-md border-gray-300" name="profile_type" id="profile_type">
									<option v-for="nationalitie in nationalities" :value="nationalitie.name" :key="nationalitie.id">{{nationalitie.name}}</option>
									 
								</select>
							</div>
							<div class="flex flex-col w-1/3 gap-y-1">
								<label for="profile_type"> Select Applicable Category<span class="text-red-600">*</span></label>
								<select class="rounded-md border-gray-300" name="profile_type" id="profile_type">
									<option value="student">Science</option>
									<option value="student">Arts</option>
									<option value="student">Commerce</option>
								</select>
							</div>
						</div>

						<div class="flex justify-between items-center gap-2">
						<div class="flex flex-col w-1/2 gap-y-1">
							<label for="name"> Phone <span class="text-red-600">*</span></label>
							<input class="rounded border-gray-300" type="text" id="name" name="name" placeholder="+91 9758463790">
						</div>

						<div class="flex flex-col w-1/2 gap-y-1">
							<label for="profile_type"> Current Location<span class="text-red-600">*</span></label>
								<select class="rounded-md border-gray-300" name="profile_type" id="profile_type">
									<option v-for="location in locations" :value="location.state" :key="location.state">{{location.state}}</option>
								</select>
						</div>
						
						</div>

						<div class="flex justify-between items-center gap-2">
						<label class="">Are you appearing /qualified Class 12 or Equivalent exam this year (Y/N)? </label>

						<select class="rounded-md border-gray-300" name="profile_type" id="profile_type">
									<option value="yes">Yes</option>
									<option value="no">No</option>
									 
								</select>

						 
						</div>

						<div class="flex flex-col">		
							<div class="mt-2 w-full flex space-x-3">
								<button x-on:click="showForm = !showForm" class="py-3 px-16 font-medium text-gray-700 border border-gray-300 rounded-md" type="button">Cancel</button>
								<button class="py-3 px-16 font-medium bg-dark-blue text-gray-100 text-gray shadow-lg rounded-md" type="button">Save</button>
							</div>
						</div>
					</form>

				</div>

				<!-- Education & Career -->
				<div class="mt-10 w-full relative">
					<h2 class="text-base text-dark-blue font-medium  mb-7 desktop:text-xl">Education & Career</h2>
					<button class="absolute top-0 right-0">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<circle cx="12" cy="12" r="11.5" fill="#DCF6FF" stroke="#95DCF4" stroke-linecap="round"/>
							<path d="M10.5038 15.5028L14.7278 11.2787L12.7215 9.27238L8.4974 13.4965C8.43924 13.5547 8.39793 13.6276 8.37785 13.7074L7.90967 16.0906L10.2924 15.6224C10.3724 15.6024 10.4456 15.561 10.5038 15.5028ZM16.0915 9.91511C16.2619 9.74463 16.3577 9.51344 16.3577 9.27238C16.3577 9.03133 16.2619 8.80014 16.0915 8.62966L15.3706 7.90875C15.2001 7.73832 14.9689 7.64258 14.7278 7.64258C14.4868 7.64258 14.2556 7.73832 14.0851 7.90875L13.3642 8.62966L15.3706 10.636L16.0915 9.91511Z" fill="#003A9B"/>
						</svg>						
					</button>

					<dl class="divide-y">
						<div class="grid grid-cols-2 text-xs pb-3 pt-3.5 desktop:text-base">
							<dt class="font-light text-gray-400">Last Exam Taken</dt>
							<dd class="font-normal text-gray-500">Tamilnadu, Orrissa, Delhi</dd>
						</div>
						<div class="grid grid-cols-2 text-xs pb-3 pt-3.5 desktop:text-base">
							<dt class="font-light text-gray-400">Last Exam Stream</dt>
							<dd class="font-normal text-gray-500">Engineering, Nursing</dd>
						</div>
						<div class="grid grid-cols-2 text-xs pb-3 pt-3.5 desktop:text-base">
							<dt class="font-light text-gray-400">Last Exam Percentage</dt>
							<dd class="font-normal text-gray-500">86</dd>
						</div>
						<div class="grid grid-cols-2 text-xs pb-3 pt-3.5 desktop:text-base">
							<dt class="font-light text-gray-400">Career Location</dt>
							<dd class="font-normal text-gray-500">Andaman and Nicobar Islands, Orrissa</dd>
						</div>
						<div class="grid grid-cols-2 text-xs pb-3 pt-3.5 desktop:text-base">
							<dt class="font-light text-gray-400">College Location</dt>
							<dd class="font-normal text-gray-500">Delhi, Andaman and Nicobar Islands</dd>
						</div>
						<div class="grid grid-cols-2 text-xs pb-3 pt-3.5 desktop:text-base">
							<dt class="font-light text-gray-400">Current Career</dt>
							<dd class="font-normal text-gray-500">Business Analyst</dd>
						</div>
						<div class="grid grid-cols-2 text-xs pb-3 pt-3.5 desktop:text-base">
							<dt class="font-light text-gray-400">Current Certifications</dt>
							<dd class="font-normal text-gray-500">AWS Cloud Practitioner, Adobe InDesign Professional </dd>
						</div>
					  </dl>
				</div>

				<!-- Skills & Interests -->
				<div class="mt-10 w-full relative">
					<h2 class="text-base text-dark-blue font-medium  mb-7 desktop:text-xl">Skills & Interests</h2>
					<button class="absolute top-0 right-0">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<circle cx="12" cy="12" r="11.5" fill="#DCF6FF" stroke="#95DCF4" stroke-linecap="round"/>
							<path d="M10.5038 15.5028L14.7278 11.2787L12.7215 9.27238L8.4974 13.4965C8.43924 13.5547 8.39793 13.6276 8.37785 13.7074L7.90967 16.0906L10.2924 15.6224C10.3724 15.6024 10.4456 15.561 10.5038 15.5028ZM16.0915 9.91511C16.2619 9.74463 16.3577 9.51344 16.3577 9.27238C16.3577 9.03133 16.2619 8.80014 16.0915 8.62966L15.3706 7.90875C15.2001 7.73832 14.9689 7.64258 14.7278 7.64258C14.4868 7.64258 14.2556 7.73832 14.0851 7.90875L13.3642 8.62966L15.3706 10.636L16.0915 9.91511Z" fill="#003A9B"/>
						</svg>						
					</button>

					<dl class="divide-y">
						<div class="grid grid-cols-2 text-xs pb-3 pt-3.5 desktop:text-base">
							<dt class="font-light text-gray-400">Stream Interests</dt>
							<dd class="font-normal text-gray-500">Tamilnadu, Orrissa, Delhi</dd>
						</div>
						<div class="grid grid-cols-2 text-xs pb-3 pt-3.5 desktop:text-base">
							<dt class="font-light text-gray-400">Specialization Interests</dt>
							<dd class="font-normal text-gray-500">Engineering, Nursing</dd>
						</div>
						<div class="grid grid-cols-2 text-xs pb-3 pt-3.5 desktop:text-base">
							<dt class="font-light text-gray-400">Career Interests</dt>
							<dd class="font-normal text-gray-500">Business Analyst</dd>
						</div>
					</dl>

					<h2 class="text-sm text-gray-500 font-medium mt-8 mb-4 desktop:text-lg">Entrance Exam Details</h2>
					<dl class="divide-y">
						<div class="grid grid-cols-2 text-xs pb-3 pt-3.5 desktop:text-base">
							<dt class="font-light text-gray-400">NEET</dt>
							<dd class="font-normal text-gray-500">85%</dd>
						</div>
						<div class="grid grid-cols-2 text-xs pb-3 pt-3.5 desktop:text-base">
							<dt class="font-light text-gray-400">AIEEE</dt>
							<dd class="font-normal text-gray-500">90%</dd>
						</div>
						<div class="grid grid-cols-2 text-xs pb-3 pt-3.5 desktop:text-base">
							<dt class="font-light text-gray-400">Your Interests</dt>
							<dd class="font-normal text-gray-500">Engineering, Nursing</dd>
						</div>
						<div class="grid grid-cols-2 text-xs pb-3 pt-3.5 desktop:text-base">
							<dt class="font-light text-gray-400">Top 3 Skills</dt>
							<dd class="font-normal text-gray-500">Coding, Gaming, Problem Solving</dd>
						</div>
					</dl>
				</div>
			</div>
		</div>

	</section>
	<Footer />
</template>
<style type="text/css">
	.text1{
		font-size: 15px;
	}
</style>

<script>
import Header from './layout/header.vue'
import Footer from './layout/footer.vue'
import App from './App.vue'
import auth from './auth'


export default {


  name: 'Dashboard',
  components: {
   Header,
   Footer,
   App
  
     
  },data(){
  	return {
  		"form1":false,
  		"nationalities":"",
  		"locations":"",
  	}
  },methods: {
  	click(){
  		this.form1 = !this.form1;
  	},

  	logout(){
  		var result = confirm("Are you sure you want to logout?");
		if (result) {
			auth.post('logout').then((response) => {
			localStorage.removeItem("token");
			this.$toast.success('You have Successfully Logout');
			window.location.href = "/"
			})
		}
  	}
  },mounted() {
  		// nationalities
        auth.get('v1/nationalities').then((response) => {
            this.nationalities = response.data.data;
        })
        // Get location
        auth.get('v1/locations').then((response) => {
            this.locations = response.data.data;
        })
    }
}
</script>