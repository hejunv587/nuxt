<template>
  <div class="w-full  sm:h-[280px] md:h-[420px]">
    <img :src="products" alt="" class="block max-w-full sticky top-0 left-0 h-full w-full object-cover object-center transition-opacity">
  </div>
  <div class="bg-[#2d2d30]">
    <div class="max-w-7xl mx-auto p-8 ">
      <!-- <h1 class="text-3xl font-semibold mb-4">产品页面</h1> -->

      <!-- Label 区域 -->
      <!-- <div class="mb-8">
      <label for="productPath" class="block text-gray-600 font-medium">产品路径：</label>
      <input
        v-model="selectedPath"
        id="productPath"
        type="text"
        class="w-full border border-gray-300 rounded-md py-2 px-3 focus:ring focus:ring-blue-200"
      />
    </div> -->

      <!-- Tab 分类 -->
      <div class="mb-8">
        <div class="grid grid-cols-3 gap-4">
          <div v-for="(item, index) in series" :key="index" @click="updateHash(index)" :class="{
            'bg-blue-500 text-white': selectedCategory === index,
            'bg-[#353538] text-[#b6b4b1]': selectedCategory !== index,
          }" class="py-2 px-4 rounded-lg focus:outline-none items-center text-center hover:cursor-pointer shadow-md">
            {{ item.cname }}
          </div>
          <!-- <button
          @click="selectedCategory = 'category2'"
          :class="{
            'bg-blue-500 text-white': selectedCategory === 'category2',
            'bg-gray-300 text-gray-600': selectedCategory !== 'category2',
          }"
          class="py-2 px-4 rounded-lg focus:outline-none"
        >
          分类 2
        </button>
        <button
          @click="selectedCategory = 'category3'"
          :class="{
            'bg-blue-500 text-white': selectedCategory === 'category3',
            'bg-gray-300 text-gray-600': selectedCategory !== 'category3',
          }"
          class="py-2 px-4 rounded-lg focus:outline-none"
        >
          分类 3
        </button> -->
        </div>
      </div>

      <!-- 系列展示 -->
      <div>
        <!-- <h2 class="text-2xl font-semibold mb-4">系列</h2> -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <!-- 用 v-for 渲染每个系列 -->
          <div v-for="series in filteredSeries" :key="series.id"
            class="border border-[#b6b4b1] rounded-md hover:border-blue-500 hover:shadow-md w-full mx-auto">
            <a :href="`/products/${series.id}`" class="block">
              <img :src="`/images/${series.image}`" class="w-full aspect-[16/9]  object-cover rounded-t-md">
              <div class="p-2">
                <h3 class="text-lg font-medium text-white">{{ series.name }}</h3>
                <p class="text-[#b6b4b1] text-xs mt-1">{{ series.description }}</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import products from "~/assets/images/products.jpg"
useHead({
  title: 'FXFINE福克菲产品',
  meta: [
    { name: 'description', content: '所有FXFINE福克菲产品系列' }
  ]
})

// const route = useRoute()
// console.log("route.hash", route)

const selectedCategory = ref(0);

console.log("hello")
onMounted(() => {
  console.log("hello")
  const hash = window.location.hash
  if (hash) {
    const hashValue = hash.slice(1); // remove the '#' character
    const categoryIndex = parseInt(hashValue, 10); // convert to number

    selectedCategory.value = categoryIndex;
  } else {
    selectedCategory.value = 0;
  }
  console.log("selectedCategory", selectedCategory.value)

  // watch(() => window.location.hash, handleHashChange);
})

// const handleHashChange = () => {
//   const hash = window.location.hash

//   if (hash) {
//     const hashValue = hash.slice(1); // remove the '#' character
//     const categoryIndex = parseInt(hashValue, 10); // convert to number

//     selectedCategory.value = categoryIndex;
//   } else {
//     selectedCategory.value = 0;
//   }

// }

const updateHash = (index: number) => {
  // 更新 URL 的哈希片段，例如：#category=0
  window.location.hash = `#${index}`;

  // 更新 selectedCategory 的值
  selectedCategory.value = index;
}

// const selectedPath = ref('');
// const selectedCategory = ref(0);

const series = [
  {
    cname: "摩托车行车记录仪系列"
  },
  {
    cname: "摩托车CarPlay系列"
  },
  {
    cname: "摩托车胎压监测系列"
  },
  {
    cname: "摩托车坡度仪系列"
  },
  {
    cname: "摩托车头盔系列"
  },
  {
    cname: "摩托车蓝牙耳机系列"
  },
]

const seriesData = [
  {
    id: 'M3',
    ename: 'R1 motorcycle recorder',
    image: 'AutomotivePipelineLeakDetection.jpg',
    name: 'R1摩托车行车记录仪',
    serie: '摩托车行车记录仪系列',
    description: '摩托车行车记录仪',
  },
  {
    id: 'MT001',
    name: 'MT001',
    image: 'MT001/1.jpg',
    serie: '摩托车胎压监测系列',
    description: 'MT001摩托车胎压监测仪，适用于摩托车、电动摩托车、电动自行车',
  },
  {
    id: 'MT003',
    name: 'MT003',
    image: 'MT003/1.jpg',
    serie: '摩托车行车记录仪系列',
    description: 'MT003多功能摩托车智能车机，适用于摩托车、电动摩托车、电动自行车',
  },
  {
    id: 'MT004',
    name: 'MT004',
    image: 'MT004/1.jpg',
    serie: '摩托车行车记录仪系列',
    description: 'MT004多功能摩托车智能车机，适用于摩托车、电动摩托车、电动自行车',
  },
  {
    id: 'MT005',
    name: 'MT005',
    image: 'MT005/1.jpg',
    serie: '摩托车行车记录仪系列',
    description: 'MT005多功能摩托车智能车机，适用于摩托车、电动摩托车、电动自行车',
  },
  {
    id: 'MT005Carplay',
    name: 'MT005Carplay',
    image: 'MT005Carplay/1.jpg',
    serie: '摩托车CarPlay系列',
    description: 'MT005carplay多功能摩托车智能车机，适用于摩托车、电动摩托车、电动自行车',
  },
]

const filteredSeries = computed(() => {
  // 根据选定的分类筛选系列
  return seriesData.filter((item) => {
    return item.serie == series[selectedCategory.value].cname;
    // if (selectedCategory.value === 0) {
    // 根据实际情况设置分类 1 下的系列筛选逻辑
    // return item.serie == series[selectedCategory.value].cname;
    // } else if (selectedCategory.value === 1) {
    //   // 根据实际情况设置分类 2 下的系列筛选逻辑
    //   return item.serie == '汽车维修保养系列';
    // } else if (selectedCategory.value === 2) {
    //   // 根据实际情况设置分类 3 下的系列筛选逻辑
    //   return item.serie == '新能源汽车维修工具系列';
    // }
  });
});
</script>
