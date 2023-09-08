<template>
    <div :class="[
        'border-2 rounded-xl',
        bigImg === imgURL.bigImage ? 'border-coral-red' : 'border-transparent',
        'cursor-pointer max-sm:flex-1'
    ]" @click="handleClick">
        <div class="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
            <img :src="imgURL.thumbnail" alt="img colletion" width="127" height="103.34" class="object-contain" />
        </div>
    </div>
</template>
  
<script setup lang="ts">

const { imgURL, changeBigImage, bigImg } = defineProps<{
    imgURL: {
        thumbnail: string;
        bigImage: string;
    };
    changeBigImage: (img: string) => void;
    bigImg: Ref<string>;
}>();


const handleClick = () => {
    if (bigImg.value !== imgURL.bigImage) {
        changeBigImage(imgURL.bigImage);
    }
};
</script>