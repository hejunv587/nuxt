<template>
    <div class="bg-[#2d2d30]">
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
            <div class="p-7 w-full md:w-1/2 md:h-screen">
                <h2 class="text-4xl my-7 text-white">{{ product.name }}</h2>
                <!-- <p class="text-xl my-7">Price - ${{ product.price }}</p> -->
                <h3 class="font-bold border-b-2 mb-4 pb-2 text-white">Product description:</h3>
                <p class="mb-7 text-[#b6b4b1]">{{ product.description }}</p>
            </div>
        </div>
    </div>
</template>
  
<script setup>
const { product } = defineProps(['product'])
console.log("product detail", product)

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
const initializeVisibleThumbnails = () => {
    //   const startIndex = currentPage.value * itemsPerPage;
    visibleThumbnails.value = product.images.slice(currentIndex.value, gridColumns);
};

// Update visible thumbnails when the screen width changes
watch(gridColumns, () => {
    initializeVisibleThumbnails();
});

const res_src = ref()
const res_thb = ref()
res_src.value = product.images[currentIndex.value].src
res_thb.value = product.images[currentIndex.value].thumbnail

const selectImage = (index) => {
    currentIndex.value = index;
    res_src.value = product.images[currentIndex.value].src

}

const changeVisibleThumbnails = (steps) => {
    //更改可见缩略图列表的起始索引
    currentIndex.value = currentIndex.value + steps;
    if (currentIndex.value <= 0) {
        currentIndex.value = 0
    } else if (currentIndex.value + gridColumns.value >= product.images.length) {
        currentIndex.value = product.images.length - gridColumns.value
    }

    initializeVisibleThumbnails()
}

const handleResize = () => {
    screenWidth.value = window.innerWidth;
}

// Initialize visible thumbnails on component mount
onMounted(() => {
    window.addEventListener('resize', handleResize);
    initializeVisibleThumbnails();
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize);
})

// Handle window resize to update visible thumbnails
// window.addEventListener('resize', () => {
//     initializeVisibleThumbnails()
// })

</script>
  
<style scoped></style>