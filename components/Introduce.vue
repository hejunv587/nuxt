<template>
    <div class="relative block z-0 text-2xl text-center">
        <h2 class="text-white text-4xl font-bold my-8">ABOUT FXTUL</h2>
        <p class="text-[#b6b4b1] text-lg max-w-2xl mx-auto break-words">FXTUL founded in Shenzhen, China, has been
            specializing in motorcycle repair testing and diagnostics for many years.</p>
    </div>
    <div class="lg:grid lg:grid-cols-3 gap-4 mt-6 h-full">
        <div v-for="(item, index) in items" :key="index">
            <TextCard :content="item" />
        </div>
    </div>
</template>
  
<script lang="ts" setup>
const items = [
    {
        title: "Unique Technology",
        text: "FXTUL has a factory that designs and develops products. With decades of experience in motorcycle maintenance, FXTUL's technicians can accurately understand the needs of motorcycle owners and develop products that truly meet the needs of customers. Whether you drive a Harley or a BMW motorcycle, we've got the right motorcycle tool for you."
    },
    {
        title: "Continuous Iterative Innovation",
        text: "FXTUL has a well-trained after-sales team that specializes in handling customer product issues and collecting customer feedback on products. For product suggestions, the after-sales team will promptly feedback to the product designers, who will then further adjust and optimize the product to provide better motorcycle repair product tools."
    },
    {
        title: "Our Vision",
        text: "We are committed to becoming the backbone of the motorcycle aftermarket. With craftsmanship spirit of craft and technology to create the outstanding charm of motorcycle products. Changing lives with technology makes it more convenient to repair motorbikes."
    }
]
</script>
  
<style scoped>
/* You can add custom styles here if needed */
</style>
  