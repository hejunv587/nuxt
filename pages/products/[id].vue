<script lang="ts" setup>
const { id } = useRoute().params;

const product = ref(null);
const reviews = ref([]);
const { data: res } = await useFetch(`/api/products/${id}`);
product.value = res.value;

// if (!product) {
//     throw createError({ statusCode: 404, statusMessage: 'Product not found' })
// }

// definePageMeta({
//     layout: "proudcts",
// });
if (res.value) {
  // for (const item of res.value.images) {
  //   // 获取 product 的 id
  //   const upload_id = item.id;

  //   // 调用 api 获取 product 的 url
  //   if (upload_id) {
  //     const url = await useFetch(`/api/geturl/${upload_id}`);
  //     item.url = url.data.value;
  //   }
  // }
  const imagePromises = res.value.images.map(async (item) => {
    if (item.id) {
      const url = await useFetch(`/api/geturl/${item.id}`);
      return { ...item, url: url.data.value };
    }
    return item;
  });
  res.value.images = await Promise.all(imagePromises);

  if (res.value && typeof res.value.functions === "string") {
    res.value.functions = res.value.functions.split(",");
  }
  if (res.value && typeof res.value.advantages === "string") {
    res.value.advantages = res.value.advantages.split(",");
  }
  if (res.value && typeof res.value.technical_parameters === "string") {
    res.value.technical_parameters = res.value.technical_parameters.split(",");
  }
  if (res.value && typeof res.value.services === "string") {
    res.value.services = res.value.services.split(",");
  }
  if (res.value && typeof res.value.whychoose === "string") {
    res.value.whychoose = res.value.whychoose.split(",");
  }
  if (res.value && typeof res.value.note === "string") {
    res.value.note = res.value.note.split(",");
  }
  // res.value.functions = res.value.functions.split(",");

  const review_res = await $fetch(`/api/review/${res.value.id}`);
  review_res.forEach(async (element) => {
    const imagePromises = element.images.map(async (item) => {
      if (item.id) {
        const url = await useFetch(`/api/geturl/${item.id}`);
        return { ...item, url: url.data.value };
      }
      return item;
    });
    element.images = await Promise.all(imagePromises);
  });
  reviews.value = review_res;
  // console.log("review_res", review_res);
}

// res.value.functions = res.value.functions.split(",");

product.value = res.value;
console.log("product_id", product.value);

// if (product.value) {
//   // product.value.functions = product.value.functions?.split(',')
//   // product.value.advantages = product.value.advantages.split(',
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
      <ProductDetail v-if="product" :product="product" :reviews="reviews" />
    </div>
  </div>
</template>
