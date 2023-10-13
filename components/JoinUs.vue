<template>
    <div class="lg:grid lg:grid-cols-2">
        <div class="">
            <img :src="joinus1" alt="" class="block w-full">
        </div>
        <div class="py-24 px-28 text-2xl">
            <ul class="list-disc ml-6 text-white space-y-4">
                <li>Support wholesale purchasing</li>
                <li>Support OEM customization</li>
                <li>Global recruiting dealer</li>
            </ul>
            <button class="bg-[#8b2323] text-white p-2 mt-8">
                Join us
            </button>
        </div>
        <div class="py-24 px-28 bg-red-800 text-white h-full flex flex-col p-16 md:p-24 relative z-10 justify-center">
            <h3 class="text-2xl mb-4 text-left ">Power of Freedom—Motorcycle</h3>

            <p class="justify-center items-center">A motorcycle is more than a means of transportation, it is a representative of the power of freedom. And a good set of motorcycle repair tools can make this freedom more durable and worry-free!</p>
        </div>
        <div class="">
            <img :src="joinus2" alt="" class="block w-full">
        </div>
    </div>
</template>
  
<script lang="ts" setup>
import joinus1 from "~/assets/images/joinus1.jpg";
import joinus2 from "~/assets/images/joinus2.jpg";


</script>
  
<style scoped>
/* You can add custom styles here if needed */
</style>
  