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
            <button class="bg-red-500 text-white p-2 mt-8">
                Join us
            </button>
        </div>
        <div class="lg:w-1/2">
            <h3>Power of Freedom—Motorcycle</h3> Power of Freedom—Motorcycle

            <p>A motorcycle is more than a means of transportation, it is a representative of the power of freedom. And a
                good set of motorcycle repair tools can make this freedom more durable and worry-free!</p>

        </div>
        <div class="lg:w-1/2">
            <img src="joinus2" alt="">
        </div>
    </div>
</template>
  
<script lang="ts" setup>
import joinus1 from "~/assets/images/joinus1.jpg";
import joinus2 from "~/assets/images/joinus2.jpg";

const joinUsItems = ref([
    {
        title: "Item 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "image1.jpg",
    },
    {
        title: "Item 2",
        description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        title: "Item 3",
        description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
        image: "image3.jpg",
    },
    {
        title: "Item 4",
        description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
        image: "image4.jpg",
    },
]);
</script>
  
<style scoped>
/* You can add custom styles here if needed */
</style>
  