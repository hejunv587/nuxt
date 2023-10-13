<template>
    <div class="lg:grid lg:grid-cols-3 gap-4 mt-6 h-full">
        <div v-for="(item, index) in items" :key="index">
            <TextCard :content="item" />
        </div>
    </div>
</template>
  
<script lang="ts" setup>
const items = [
    {
        title: "Dedicated Research and Innovation",
        text: "FXTUL has always maintained a revolutionary spirit of innovation and exploration, producing superior motorcycle repair products based on our years of experience in motorcycle repair. We also respect the feedback needs of all our loyal users. Feel free to contact us if you have any suggestions for product upgrades. We want to create more products that fit our users' needs!"
    },
    {
        title: "Win-win cooperation",
        text: "We support OEM and ODM services to share technology and market with you. We also have a complete motorcycle dealer system and provide 24-hour sales support. Our sales representatives will also help you understand the product and business faster and better before the sale. Let's work together and become experts in motorcycle maintenance together!"
    },
    {
        title: "Customer Centric",
        text: "FXTUL always puts the customer first. We promise a three-year lifetime warranty on all our products. We have a strict quality control department to ensure that each product is complete and usable before shipment. We listen carefully to any feedback from our customers to make every customer who trusts FXTUL feel better about our products and services!"
    }
]
</script>
  
<style scoped>
/* You can add custom styles here if needed */
</style>
  