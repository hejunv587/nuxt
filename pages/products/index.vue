<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="(item, index) in products" :key="index">
        <ProductCard :product="item" />  
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "proudcts",
});

const { data: products } = await useFetch('https://fakestoreapi.com/products')
console.log(products)
</script>