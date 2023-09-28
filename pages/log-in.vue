<template>
  <div class="w-full h-screen">
    <div class="flex h-screen">
      <div class="w-full">
        <form>
          <div class="lg:max-w-xl mx-auto lg:p-20 px-8 lg:mt-2 space-y-4">
            <div class="cursor-pointer">
              <!-- <img src="../../../assets/logo/logo.svg" alt="" class="w-10" /> -->
            </div>
            <div class="space-y-3">
              <h2 class="text-black-500 font-semibold text-gray-800 text-2xl">
                Welcome back<span class="text-primary">.</span>
              </h2>
              <p class="text-gray-700">Please enter your details to continue.</p>
            </div>
            <button
              class="text-[#0c66ee] border border-[#0c66ee] flex justify-center gap-2 hover:bg-gray-100/50 p-2 w-full rounded-md cursor-pointer"
            >
              <!-- <img class="w-8" src="../../../assets/logo/google-logo.svg" alt="" /> -->
              <p>Sign in with Google</p>
            </button>
            <span class="flex items-center justify-center space-x-2">
              <span class="h-px bg-gray-300 w-full"></span>
              <span class="font-normal text-gray-500">or </span>
              <span class="h-px dark:bg-gray-300 w-full"></span>
            </span>
            <div class="space-y-5">
              <div class="relative z-0 w-full mb-6 group">
                <input
                  type="email"
                  name="floating_email"
                  id="floating_email"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_email"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >Email address</label
                >
              </div>
              <div class="relative z-0 w-full mb-6 group">
                <input
                  type="password"
                  name="floating_password"
                  id="floating_password"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-primary peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_password"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >Password</label
                >
              </div>
            </div>
            <div class="flex justify-between">
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    autocomplete="off"
                    class="cursor-pointer w-4 h-4 border border-gray-300 rounded bg-gray-50"
                  />
                </div>
                <label
                  for="remember"
                  class="ml-2 text-sm cursor-pointer font-normal text-gray-500"
                  >Remember Me</label
                >
              </div>
              <NuxtLink to="/forgot-password" class="text-[#0c66ee]"
                >Forgot password?</NuxtLink
              >
            </div>

            <button
              class="text-sm text-white bg-[#0c66ee] hover:bg-[#0c66ee]/80 p-3 w-full rounded-md"
            >
              Login to continue
            </button>
            <div>
              <NuxtLink to="/sign-up" class="text-gray-700 hover:text-[#0c66ee]/80"
                >Don't have an account? Register</NuxtLink
              >
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script></script>
