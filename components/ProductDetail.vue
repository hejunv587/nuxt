<template>
    <div class="bg-[#2d2d30]">
        <div class="flex flex-col md:flex-row">
            <div class="p-7 w-full md:w-1/2 md:h-screen flex flex-col">
                <div class="max-h-[80%] h-auto">
                    <img :src="res_src" class="mx-auto h-full w-full object-contain object-top" />
                </div>

                <div class="h-[20%] flex flex-col mt-4">
                    <button @click="changeVisibleThumbnails" class="absolute left-0 top-1/2 transform -translate-y-1/2">
                        <!-- Left arrow icon -->
                    </button>
                    <div class="grid grid-cols-3 sm:grid-cols-5 gap-2">
                        <div v-for="(image, index) in product.images" :key="index">
                            <div class="cursor-pointer" @click="selectImage(index)"  
                                :class="{ 'border border-white': currentIndex === index }">
                                <img :src="image.thumbnail" alt="Thumbnail" class="w-full h-auto" />
                            </div>
                        </div>
                    </div>
                    <button @click="changeVisibleThumbnails" class="absolute right-0 top-1/2 transform -translate-y-1/2">
                        <!-- Right arrow icon -->
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
const currentIndex = ref(0)
const res_src = ref()
const res_thb = ref()
res_src.value = product.images[currentIndex.value].src
res_thb.value = product.images[currentIndex.value].thumbnail

const selectImage = (index)=> {
    currentIndex.value = index;
}

// changeVisibleThumbnails(step) {
//     // 更改可见缩略图列表的起始索引
//     // const newStartIndex = this.visibleThumbnailStartIndex + step;
//     // if (newStartIndex >= 0 && newStartIndex <= this.product.images.length - this.visibleThumbnailCount) {
//     //     this.visibleThumbnailStartIndex = newStartIndex;
//     // }
// }

</script>
  
<style scoped></style>