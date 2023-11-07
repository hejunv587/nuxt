<template>
    <div class="bg-[#2d2d30]" ref="fullscreenContainer">
        <div class="flex flex-col md:flex-row">
            <div class="p-7 w-full md:w-1/2 md:h-screen flex flex-col">
                <div class="max-h-[80%] h-auto">
                    <img :src="res_src" class="mx-auto h-full w-full object-contain object-top" />
                </div>

                <div class="max-h-[20%] flex flex-row mt-4 w-full items-center relative justify-between">
                    <button @click="changeVisibleThumbnails(-3)" class="h-full">
                        <!-- Left arrow icon -->
                        <span class="inline-block h-8 w-8 relative ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="h-6 w-6 absolute left-0 text-white">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </span>
                    </button>
                    <div class="flex-grow grid grid-cols-3 sm:grid-cols-5 gap-2">
                        <div v-for="(image, index) in visibleThumbnails" :key="index">
                            <div class="cursor-pointer" @click="selectImage(index)"
                                :class="{ 'border border-white': currentIndex === index }">
                                <img :src="image.thumbnail" alt="Thumbnail" class="w-full h-auto" />
                            </div>
                        </div>
                    </div>
                    <button @click="changeVisibleThumbnails(+3)" class="h-full">
                        <!-- Right arrow icon -->
                        <span class="inline-block h-8 w-8 relative">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="h-6 w-6 absolute right-0 text-white">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </span>
                    </button>
                </div>


            </div>
            <div ref="scrollContainer" class="p-7 w-full md:w-1/2 md:h-screen overflow-y-auto no-scrollbar">
                <h2 class="text-4xl my-7 text-white">{{ product.name }}</h2>
                <!-- <p class="text-xl my-7">Price - ${{ product.price }}</p> -->
                <h3 class="font-bold border-b-2 mb-4 pb-2 text-white">Product description:</h3>
                <p class="mb-7 text-[#b6b4b1]">{{ product.description }}</p>

                <h3 class="font-bold mb-4 pb-2 text-white">Product overview:</h3>
                <p class="mb-7 text-[#b6b4b1]">{{ product.overview }}</p>

                <h3 class="font-bold mb-4 pb-2 text-white">Product functions:</h3>
                <div class="mb-7">
                    <ul class="list-disc pl-5">
                        <li v-for="(item, index) in product.functions" :key="index" class="mb-2 text-[#b6b4b1]">{{ item }}
                        </li>
                    </ul>
                </div>

                <h3 class="font-bold mb-4 pb-2 text-white">Product advantages:</h3>
                <div>
                    <ul class="list-disc pl-5">
                        <li v-for="(item, index) in product.advantages" :key="index" class="mb-2 text-[#b6b4b1]">{{ item }}
                        </li>
                    </ul>
                </div>

                <h3 class="font-bold mb-4 pb-2 text-white mt-7">Technical Parameters:</h3>
                <div>
                    <ul class="list-disc pl-5">
                        <li v-for="(item, index) in product.technical_parameters" :key="index" class="mb-2 text-[#b6b4b1]">
                            {{ item }}
                        </li>
                    </ul>
                </div>

                <div v-for="(item, index) in product.about" :key="index" class="mt-7">
                    <h3 class="font-bold mb-4 pb-2 text-white">About {{ item.name }}:</h3>
                    <p class="text-[#b6b4b1]">{{ item.desc }}</p>
                </div>

                <h3 class="font-bold mb-4 pb-2 text-white mt-7">Services:</h3>
                <div>
                    <ul class="list-disc pl-5 mb-7">
                        <li v-for="(item, index) in product.services" :key="index" class="mb-2 text-[#b6b4b1]">
                            {{ item }}
                        </li>
                    </ul>
                </div>

                <h3 class="font-bold mb-4 pb-2 text-white mt-7">Why Choose FXFINE:</h3>
                <div>
                    <ul class="list-disc pl-5 mb-7">
                        <li v-for="(item, index) in product.whychoose" :key="index" class="mb-2 text-[#b6b4b1]">
                            {{ item }}
                        </li>
                    </ul>
                </div>

                <h3 class="font-bold mb-4 pb-2 text-white mt-7">Note:</h3>
                <div>
                    <ul class="list-disc pl-5 mb-7">
                        <li v-for="(item, index) in product.note" :key="index" class="mb-2 text-[#b6b4b1]">
                            {{ item }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { Product } from '../types/product';

const scrollY = ref(0);
const lastScrollY = ref(0);
const scrollDirection = ref('down');

// const { product } = defineProps(['product'])
// const product: Product = defineProps(['product'])
const {
    product = undefined as Product | undefined
} = defineProps(['product'])

const screenWidth = ref(0)
const currentIndex = ref(0);
const itemsPerPageNarrow = 3; // Number of thumbnails to show on narrow screens
const itemsPerPageWide = 5; // Number of thumbnails to show on wide screens
// const currentPage = ref(0);

// Create a list of visible thumbnails
const visibleThumbnails = ref([]);

// Calculate the number of thumbnails to show based on screen width
const gridColumns = computed(() => {
    return screenWidth.value < 640 ? itemsPerPageNarrow : itemsPerPageWide;
});

// Initialize the visible thumbnails list
// const initializeVisibleThumbnails = () => {
//     //   const startIndex = currentPage.value * itemsPerPage;
//     console.log("initializeVisibleThumbnails", currentIndex.value, gridColumns.value)
//     console.log("product.images", product.images)
//     const images = product.images.value
//     console.log("images", images)
//     const thumbnails = images.slice(currentIndex.value, currentIndex.value + gridColumns.value)
//     console.log("thumbnails", thumbnails)
//     visibleThumbnails.value = thumbnails.value.map((thumbnail) => thumbnail.value);
//     // visibleThumbnails.value = product.images.slice(currentIndex.value, gridColumns.value);
// };

const initializeVisibleThumbnails = () => {
    const images = product.images;
    const thumbnails = [];

    for (let i = currentIndex.value; i < currentIndex.value + gridColumns.value; i++) {
        if (i < images.length) {
            thumbnails.push(images[i]);
        }
    }

    visibleThumbnails.value = thumbnails;
};

// Update visible thumbnails when the screen width changes
watch(gridColumns, () => {
    initializeVisibleThumbnails();
});

const res_src = ref()
const res_thb = ref()
res_src.value = product.images[currentIndex.value].src
res_thb.value = product.images[currentIndex.value].thumbnail

const selectImage = (index: number) => {
    currentIndex.value = index;
    res_src.value = product.images[currentIndex.value].src

}

const changeVisibleThumbnails = (steps: number) => {
    //更改可见缩略图列表的起始索引
    currentIndex.value = currentIndex.value + steps;
    if (currentIndex.value <= 0) {
        currentIndex.value = 0
    } else if (currentIndex.value + gridColumns.value >= product.images.length) {
        currentIndex.value = product.images.length - gridColumns.value
    }

    console.log("changeVisibleThumbnails", currentIndex.value, gridColumns.value)

    initializeVisibleThumbnails()
}

const handleResize = () => {
    screenWidth.value = window.innerWidth;
}


const scrollContainer = ref<HTMLElement | null>(null);
const fullscreenContainer = ref<HTMLElement | null>(null);

const handlePageScroll = () => {
    scrollY.value = window.scrollY
    if (scrollY.value > lastScrollY.value) {
        scrollDirection.value = 'down';
    } else {
        scrollDirection.value = 'up';
    }
    lastScrollY.value = scrollY.value;

    // console.log("scrollDirection", lastScrollY.value, scrollY.value,scrollDirection.value)

    const scrollContainerEl = scrollContainer.value;
    // 将整个页面的滚动位置设置为局部元素的滚动位置
    if (scrollContainerEl) {

        // 获取局部滚动容器的可见区域
        const containerTop = scrollContainerEl.clientTop;
        const containerHeight = scrollContainerEl.clientHeight;

        // console.log("scrollContainerEl",scrollContainer.value?.scroll)

        // console.log("handlePageScroll", window.scrollY, window.innerHeight ,scrollContainerEl.scrollTop,scrollContainerEl.scrollHeight,containerHeight)

        // 判断是否滚动到局部滚动容器的底部
        if (scrollContainerEl.scrollTop + scrollContainerEl.clientHeight < scrollContainerEl.scrollHeight) {
        //     // 如果滚动到局部滚动容器的底部，将滚动事件传递给局部容器
        //     scrollContainerEl.scrollTop += 10;
        //     window.scrollTo(0,10)
        //     lastScrollY.value = 0 
        //     // event.preventDefault();
        //     return false;
            console.log("scrollContainerEl",scrollContainer.value?.scroll)

            return scrollContainer.value?.sc
        }

        // if (scrollContainerEl.scrollTop + containerHeight < scrollContainerEl.scrollHeight) {
        //     // 如果滚动到局部滚动容器的底部，将滚动事件传递给局部容器
        //     scrollContainerEl.scrollTop += 10;
        //     window.scrollTo(0, scrollContainerEl.scrollTop);
        //     // 停止处理全局滚动事件
        //     return false;
        // }

        // // 处理向上滚动
        // if (scrollDirection.value == 'up' && scrollContainerEl.scrollTop > 0) {
        //     scrollContainerEl.scrollTop -= 10;
        //     window.scrollTo(0, scrollContainerEl.scrollTop);
        //     // 停止处理全局滚动事件
        //     return false;
        // }
    }
}

// Initialize visible thumbnails on component mount
onMounted(() => {
    const scrollContainerEl = scrollContainer.value;
    const fullscreenContainerEl = fullscreenContainer.value;

    console.log("scrollContainerEl", scrollContainerEl)

    window.addEventListener("scroll", handlePageScroll);

    gridColumns.value = 5
    screenWidth.value = window.innerWidth
    window.addEventListener('resize', handleResize);
    initializeVisibleThumbnails();
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize);
    window.removeEventListener("scroll", handlePageScroll);
})

// Handle window resize to update visible thumbnails
// window.addEventListener('resize', () => {
//     initializeVisibleThumbnails()
// })

</script>
  
<style scoped></style>