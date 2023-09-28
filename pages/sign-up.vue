<template>
  <div class="w-full h-screen">
    <div class="flex rounded-md h-screen">
      <div class="w-full">
        <form @submit.prevent="signUp">
          <div class="form-body max-w-xl mx-auto lg:p-20 px-8 lg:mt-10 space-y-8">
            <div class="form-head cursor-pointer">
              <!-- <img src="../../../assets/logo/logo.svg" alt="" class="w-10" /> -->
            </div>
            <div class="space-y-3">
              <h2 class="font-semibold text-gray-800 text-2xl">Create new account?</h2>
              <p class="text-gray-700">
                Please enter your information to register account.
              </p>
            </div>
            <button
              type="button"
              class="flex justify-center gap-2 border border-[#0c66ee] p-2 w-full rounded-md"
            >
              <!-- <img class="w-8" src="../../../assets/logo/google-logo.svg" alt="" /> -->
              <p class="mt-1 text-[#0c66ee]">Sign up with Google</p>
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
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                  placeholder=" "
                  required
                  v-model="email"
                />
                <label
                  for="floating_email"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >Email address</label
                >
              </div>
              <div class="relative z-0 w-full mb-6 group">
                <input
                  type="password"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                  placeholder=" "
                  required
                  v-model="password"
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
                  >I accept term of service
                </label>
              </div>
            </div>

            <button
              class="text-sm text-white bg-[#0c66ee] hover:bg-[#0c66ee]/80 p-3 w-full rounded-md"
            >
              Submit and Register
            </button>
            <NuxtLink to="/log-in" class="text-gray-700 hover:text-[#0c66ee]/80">
              Already have an account? Login
            </NuxtLink>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// import { createUserWithEmailAndPassword } from "@/plugins/firebase";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    // async signup() {
    //   try {
    //     const userCredential = await createUserWithEmailAndPassword(
    //       this.email,
    //       this.password
    //     );
    //     const user = userCredential.user;
    //   } catch (error) {
    //     console.error(error.message);
    //   }
    // },
  },
};
</script>
