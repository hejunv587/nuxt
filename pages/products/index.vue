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

useHead({
  title: 'Nuxt Autool | Merch',
  meta: [
    { name: 'description', content: 'Nuxt 3 Autool Merch' }
  ]
})

const { data: products } = await useFetch('https://fakestoreapi.com/products')
</script>