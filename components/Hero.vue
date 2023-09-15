<script lang="ts" setup>
import arrowRight from '~/assets/icons/arrow-right.svg'
import bigImg1 from '~/assets/images/DM301.png'
import bigImg2 from '~/assets/images/CT500.png'
import bigImg3 from '~/assets/images/AS502.png'

let bigImg = ref(bigImg1)

const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
]

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
    }
]

const setBigImage = (img: string) => {
    bigImg.value = img
}
</script>

<template>
    <section class="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-w-[1440px] my-0 mx-auto">
        <div class="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:sm:px-16 max-xl:sm:px-8 pt-28">
            <!-- <p class="text-xl font-montserrat text-coral-red">Our Summer collections</p> -->
            <h1 class="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
                <span class="xl:bg-white xl:whitespace-nowrap relative pr-10">新 品 上 市</span>
                <br>
                <span class="text-coral-red inline-block mt-3 text-6xl">Autool</span> <span class="text-6xl">Devices</span> 
            </h1>
            <p class="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">行车无忧，从检测开始. Autool伴您安全出行</p>

            <HeroButton label="了解更多" :icon="arrowRight" />

            <div class="flex gap-16 mt-16 justify-star items-start w-full">
                <div v-for="(item, index) in statistics" :key="index">
                    <p class="text-4xl font-palanquin font-bold">{{ item.value }}</p>
                    <p class="text-slate-gray font-montserrat leading-7">{{ item.label }}</p>
                </div>
            </div>
        </div>

        <div
            class="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
            <img :src="bigImg" alt="dm301 colletion" width="610" height="502"
                class="object-contain relative z-10 scale-125" />

            <div class="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
                <div v-for="(image, index) in newTools" :key="index">
                    <HeroCard :index="index" :imgURL="image" :changeBigImage="setBigImage" :bigImg="bigImg" />
                </div>
            </div>
        </div>


    </section>
</template>
