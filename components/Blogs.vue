<template>
    <div class="flex flex-col items-center justify-center">
        <h2 class="font-palanquin capitalize text-4xl lg:max-w-lg font-bold text-white">
            新闻动态
        </h2>
        <p class="mt-2 lg:max-w-lg font-montserrat text-[#b6b4b1] text-lg leading-7">聚合公司最新新闻资讯，新品发布信息,展览及行业最新动态等。</p>
    </div>
    <div class="lg:grid lg:grid-cols-3 gap-8 m-4">
        <div v-for="(item, index) in blogs" :key="index"
            class="block bg-black shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <div class="relative overflow-hidden bg-cover bg-no-repeat" data-te-ripple-init data-te-ripple-color="light">
                <img class="rounded-t-lg" :src="item.image" alt="" />
                <a href="#!">
                    <div
                        class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                    </div>
                </a>
            </div>
            <div class="p-6">
                <h5 class="mb-2 text-2xl font-medium leading-tight text-white dark:text-neutral-50">
                    {{ item.title }}
                </h5>
                <p class="mb-2 text-lg text-white">
                    {{ item.date }}
                </p>
                <p class="mb-4 text-base text-[#b6b4b1] dark:text-neutral-200">
                    {{ item.description }}
                </p>
                <!-- <button type="button"
                    class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    data-te-ripple-init data-te-ripple-color="light">
                    Button
                </button> -->
            </div>
        </div>
    </div>
    <button type="button"
        class="block mx-auto text-center bg-[#8b2323] px-6 py-3 text-base font-medium uppercase leading-normal text-white "
        data-te-ripple-init data-te-ripple-color="light">
        查看更多
    </button>
</template>
  
<script lang="ts" setup>
import blog1 from "~/assets/images/blog1.jpg";
import blog2 from "~/assets/images/blog2.jpg";
import blog3 from "~/assets/images/blog3.jpg";

const blogs = ref([
    {
        title: "Is it necessary to buy motorcycle diagnostic tool?",
        date: "2023-10-13",
        description: "What is a motorcycle diagnostic tool? A motorcycle diagnostic tool is a device that helps mechanics and enthusiasts diagnose problems with their motorcycles. These tools are similar to the diagnostic...",
        image: blog1,
    },
    {
        title: "Do you know how motorcycle parts are classified?",
        date: "2023-05-13",
        description: "Motorcycle parts industry common professional words Type of vehicle: motorcycle, cub, scooter, moped scooter, dirt bike, ATV, UTV, Go kart, pocket bike Steering and control system: front fork, handle, handle grip, connecting...",
        image: blog2,
    },
    {
        title: "7 Essential Motorcycle Accessories for Motorcyc...",
        date: "2023-05-13",
        description: "Motorcycle helmet A motorcycle helmet is one of the most essential parts of your cycling kit. And in many places, it is legal to wear a helmet while riding. The...",
        image: blog3,
    }
]);
</script>
  
<style scoped>
/* You can add custom styles here if needed */
</style>
  