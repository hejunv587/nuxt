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

const chooseSlide = (index: number) => {
  currentIndex.value = index;
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

  <div id="carouselExampleCaptions" class="relative" data-te-carousel-init data-te-ride="carousel">
    <!--Carousel indicators-->
    <div class="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
      data-te-carousel-indicators>
      <button v-for="(slide, index) in carouselSlides" :key="index" :class="{
        'opacity-100': currentIndex === index,
        'opacity-50': currentIndex !== index,
      }" type="button"
        class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
        @click="chooseSlide(index)"></button>
    </div>

    <!--Carousel items-->
    <div class="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
      <!--First item-->
      <div
        v-for="(slide, index) in carouselSlides" :key="index"
        class="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
        :class="{
          'hidden': currentIndex !== index
        }" style="backface-visibility: hidden">
        <img :src="slide.imageSrc" :alt="slide.alt" class="block w-full"  />
        <!-- <div class="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
          <h5 class="text-xl">First slide label</h5>
          <p>
            Some representative placeholder content for the first slide.
          </p>
        </div> -->
      </div>
    </div>

    <!--Carousel controls - prev item-->
    <button @click="prevSlide"
      class="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
      type="button" data-te-target="#carouselExampleCaptions" data-te-slide="prev">
      <span class="inline-block h-8 w-8">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="h-6 w-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </span>
      <span
        class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Previous</span>
    </button>
    <!--Carousel controls - next item-->
    <button @click="nextSlide"
      class="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
      type="button" data-te-target="#carouselExampleCaptions" data-te-slide="next">
      <span class="inline-block h-8 w-8">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="h-6 w-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </span>
      <span
        class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Next</span>
    </button>
  </div>

</template>
