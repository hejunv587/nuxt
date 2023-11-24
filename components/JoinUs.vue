<template>
    <div class="lg:grid lg:grid-cols-2">
        <div class="">
            <img :src="joinus1" alt="" class="block w-full">
        </div>
        <div class="py-24 px-28 text-2xl">
            <ul class="list-disc ml-6 text-white space-y-4">
                <li>支持批发采购</li>
                <li>支持OEM定制</li>
                <li>全球诚招经销商</li>
            </ul>
            <button class="bg-[#8b2323] text-white p-2 mt-8">
                <a href="/becomedealer">成为经销商</a>
            </button>
        </div>
        <div class="py-24 px-28 bg-red-800 text-white h-full flex flex-col p-16 md:p-24 relative z-10 justify-center">
            <h3 class="text-2xl mb-4 text-left ">自由的力量--摩托车</h3>

            <p class="justify-center items-center">摩托车不仅仅是一种交通工具,它更是自由力量的代表.而一套好的摩托车智能设备,可以让这种自由更安全!</p>
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
  