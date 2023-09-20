<template>
  <footer class="max-w-screen-xl px-8 mx-auto">
    <div class="py-4 sm:py-4 text-center text-sm text-[#555555]">
      &copy; Copyright {{ currentYear }}
      <span class="underline hover:text-black"
        ><a href="mailto:monyerandy@yahoo.com">Randy Monye</a></span
      >. All rights reserved
    </div>
  </footer>
</template>

<script>
export default {
  name: "BaseFooter",
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>
