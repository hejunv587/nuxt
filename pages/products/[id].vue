<script lang="ts" setup>
const { id } = useRoute().params
const uri = 'https://fakestoreapi.com/products/' + id

const { data: product } = await useFetch(uri, { key: id })

if (!product.value) {
    throw createError({ statusCode: 404, statusMessage: 'Product not found' })
}


// definePageMeta({
//     layout: "proudcts",
// });
</script>

<template>
    <Head>
        <Title>Nuxt Autool | {{ product.title }}</Title>
        <Meta name="description" :content="product.description" />
    </Head>

    <div>
        <ProductDetail :product="product" />
    </div>
</template>
