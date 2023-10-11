<script lang="ts" setup>
import bigImg from "~/assets/images/hero1.jpg";
import slide1 from "~/assets/images/slide1.jpg";
import slide2 from "~/assets/images/slide2.jpg";
import slide3 from "~/assets/images/slide3.jpg";

const carouselSlides = [
  {
    imageSrc: slide1,
    alt: "Slide 1",
  },
  {
    imageSrc: slide2,
    alt: "Slide 2",
  },
  {
    imageSrc: slide3,
    alt: "Slide 3",
  },
  // Add more slide objects as needed
];

const currentIndex = ref(0);

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % carouselSlides.length;
};

const prevSlide = () => {
  currentIndex.value =
    (currentIndex.value - 1 + carouselSlides.length) % carouselSlides.length;
};

// Automatic slideshow
let intervalId = null;

const startSlideshow = () => {
  intervalId = setInterval(() => {
    nextSlide();
  }, 5000); // Change slides every 3 seconds (adjust as needed)
};

const stopSlideshow = () => {
  clearInterval(intervalId);
};

// Start automatic slideshow when the component is mounted
startSlideshow();

// Stop automatic slideshow when the component is unmounted
watch(
  () => currentIndex.value,
  () => {
    stopSlideshow();
    startSlideshow();
  }
);
</script>

<template>
  <section>
    <img :src="bigImg" alt="Hero Image" class="w-full max-h-screen" />
  </section>

  <!-- Carousel Image Area -->
  <div class="w-full max-h-screen z-0 relative">
    <div
      v-for="(slide, index) in carouselSlides"
      :key="index"
      :class="{
        'opacity-100': currentIndex === index,
        'opacity-0': currentIndex !== index,
      }"
      class="w-full h-full absolute transition-opacity duration-500"
    >
      <img :src="slide.imageSrc" :alt="slide.alt" class="w-full max-h-screen" />
    </div>

    <div class="w-screen h-5 bg-red-500 z-10"></div>
  </div>

  <div class="w-screen h-5 bg-red-500 z-10"></div>

  <div
    class="relative order-2 z-1 flex items-center justify-center"
  >
    <button
      type="button"
      class="text-opacity-75 text-current bg-transparent border-none cursor-pointer w-11 h-11 flex items-center justify-center"
      name="previous"
      aria-label="Previous slide"
      aria-controls="Slider-template--15631498969245__165595497866c7075a"
    >
      <svg
        aria-hidden="true"
        focusable="false"
        role="presentation"
        class="icon icon-caret"
        viewBox="0 0 10 6"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z"
          fill="currentColor"
        ></path>
      </svg>
    </button>
    <div class="my-0 mx-4.8 flex justify-center min-w-11">
      <div class="flex">
        <button
          v-for="(slide, index) in carouselSlides"
          :key="index"
          class="p-4 cursor-pointer inline-block border-none shadow-none underline underline-offset-[.3rem] bg-transparent text-base"
          :class="{
            'text-blue-500': currentIndex === index,
          }"
          aria-label="Load slide 1 of 3"
          aria-controls="Slider-template--15631498969245__165595497866c7075a"
          aria-current="true"
        >
          <span class="dot"></span>
        </button>
      </div>
    </div>
    <button
      type="button"
      class="slider-button slider-button--next"
      name="next"
      aria-label="Next slide"
      aria-controls="Slider-template--15631498969245__165595497866c7075a"
    >
      <svg
        aria-hidden="true"
        focusable="false"
        role="presentation"
        class="icon icon-caret"
        viewBox="0 0 10 6"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z"
          fill="currentColor"
        ></path>
      </svg></button
    ><button
      type="button"
      class="slideshow__autoplay slider-button no-js-hidden"
      aria-label="Pause slideshow"
    >
      <svg
        class="icon icon-pause"
        viewBox="0 0 8 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        focusable="false"
        aria-hidden="true"
      >
        <path
          d="M1.2 0.75C0.813401 0.75 0.5 0.985051 0.5 1.275V10.725C0.5 11.0149 0.813401 11.25 1.2 11.25C1.5866 11.25 1.9 11.0149 1.9 10.725V1.275C1.9 0.985051 1.5866 0.75 1.2 0.75Z"
          fill="currentColor"
        ></path>
        <path
          d="M6.8 0.75C6.4134 0.75 6.1 0.985051 6.1 1.275V10.725C6.1 11.0149 6.4134 11.25 6.8 11.25C7.1866 11.25 7.5 11.0149 7.5 10.725V1.275C7.5 0.985051 7.1866 0.75 6.8 0.75Z"
          fill="currentColor"
        ></path>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
        role="presentation"
        class="icon icon-play"
        fill="none"
        viewBox="0 0 10 14"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1.48177 0.814643C0.81532 0.448245 0 0.930414 0 1.69094V12.2081C0 12.991 0.858787 13.4702 1.52503 13.0592L10.5398 7.49813C11.1918 7.09588 11.1679 6.13985 10.4965 5.77075L1.48177 0.814643Z"
          fill="currentColor"
        ></path>
      </svg>
    </button>
  </div>

  <div class="text-white z-10">
    <span v-for="(slide, index) in carouselSlides" :key="index">
      <span
        :class="{
          'text-blue-500': currentIndex === index,
        }"
      >
        &bull;
        <!-- Use a Unicode bullet character here (•) -->
      </span>
    </span>
  </div>

  <!-- Carousel Controls (for manual navigation) -->
  <div class="absolute bottom-4 left-4 flex space-x-2">
    <button @click="prevSlide">Previous</button>
    <button @click="nextSlide">Next</button>
  </div>

  <!-- Carousel Indicators -->
  <!-- <div class="absolute bottom-4 right-4 flex space-x-2 text-white">
    <span v-for="(slide, index) in carouselSlides" :key="index">
      <span
        :class="{
          'text-blue-500': currentIndex === index,
        }"
      >
        &bull;
      </span>
    </span>
  </div> -->
</template>
