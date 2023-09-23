<template>
  <nav id="navbar" class="relative z-10 w-full text-neutral-800">
    <div
      class="flex flex-col max-w-screen-xl px-6 mx-auto lg:items-center lg:justify-between lg:flex-row py-4"
    >
      <div class="flex flex-col lg:flex-row items-center space-x-4 xl:space-x-8">
        <div class="w-full flex flex-row items-center justify-between py-6">
          <div>
            <NuxtLink to="/" class="text-[#0c66ee] font-bold">MailToSelf</NuxtLink>
          </div>
          <button
            class="rounded-lg lg:hidden focus:outline-none focus:shadow-outline"
            @click="open = !open"
          >
            <SegmentIcon v-if="!open" :size="24" />
            <CloseIcon v-else :size="24" />
          </button>
        </div>
        <ul
          :class="[open ? 'flex' : 'hidden lg:flex']"
          class="text-gray-500 w-full h-auto flex flex-col flex-grow lg:items-center pb-4 lg:pb-0 lg:justify-center lg:flex-row origin-top duration-300 xl:space-x-2 space-y-3 lg:space-y-0"
        >
          <NuxtLink to="/write-letter" class="cursor-pointer truncate-text mr-4"
            >Write a Letter</NuxtLink
          >
          <NuxtLink to="/public-letters" class="cursor-pointer truncate-text"
            >Public Letters</NuxtLink
          >
        </ul>
      </div>
      <div :class="[open ? 'flex' : 'hidden lg:flex']" class="space-x-3">
        <NuxtLink
          to="/log-in"
          class="px-8 xl:px-10 py-3 mt-2 bg-inherit text-gradient border border-[#0c66ee] text-sm text-center rounded-full hover:shadow-md hover:shadow-[#0c66ee]/50 transition duration-300"
        >
          Login
        </NuxtLink>
        <NuxtLink
          to="sign-up"
          class="px-8 xl:px-10 py-3 mt-2 bg-gradient-to-r from-[#468ef9] to-[#0c66ee] text-white text-sm text-center rounded-full hover:shadow-md hover:shadow-[#0c66ee]/50 transition duration-300"
        >
          Sign Up
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "BaseNavbar",
  data() {
    return {
      open: false,
      dropdownNavbar: false,
    };
  },
  methods: {
    dropdownToggler() {
      this.dropdownNavbar = !this.dropdownNavbar;
    },
  },
};
</script>

<style scoped>
.truncate-text {
  white-space: nowrap; /* Prevent wrapping */
  overflow: hidden; /* Hide overflow */
  text-overflow: ellipsis; /* Display ellipsis (...) for truncated text */
  max-width: 150px; /* Adjust the max-width as needed */
}
</style>
