<script lang="ts" setup>
import arrowRight from "~/assets/icons/arrow-right.svg";
import bigImg1 from "~/assets/images/DM301.png";
import bigImg2 from "~/assets/images/CT500.png";
import bigImg3 from "~/assets/images/AS502.png";
import bigImg from "~/assets/images/hero1.png";

// let bigImg = ref(bigImg1);

const statistics = [
  { value: "1k+", label: "Brands" },
  { value: "500+", label: "Shops" },
  { value: "250k+", label: "Customers" },
];

const newTools = [
  {
    thumbnail: bigImg1,
    bigImage: bigImg1,
  },
  {
    thumbnail: bigImg2,
    bigImage: bigImg2,
  },
  {
    thumbnail: bigImg3,
    bigImage: bigImg3,
  },
];

// const setBigImage = (img: string) => {
//   bigImg.value = img;
// };
</script>

<template>
  <section class="relative overflow-hidden bg-gray-900">
      <img
        :src="bigImg"
        alt="Hero Image"
        class="w-full h-auto md:h-full object-cover object-center transition-transform transform scale-100 md:scale-150 duration-300"
        :class="{ 'scale-150': isWideScreen }"
      />
  </section>
</template>
