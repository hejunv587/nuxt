<template>
    <div class="flex items-center">
        <template v-for="(star, index) in  5 " :key="index">
            <span>
                <svg :width="starSize" :height="starSize" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor" stroke="none" stroke-linecap="round" stroke-linejoin="round">
                    <defs>
                        <linearGradient :id="'star-gradient' + index" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop :offset="calculateOffset0(rating, index) + '%'"
                                style="stop-color: #ffb303; stop-opacity: 1" v-if="calculateOffset0(rating, index)" />
                            <stop :offset="calculateOffset1(rating, index) + '%'"
                                style="stop-color: gray; stop-opacity: 1" />
                        </linearGradient>
                    </defs>
                    <path
                        d="M12 2l2.366 7.098h6.268l-5.092 3.71 1.98 6.27L12 15.937l-5.522 3.24 1.98-6.27-5.092-3.71h6.268L12 2z"
                        :fill="starFill(index)" />
                </svg>
            </span>
        </template>
        <!-- <span>
            <svg :width="starSize" :height="starSize" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                fill="currentColor" stroke="none" stroke-linecap="round" stroke-linejoin="round">
                <defs>
                    <linearGradient id="star-gradient0" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="300%" style="stop-color: yellow; stop-opacity: 1" />
                        <stop offset="0%" style="stop-color: gray; stop-opacity: 1" />
                    </linearGradient>
                </defs>
                <path
                    d="M12 2l2.366 7.098h6.268l-5.092 3.71 1.98 6.27L12 15.937l-5.522 3.24 1.98-6.27-5.092-3.71h6.268L12 2z"
                    fill="url(#star-gradient0)" />
            </svg>
        </span>
        <span>
            <svg :width="starSize" :height="starSize" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                fill="currentColor" stroke="none" stroke-linecap="round" stroke-linejoin="round">
                <defs>
                    <linearGradient id="star-gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="200%" style="stop-color: yellow; stop-opacity: 1" />
                        <stop offset="0%" style="stop-color: gray; stop-opacity: 1" />
                    </linearGradient>
                </defs>
                <path
                    d="M12 2l2.366 7.098h6.268l-5.092 3.71 1.98 6.27L12 15.937l-5.522 3.24 1.98-6.27-5.092-3.71h6.268L12 2z"
                    fill="url(#star-gradient1)" />
            </svg>
        </span>
        <span>
            <svg :width="starSize" :height="starSize" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                fill="currentColor" stroke="none" stroke-linecap="round" stroke-linejoin="round">
                <defs>
                    <linearGradient id="star-gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="100%" style="stop-color: yellow; stop-opacity: 1" />
                        <stop offset="0%" style="stop-color: gray; stop-opacity: 1" />
                    </linearGradient>
                </defs>
                <path
                    d="M12 2l2.366 7.098h6.268l-5.092 3.71 1.98 6.27L12 15.937l-5.522 3.24 1.98-6.27-5.092-3.71h6.268L12 2z"
                    fill="url(#star-gradient2)" />
            </svg>
        </span>
        <span>
            <svg :width="starSize" :height="starSize" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                fill="currentColor" stroke="none" stroke-linecap="round" stroke-linejoin="round">
                <defs>
                    <linearGradient id="star-gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="50%" style="stop-color: yellow; stop-opacity: 1" />
                        <stop offset="50%" style="stop-color: gray; stop-opacity: 1" />
                    </linearGradient>
                </defs>
                <path
                    d="M12 2l2.366 7.098h6.268l-5.092 3.71 1.98 6.27L12 15.937l-5.522 3.24 1.98-6.27-5.092-3.71h6.268L12 2z"
                    fill="url(#star-gradient3)" />
            </svg>
        </span>
        <span>
            <svg :width="starSize" :height="starSize" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                fill="currentColor" stroke="none" stroke-linecap="round" stroke-linejoin="round">
                <defs>
                    <linearGradient id="star-gradient4" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style="stop-color: yellow; stop-opacity: 1" />
                        <stop offset="100%" style="stop-color: gray; stop-opacity: 1" />
                    </linearGradient>
                </defs>
                <path
                    d="M12 2l2.366 7.098h6.268l-5.092 3.71 1.98 6.27L12 15.937l-5.522 3.24 1.98-6.27-5.092-3.71h6.268L12 2z"
                    fill="url(#star-gradient4)" />
            </svg>
        </span> -->
    </div>
</template>
  
<script lang="ts" setup>
import { defineComponent, PropType } from 'vue';

const { rating, starSize } = defineProps(['rating', 'starSize'])

onMounted(() => {
    console.log("rating", rating)
})

const calculateOffset0 = (rating: number, index: number) => {
    const res = (rating - index) > 0 ? (rating - index) * 100 : 0
    console.log("calculateOffset0", rating, index, res)
    return res
}

const starFill = (index: number) => {
    return `url('#star-gradient${index}')`;
};

const calculateOffset1 = (rating: number, index: number) => {
    let res;
    if (rating - index <= 0) {
        res = 100
    } else if (rating - index > 0 && rating - index < 1) {
        res = (1 - rating + index) * 100
    } else {
        res = 0
    }
    console.log("calculateOffset1", rating, index, res)
    return res
}
</script>
  
<style scoped>
/* Add any custom styles here */
</style>
  