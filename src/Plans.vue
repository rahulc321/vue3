<template>
<Header />
 <!--===============breadcrumb=================-->
	<section class="container">
		<nav class="flex mt-4 desktop:mt-9" aria-label="Breadcrumb">
			<ol class="inline-flex items-center space-x-1 desktop:space-x-3">
			  <li class=""> <a href="#" class="text-gray-500 hover:text-gray-700"> Home </a> </li>
			  <li class="flex items-center">
				  <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
				  <a href="#" class="text-gray-600 hover:text-gray-700 ml-1 desktop:ml-2 text-sm font-medium">My Dashboard</a>
			  </li>
			  <li aria-current="page" class="flex items-center">
				  <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
				  <span class="text-gray-400 ml-1 desktop:ml-2 text-sm font-medium">My College</span>
			  </li>
			</ol>
		  </nav>
	</section>

	<!--===============Content=================-->
	<section class="container mt-4">
		<h1 class="text-center text-dark-blue text-2xl leading-6 font-bold mb-7 tablet:text-5xl tablet:leading-none desktop:mb-28">Our Plans</h1>
		<!-- Pricing Plans -->
		<div class="flex flex-col w-3/4 max-w-card gap-y-8 mx-auto tablet:gap-y-12 tablet:max-w-card-tab desktop:flex-row desktop:justify-center desktop:items-end desktop:bg-white desktop:max-w-5xl desktop:rounded-2xl desktop:h-md">

			<!-- Beginer plan -->
			<div class="w-full bg-white rounded-2xl shadow-lg py-6 px-12 tablet:py-10 tablet:px-20 desktop:px-14 desktop:rounded-br-none desktop:shadow-none desktop:max-w-card-desktop">
				<h3 class="text-xl font-black text-trail-dark tablet:text-4xl">$20 <span class="text-gray-400 text-xs tablet:text-lg">/month</span></h3>
				<h3 class="text-xl font-black text-trail-dark mt-4 mb-3 tablet:text-[28px] tablet:leading-8">Beginer</h3>
				<p class="text-xs text-gray-400 tablet:text-base">Explore the basics</p>
				<ul class="mt-5 space-y-3 desktop:space-y-2">
					<li class="text-xs text-gray-400 flex gap-2 tablet:text-sm tablet:leading-4">
						<svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M7.39007 0.368164C3.30865 0.368164 0 3.67681 0 7.75823C0 11.8397 3.30865 15.1483 7.39007 15.1483C11.4715 15.1483 14.7801 11.8397 14.7801 7.75823C14.7754 3.67878 11.4695 0.372915 7.39007 0.368164Z" fill="#5243C2" fill-opacity="0.103693"/>
							<path d="M11.6563 5.41791L7.44086 11.1384C7.34033 11.2718 7.19042 11.3592 7.02482 11.381C6.85921 11.4028 6.69181 11.3571 6.56021 11.2542L3.54999 8.84752C3.28436 8.63495 3.24135 8.24728 3.45392 7.98165C3.66649 7.71602 4.05416 7.67301 4.31979 7.88558L6.82995 9.89383L10.6648 4.68937C10.7905 4.50068 11.0098 4.39635 11.2355 4.41781C11.4613 4.43928 11.657 4.58306 11.7449 4.79208C11.8328 5.0011 11.7988 5.24153 11.6563 5.41791Z" fill="#003A9B"/>
						</svg>
						<span class="flex-1">
							Find exclusive details about ONE selected career
						</span>
					</li>
					<li class="text-xs text-gray-400 flex gap-2 tablet:text-sm tablet:leading-4">
						<svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M7.39007 0.368164C3.30865 0.368164 0 3.67681 0 7.75823C0 11.8397 3.30865 15.1483 7.39007 15.1483C11.4715 15.1483 14.7801 11.8397 14.7801 7.75823C14.7754 3.67878 11.4695 0.372915 7.39007 0.368164Z" fill="#5243C2" fill-opacity="0.103693"/>
							<path d="M11.6563 5.41791L7.44086 11.1384C7.34033 11.2718 7.19042 11.3592 7.02482 11.381C6.85921 11.4028 6.69181 11.3571 6.56021 11.2542L3.54999 8.84752C3.28436 8.63495 3.24135 8.24728 3.45392 7.98165C3.66649 7.71602 4.05416 7.67301 4.31979 7.88558L6.82995 9.89383L10.6648 4.68937C10.7905 4.50068 11.0098 4.39635 11.2355 4.41781C11.4613 4.43928 11.657 4.58306 11.7449 4.79208C11.8328 5.0011 11.7988 5.24153 11.6563 5.41791Z" fill="#003A9B"/>
						</svg>
						<span class="flex-1">
							Create your exclusive profile and match with a relevant career
						</span>
					</li>
					<li class="text-xs text-gray-400 flex gap-2 tablet:text-sm tablet:leading-4">
						<svg class="" width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M7.39007 0.368164C3.30865 0.368164 0 3.67681 0 7.75823C0 11.8397 3.30865 15.1483 7.39007 15.1483C11.4715 15.1483 14.7801 11.8397 14.7801 7.75823C14.7754 3.67878 11.4695 0.372915 7.39007 0.368164Z" fill="#5243C2" fill-opacity="0.103693"/>
							<path d="M11.6563 5.41791L7.44086 11.1384C7.34033 11.2718 7.19042 11.3592 7.02482 11.381C6.85921 11.4028 6.69181 11.3571 6.56021 11.2542L3.54999 8.84752C3.28436 8.63495 3.24135 8.24728 3.45392 7.98165C3.66649 7.71602 4.05416 7.67301 4.31979 7.88558L6.82995 9.89383L10.6648 4.68937C10.7905 4.50068 11.0098 4.39635 11.2355 4.41781C11.4613 4.43928 11.657 4.58306 11.7449 4.79208C11.8328 5.0011 11.7988 5.24153 11.6563 5.41791Z" fill="#003A9B"/>
						</svg>
						<span class="flex-1">
							Find your exclusive career path for 1 matching career
							Access to dashboard basic (My Career view only)
						</span>
					</li>
				</ul>
				<div class="flex justify-center">
					<button class="mt-5 text-xs font-black bg-blue-100 rounded-3xl text-light-blue px-10 py-2 tablet:text-base tablet:py-3.5 tablet:px-16 desktop:px-8">Choose Plan</button>
				</div>
			</div>

			<!-- Pro plan -->
			<div class="w-full bg-dark-blue rounded-2xl shadow-lg shadow-light-blue-500 py-10 px-12 relative tablet:py-16 tablet:px-20 desktop:px-12 desktop:py-14 desktop:shadow-none desktop:max-w-card-desktop desktop:-mt-20">
				<span class="absolute top-3.5 right-3.5 uppercase font-semibold tracking-wide bg-light-blue px-5 py-1.5 text-white rounded-full text-xs tablet:py-2 tablet:top-5 tablet:right-5">Most Polular</span>
				<h3 class="text-xl font-black text-white tablet:text-4xl">$20 <span class="text-gray-200 text-xs tablet:text-lg">/month</span></h3>
				<h3 class="text-xl font-black text-white mt-4 mb-3 tablet:text-[28px] tablet:leading-8">Pro</h3>
				<p class="text-xs text-gray-200 tablet:text-base">Perfect for students who knows a few careers and want to undestand the career paths</p>
				<ul class="mt-5 space-y-3 desktop:space-y-2">
					<li class="text-xs text-gray-100 flex gap-2 tablet:text-sm tablet:leading-5">
						<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path opacity="0.1" d="M7.66497 0.898438C3.58355 0.898438 0.274902 4.20708 0.274902 8.28851C0.274902 12.3699 3.58355 15.6786 7.66497 15.6786C11.7464 15.6786 15.055 12.3699 15.055 8.28851C15.0503 4.20905 11.7444 0.903189 7.66497 0.898438Z" fill="white"/>
							<path d="M11.9312 5.94819L7.71576 11.6687C7.61523 11.8021 7.46532 11.8895 7.29972 11.9113C7.13411 11.933 6.96671 11.8874 6.83511 11.7845L3.82489 9.37779C3.55926 9.16522 3.51625 8.77756 3.72882 8.51192C3.9414 8.24629 4.32906 8.20328 4.59469 8.41585L7.10485 10.4241L10.9397 5.21965C11.0654 5.03095 11.2847 4.92662 11.5105 4.94809C11.7362 4.96955 11.9319 5.11334 12.0198 5.32235C12.1077 5.53137 12.0737 5.7718 11.9312 5.94819Z" fill="white"/>
						</svg>							
						<span class="flex-1">
							Find exclusive details about ONE selected career
						</span>
					</li>
					<li class="text-xs text-gray-100 flex gap-2 tablet:text-sm tablet:leading-5">
						<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path opacity="0.1" d="M7.66497 0.898438C3.58355 0.898438 0.274902 4.20708 0.274902 8.28851C0.274902 12.3699 3.58355 15.6786 7.66497 15.6786C11.7464 15.6786 15.055 12.3699 15.055 8.28851C15.0503 4.20905 11.7444 0.903189 7.66497 0.898438Z" fill="white"/>
							<path d="M11.9312 5.94819L7.71576 11.6687C7.61523 11.8021 7.46532 11.8895 7.29972 11.9113C7.13411 11.933 6.96671 11.8874 6.83511 11.7845L3.82489 9.37779C3.55926 9.16522 3.51625 8.77756 3.72882 8.51192C3.9414 8.24629 4.32906 8.20328 4.59469 8.41585L7.10485 10.4241L10.9397 5.21965C11.0654 5.03095 11.2847 4.92662 11.5105 4.94809C11.7362 4.96955 11.9319 5.11334 12.0198 5.32235C12.1077 5.53137 12.0737 5.7718 11.9312 5.94819Z" fill="white"/>
						</svg>
						<span class="flex-1">
							Create your exclusive profile and match with a relevant career
						</span>
					</li>
					<li class="text-xs text-gray-100 flex gap-2 tablet:text-sm tablet:leading-5">
						<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path opacity="0.1" d="M7.66497 0.898438C3.58355 0.898438 0.274902 4.20708 0.274902 8.28851C0.274902 12.3699 3.58355 15.6786 7.66497 15.6786C11.7464 15.6786 15.055 12.3699 15.055 8.28851C15.0503 4.20905 11.7444 0.903189 7.66497 0.898438Z" fill="white"/>
							<path d="M11.9312 5.94819L7.71576 11.6687C7.61523 11.8021 7.46532 11.8895 7.29972 11.9113C7.13411 11.933 6.96671 11.8874 6.83511 11.7845L3.82489 9.37779C3.55926 9.16522 3.51625 8.77756 3.72882 8.51192C3.9414 8.24629 4.32906 8.20328 4.59469 8.41585L7.10485 10.4241L10.9397 5.21965C11.0654 5.03095 11.2847 4.92662 11.5105 4.94809C11.7362 4.96955 11.9319 5.11334 12.0198 5.32235C12.1077 5.53137 12.0737 5.7718 11.9312 5.94819Z" fill="white"/>
						</svg>
						<span class="flex-1">
							Find your exclusive career path for 1 matching career
							Access to dashboard basic (My Career view only)
						</span>
					</li>
				</ul>
				<div class="flex justify-center">
					<button class="mt-5 text-xs font-black bg-light-blue rounded-3xl text-white  px-10 py-2 tablet:text-base tablet:py-3.5 tablet:px-16 desktop:px-8">Choose Plan</button>
				</div>
			</div>

			<!-- VIP plan -->
			<div class="w-full bg-white rounded-2xl shadow-lg py-6 px-12 tablet:py-10 tablet:px-20 desktop:px-14 desktop:rounded-bl-none desktop:shadow-none desktop:max-w-card-desktop">
				<h3 class="text-xl font-black text-trail-dark tablet:text-4xl">$20 <span class="text-gray-400 text-xs tablet:text-lg">/month</span></h3>
				<h3 class="text-xl font-black text-trail-dark mt-4 mb-3 tablet:text-[28px] tablet:leading-8">VIP</h3>
				<p class="text-xs text-gray-400 tablet:text-base">Perfect for Students who are new to their career Journey</p>
				<ul class="mt-5 space-y-3  desktop:space-y-2">
					<li class="text-xs text-gray-400 flex gap-2 tablet:text-sm tablet:leading-4">
						<svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M7.39007 0.368164C3.30865 0.368164 0 3.67681 0 7.75823C0 11.8397 3.30865 15.1483 7.39007 15.1483C11.4715 15.1483 14.7801 11.8397 14.7801 7.75823C14.7754 3.67878 11.4695 0.372915 7.39007 0.368164Z" fill="#5243C2" fill-opacity="0.103693"/>
							<path d="M11.6563 5.41791L7.44086 11.1384C7.34033 11.2718 7.19042 11.3592 7.02482 11.381C6.85921 11.4028 6.69181 11.3571 6.56021 11.2542L3.54999 8.84752C3.28436 8.63495 3.24135 8.24728 3.45392 7.98165C3.66649 7.71602 4.05416 7.67301 4.31979 7.88558L6.82995 9.89383L10.6648 4.68937C10.7905 4.50068 11.0098 4.39635 11.2355 4.41781C11.4613 4.43928 11.657 4.58306 11.7449 4.79208C11.8328 5.0011 11.7988 5.24153 11.6563 5.41791Z" fill="#003A9B"/>
						</svg>
						<span class="flex-1">
							Find exclusive details about ONE selected career
						</span>
					</li>
					<li class="text-xs text-gray-400 flex gap-2 tablet:text-sm tablet:leading-4">
						<svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M7.39007 0.368164C3.30865 0.368164 0 3.67681 0 7.75823C0 11.8397 3.30865 15.1483 7.39007 15.1483C11.4715 15.1483 14.7801 11.8397 14.7801 7.75823C14.7754 3.67878 11.4695 0.372915 7.39007 0.368164Z" fill="#5243C2" fill-opacity="0.103693"/>
							<path d="M11.6563 5.41791L7.44086 11.1384C7.34033 11.2718 7.19042 11.3592 7.02482 11.381C6.85921 11.4028 6.69181 11.3571 6.56021 11.2542L3.54999 8.84752C3.28436 8.63495 3.24135 8.24728 3.45392 7.98165C3.66649 7.71602 4.05416 7.67301 4.31979 7.88558L6.82995 9.89383L10.6648 4.68937C10.7905 4.50068 11.0098 4.39635 11.2355 4.41781C11.4613 4.43928 11.657 4.58306 11.7449 4.79208C11.8328 5.0011 11.7988 5.24153 11.6563 5.41791Z" fill="#003A9B"/>
						</svg>
						<span class="flex-1">
							Create your exclusive profile and match with a relevant career
						</span>
					</li>
					<li class="text-xs text-gray-400 flex gap-2 tablet:text-sm tablet:leading-4">
						<svg class="" width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M7.39007 0.368164C3.30865 0.368164 0 3.67681 0 7.75823C0 11.8397 3.30865 15.1483 7.39007 15.1483C11.4715 15.1483 14.7801 11.8397 14.7801 7.75823C14.7754 3.67878 11.4695 0.372915 7.39007 0.368164Z" fill="#5243C2" fill-opacity="0.103693"/>
							<path d="M11.6563 5.41791L7.44086 11.1384C7.34033 11.2718 7.19042 11.3592 7.02482 11.381C6.85921 11.4028 6.69181 11.3571 6.56021 11.2542L3.54999 8.84752C3.28436 8.63495 3.24135 8.24728 3.45392 7.98165C3.66649 7.71602 4.05416 7.67301 4.31979 7.88558L6.82995 9.89383L10.6648 4.68937C10.7905 4.50068 11.0098 4.39635 11.2355 4.41781C11.4613 4.43928 11.657 4.58306 11.7449 4.79208C11.8328 5.0011 11.7988 5.24153 11.6563 5.41791Z" fill="#003A9B"/>
						</svg>
						<span class="flex-1">
							Find your exclusive career path for 1 matching career
							Access to dashboard basic (My Career view only)
						</span>
					</li>
				</ul>
				<div class="flex justify-center">
					<button class="mt-5 text-xs font-black bg-blue-100 rounded-3xl text-light-blue px-10 py-2 tablet:text-base tablet:py-3.5 tablet:px-16  desktop:px-8">Choose Plan</button>
				</div>
			</div>
		</div>
	</section>
	<Footer />
</template>


<script>
import Header from './layout/header.vue'
import Footer from './layout/footer.vue'
import App from './App.vue'


export default {


  name: 'Home',
  components: {
   Header,
   Footer,
   App
  
     
  }
}
</script>