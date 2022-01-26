<template>
   <body class="font-sans min-h-screen h-full w-full bg-login bg-cover bg-blend-soft-light bg-[#12c2e9] relative before:absolute before:top-0 before:left-0 before:min-h-screen before:w-full before:h-full before:mix-blend-multiply before:bg-gradient-to-t before:from-[#2d6de9] before:to-[#12c2e9]">
	<div class="container isolate flex min-h-screen justify-center items-center">
		<div class="max-w-lg min-h-3xl w-full mx-auto p-6 tablet:p-16 desktop:p-24 rounded-lg bg-white flex flex-col items-center justify-center">
			<a href="./index.html">
				<img src="./assets/images/logo.svg" alt="">
			</a>
			<p class="text-2xl font-medium text-light-blue my-10">Reset Password</p>
			<form class="flex flex-col space-y-6 w-full">
				<div class="flex flex-col">
					<p class="text-base leading-5">Enter the email address accociated with your accound and we'll send an email with instructoins to reset your password.</p>
				</div>
				<div class="flex flex-col">
					<label for="email"> Email <span class="text-red-600">*</span></label>
					<input class="rounded border-gray-300" type="email" id="email" name="email" placeholder="ashikurrahman12@gmail.com">
				</div>
				<div class="flex flex-col">
					<div class="mt-6">
						<button class="py-3 px-16 font-medium bg-dark-blue text-gray-100 text-gray shadow-lg rounded-md">Send Instructions</button>
					</div>
				</div>
			</form>
		</div>
	</div>
 
</body>

	
</template>

<script>
export default {
  name: 'Forgot',
  components: {
   
     
  }
}
</script>