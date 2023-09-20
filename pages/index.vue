<template>
  <div class="">
    <!-- Hero section -->
    <section id="hero" class="w-full">
      <BaseSection>
        <div class="col-span-12 lg:col-span-6 mt-12 xl:mt-10 space-y-4 sm:space-y-6 px-6 text-center sm:text-left">
          <span data-aos="fade-right" data-aos-once="true" class="text-base text-gradient font-semibold uppercase"
            >Time-Travel with Words </span
          ><span data-aos="fade-right" data-aos-once="true" class="text-gray-400 text-sm">- It's Free</span>
          <h1
            data-aos="fade-right"
            data-aos-once="true"
            class="text-[2.5rem] sm:text-5xl xl:text-6xl font-bold leading-tight capitalize sm:pr-8 xl:pr-10"
          >
            Craft Inspiring Messages to Your <span class="text-[#0c66ee]">Future </span> Self
          </h1>
          <p data-aos="fade-down" data-aos-once="true" data-aos-delay="300" class="paragraph hidden sm:block">
            Plan emails to be sent to both yourself and others in the future.
          </p>
          <div
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="700"
            class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-2"
          >
            <BaseButton class="max-w-full px-8 py-4 bg-gradient-to-r from-[#468ef9] to-[#0c66ee] text-white">
              Write to Future Self
            </BaseButton>
          </div>
        </div>
        <div class="hidden sm:block col-span-12 lg:col-span-6">
          <div class="w-full">
            <img
              data-aos="fade-up"
              data-aos-once="true"
              :src="require('~/assets/img/hero-image.webp')"
              class="-mt-4"
              alt=""
            />
          </div>
        </div>
      </BaseSection>
    </section>

    <!-- Getting started section -->
    <section class="max-w-full sm:mx-4 xl:mx-10 my-2 overflow-hidden">
      <div class="w-full py-16 flex flex-col items-center">
        <h2 data-aos="flip-down" class="text-3xl sm:text-4xl font-semibold text-center">Start sending Letters</h2>
        <div
          data-aos="fade-up"
          class="relative w-full flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 px-4 xl:px-10 mt-16 sm:mt-8"
        >
          <LandingStep v-for="step in steps" :key="step.title" :step="step" />
          <img
            :src="require('~/assets/img/getting-started/arrow.png')"
            class="hidden lg:inline-block absolute top-32 left-64 xl:left-[22rem] w-24 xl:w-[9.5rem]"
            alt=""
          />
          <img
            :src="require('~/assets/img/getting-started/arrow.png')"
            class="hidden lg:inline-block absolute top-32 right-64 xl:right-[22rem] w-24 xl:w-[9.5rem]"
            alt=""
          />
        </div>
      </div>
    </section>

    <!-- Advanced trading tools section -->
    <section class="bg-trading-tools py-16 max-w-full sm:mx-4 overflow-hidden">
      <div class="max-w-screen-xl px-4 sm:px-2 mx-auto grid grid-cols-12 gap-x-6">
        <LandingTradingToolImage class="sm:hidden" />
        <div data-aos="fade-right" class="col-span-12 lg:col-span-6 space-y-8 sm:space-y-6 px-4 sm:px-6 mt-8">
          <h2 class="text-4xl font-semibold">Why you should write letters?</h2>
          <div class="space-y-2">
            <h4 class="text-lg font-medium text-[#0c66ee]">Track your growth</h4>
            <p class="paragraph text-sm xl:text-base">
              Write letters to document your thoughts, emotions, and experiences over time. Receiving your letters in
              future helps you gain valuable insights into your personal growth, see how far you've come, and celebrate
              your achievements.
            </p>
          </div>

          <div class="space-y-2">
            <h4 class="text-lg font-medium text-[#0c66ee]">Celebrate Milestones and Memories</h4>
            <p class="paragraph text-sm xl:text-base">
              Use our platform to send letters to commemorate significant milestones, such as birthdays, anniversaries,
              or achievements.
            </p>
          </div>

          <div class="space-y-2">
            <h4 class="text-lg font-medium text-[#0c66ee]">Focus Review</h4>
            <p class="paragraph text-sm xl:text-base">
              Check in on your progress towards your goals and objectives to help stay on course, make necessary
              adjustments, and ensures you're consistently moving toward success.
            </p>
          </div>

          <div class="flex flex-col sm:flex-row">
            <BaseButton class="px-10 py-4 bg-inherit text-gradient border border-[#4A8FF6] text-base">
              Write a letter
            </BaseButton>
          </div>
        </div>
        <LandingTradingToolImage data-aos="fade-left" class="hidden sm:block" />
      </div>
    </section>
  </div>
</template>

<script>
import aosMixin from '@/mixins/aos'
export default {
  name: 'IndexPage',
  mixins: [aosMixin],
  data() {
    return {
      steps: [
        {
          img: 'sign-up.png',
          title: 'Create an Account',
          description: 'Create an account to get started on your messaging Journey.',
        },
        {
          img: 'fund.png',
          title: 'Write your letters',
          description: 'Write as much letters to the future, not just to yourself but others.',
        },
        {
          img: 'buy-crypto.png',
          title: 'Save & Send',
          description: 'Save & send your letters exactly when you want to.',
        },
      ],
    }
  },
}
</script>

<style scoped>
.text-header-gradient {
  background: rgb(57, 132, 244);
  background: linear-gradient(169.4deg, #3984f4 -6.01%, #0cd3ff 36.87%, #2f7cf0 78.04%, #0e65e8 103.77%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.bg-partner {
  background: url('../assets/img/partner/background.png');
  background-size: cover;
  background-position: center;
}
.bg-trading-tools {
  background: url('../assets/img/bg-trading-tools.webp');
  background-size: cover;
  background-position: center;
}
.max-h-0 {
  max-height: 0;
}
</style>
