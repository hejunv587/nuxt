<template>
    <section id="latestnews" class="items-center w-full my-0 mx-auto">
        <div class="flex flex-col items-center justify-center">
            <h2 class="font-palanquin capitalize text-4xl lg:max-w-lg font-bold text-white">
                新闻动态
            </h2>
            <p class="mt-2 lg:max-w-lg font-montserrat text-[#b6b4b1] text-lg leading-7">聚合公司最新新闻资讯，新品发布信息,展览及行业最新动态等。</p>
        </div>

        <div class="w-full h-full mt-8">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div v-for="index in 3" :key="index" class="bg-cover bg-center h-64 relative group">
                    <img src="https://www.cnautool.com/wp-content/uploads/2023/06/%E6%B5%B7%E6%8A%A5-AS%E7%B3%BB%E5%88%97-%E5%AE%98%E7%BD%91-1.jpg"
                        alt="Image"
                        class="w-full h-full object-contain transition-transform duration-300 transform scale-100 group-hover:scale-105" />

                    <div class="p-2">
                        <p
                            class="border-l border-gray-700 pl-2 my-2 text-xs group-hover:border-blue-500 group-hover:text-blue-500">
                            2023-09-05</p>
                        <p class="text-lg font-bold group-hover:text-blue-500">传递热爱，见证速度丨AUTOOL赞助欧洲Histo Cup Red Bull
                            Ring系列赛</p>
                        <p class="text-xs group-hover:text-blue-500">了解更多></p>
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>
      
<script lang="ts" setup>

</script>
  