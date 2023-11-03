<script lang="ts" setup>
const { id } = useRoute().params
// const uri = 'https://fakestoreapi.com/products/' + id

// const { data: product } = await useFetch(uri, { key: id })

// const  product  = await useFetch('/api/products/R1')
const { data: product, error, loading } = useFetch(`/api/products/${id}`)
console.log("product", product)

if (!product) {
    throw createError({ statusCode: 404, statusMessage: 'Product not found' })
}


// definePageMeta({
//     layout: "proudcts",
// });
</script>

<template>
    <Head>
        <Title>Nuxt Autool | {{ product.name }}</Title>
        <Meta name="description" :content="product.description" />
    </Head>

    <div class="bg-[#2d2d30]">
        <div class="container mx-auto">
            <ProductDetail v-if="!loading" :product="product" />
        </div>
    </div>
</template>
