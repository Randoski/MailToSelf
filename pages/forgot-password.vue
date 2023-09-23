<template>
  <div class="w-full h-screen">
    <div class="flex h-screen">
      <div class="w-full">
        <form>
          <div class="form-body lg:max-w-xl mx-auto lg:p-10 px-8 lg:mt-20 space-y-8">
            <div class="form-head cursor-pointer">
              <!-- <img src="../../../assets/logo/logo.svg" alt="" class="w-10" /> -->
            </div>
            <div class="space-y-3">
              <h2 class="font-semibold text-gray-800 text-2xl">Forgot your password?</h2>
              <p class="text-gray-700">
                Please enter your email to recovery your password.
              </p>
            </div>

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
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >Email address</label
                >
              </div>
            </div>

            <button
              class="text-sm text-white bg-[#0c66ee] hover:bg-[#0c66ee]/80 p-3 w-full rounded-md"
            >
              Send me, email recovery
            </button>
            <NuxtLink
              to="/log-in"
              class="flex items-center text-gray-700 hover:text-[#0c66ee]"
            >
              Already have an account? Login
            </NuxtLink>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
