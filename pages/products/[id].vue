<script lang="ts" setup>
const { id } = useRoute().params
const uri = 'https://fakestoreapi.com/products/' + id

const { data: product } = await useFetch(uri, { key: id })
console.log(product)

definePageMeta({
    layout: "proudcts",
});
</script>

<template>
    <div>
        <ProductDetail :product="product" />
    </div>
</template>
