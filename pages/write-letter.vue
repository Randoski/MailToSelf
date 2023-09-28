<template>
  <section class="bg-trading-tools max-w-full sm:mx-4 mt-[-16px] overflow-hidden">
    <div class="max-w-screen-xl py-4 px-6 mx-auto">
      <form class="flex flex-col md:flex-row h-screen md:h-auto space-x-8">
        <div class="w-full md:w-3/4 h-screen md:h-auto">
          <!-- Letter Head -->
          <div class="relative z-0 w-full mb-4 group">
            <input
              type="text"
              class="font-patrick-hand block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-1 border-gray-100 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
              v-model="letterSubject"
              placeholder="A mail from (Date)"
              required
              autofocus
            />
          </div>

          <!-- Letter Body -->
          <div class="h-screen md:h-auto relative">
            <textarea
              type="text"
              class="font-patrick-hand block py-2.5 px-3 w-full text-gray-900 bg-transparent border-1 border-[#0c66ee] rounded-lg focus:outline-none focus:ring-0 focus:border-primary"
              v-model="letterBody"
              placeholder="Dear Future Me,"
              style="resize: none"
              rows="22"
            ></textarea>
          </div>
        </div>

        <!-- Letter Details -->
        <div class="w-full md:w-1/4 text-sm mt-4">
          <!-- Date -->
          <div>
            <div class="flex justify-between">
              <p>Deliver In</p>
              <p>or choose a <span class="text-[#0c66ee] cursor-pointer">date</span></p>
            </div>
          </div>

          <!-- Privacy -->
          <p>Privacy</p>
          <div class="flex justify-center space-x-4">
            <button
              @click="privacy = 'private'"
              :class="{ 'bg-[#0c66ee] text-white': selectedOption === 'private' }"
              class="px-4 py-2 rounded-full border border-[#0c66ee]"
            >
              Private
            </button>
            <button
              @click="privacy = 'public'"
              :class="{ 'bg-[#0c66ee] text-white': selectedOption === 'public' }"
              class="px-4 py-2 rounded-full border border-[#0c66ee]"
            >
              Public (Anonymous)
            </button>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      letterSubject: "A mail from (Date)",
      letterBody: "Dear future Me,",
      privacy: "private",
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap");

.font-patrick-hand {
  font-family: "Patrick Hand", cursive;
}
</style>
