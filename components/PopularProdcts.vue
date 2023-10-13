<template>
  <section id="popularproducts" class="items-center w-full my-0 mx-auto">
    <div class="flex flex-col items-center justify-center">
      <h2 class="font-palanquin capitalize text-4xl lg:max-w-lg font-bold text-white">
        热门产品
      </h2>
      <p class="mt-2 lg:max-w-lg font-montserrat text-[#b6b4b1] text-lg leading-7">AUTOOL自主研发，推陈出新了众多品质卓越的产品</p>
    </div>

    <div class="w-full mt-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="index in 6" :key="index" class="bg-cover bg-center h-64">
          <img
            src="https://www.cnautool.com/wp-content/uploads/2023/06/%E6%B5%B7%E6%8A%A5-AS%E7%B3%BB%E5%88%97-%E5%AE%98%E7%BD%91-1.jpg"
            alt="Image" class="w-full h-full object-contain" />
        </div>
        <!-- :style="{ 'background-image': `url('https://www.cnautool.com/wp-content/uploads/2023/06/%E6%B5%B7%E6%8A%A5-AS%E7%B3%BB%E5%88%97-%E5%AE%98%E7%BD%91-1.jpg')` }"> -->
        <!-- 可以在这里添加其他内容，例如标题或描述 -->
        <!-- </div> -->
      </div>
    </div>
  </section>
</template>
    
<script lang="ts" setup>

</script>
