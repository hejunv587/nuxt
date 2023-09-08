<template>
    <div class="flex flex-1 flex-col w-full max-sm:w-full">
        <img :src="product.imgURL" :alt="name" class="w-[285px] h-[243px]" />
        <!-- <div class="mt-8 flex justify-start gap-2.5">
            <img :src="star" alt="rating icon" width="24" height="24" />
            <p class="font-montserrat text-xl leading-normal text-slate-gray">(4.5)</p>
        </div> -->
        <h3 class="mt-2 text-lg leading-normal font-semibold font-palanquin text-center">{{ product.name }}</h3>
        <!-- <p class="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal">{{ price }}</p> -->
    </div>
</template>
  
<script setup lang="ts">
const { product } = defineProps(['product']);

// const props = defineProps({
//     imgURL: String,
//     name: String,
//     price: String,
//     star: String,
// });
</script>
  