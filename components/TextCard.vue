<template>
    <div
        class="block bg-[#353538] p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 h-full">
        <h5 class="mb-4 text-xl font-medium leading-tight text-white">
            {{ content.title }}
        </h5>
        <p class="mb-4 text-base text-[#b6b4b1] leading-relaxed">
            {{ content.text }}
        </p>
    </div>
</template>

<script lang="ts" setup>

const { content } = defineProps<{
    content: {
        title: string;
        text: string;
    };
}>();

</script>
  
<style scoped>
/* You can add custom styles here if needed */
</style>
  