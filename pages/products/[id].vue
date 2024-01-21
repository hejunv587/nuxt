<script lang="ts" setup>
const { id } = useRoute().params;

const product = ref(null);
const { data: res } = await useFetch(`/api/products/${id}`);
product.value = res.value;

// if (!product) {
//     throw createError({ statusCode: 404, statusMessage: 'Product not found' })
// }

// definePageMeta({
//     layout: "proudcts",
// });
if (res.value) {
  for (const item of res.value.images) {
    // 获取 product 的 id
    const upload_id = item.id;

    // 调用 api 获取 product 的 url
    if (upload_id) {
      const url = await useFetch(`/api/geturl/${upload_id}`);
      item.url = url.data.value;
    }
  }
  res.value.functions = res.value.functions.split(",");
}

// res.value.functions = res.value.functions.split(",");

product.value = res.value
console.log("product_id",product.value)

// if (product.value) {
//   // product.value.functions = product.value.functions?.split(',')
//   // product.value.advantages = product.value.advantages.split(',')
//   // product.value.technical_parameters = product.value.technical_parameters.split(',')
//   // product.value.services = product.value.services.split(',')
//   // product.value.whychoose = product.value.whychoose.split(',')
//   // product.value.note = product.value.note.split(',')

//   for (const item of product.value.images) {
//     // 获取 product 的 id
//     const upload_id = item.id;

//     // 调用 api 获取 product 的 url
//     if (upload_id) {
//       const url = await useFetch(`/api/geturl/${upload_id}`);
//       item.url = url.data.value;
//     }

//     //     // 添加 url 到 product
//     // product.url = url;
//   }
//   product.value.functions = product.value.functions.split(",");
//   // product.value.advantages = product.value.advantages.split(',')
//   // product.value.technical_parameters = product.value.technical_parameters.split(',')
//   // product.value.services = product.value.services.split(',')
//   // product.value.whychoose = product.value.whychoose.split(',')
//   // product.value.note = product.value.note.split(',')
// }
</script>

<template>
  <Head>
    <Title>福克菲FXFINE | {{ product.name }}</Title>
    <Meta name="description" :content="product.description" />
  </Head>

  <div class="bg-[#2d2d30]">
    <div class="container mx-auto">
      <ProductDetail v-if="product" :product="product" />
    </div>
  </div>
</template>
