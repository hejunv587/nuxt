<template>
  <div class="max-w-7xl mx-auto p-8">
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
        <div v-for="(item, index) in series" :key="index"
          @click="selectedCategory = index"
          :class="{
            'bg-blue-500 text-white': selectedCategory === index,
            'bg-gray-300 text-gray-600': selectedCategory !== index,
          }"
          class="py-2 px-4 rounded-lg focus:outline-none items-center text-center"
        >
          {{item.cname}}
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
        <div
          v-for="series in filteredSeries"
          :key="series.id"
          class="border border-gray-300 rounded-md p-4 hover:border-blue-500 hover:shadow-md cursor-pointer"
        >
          <h3 class="text-lg font-medium">{{ series.name }}</h3>
          <p class="text-gray-500">{{ series.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: 'Autool产品',
  meta: [
    { name: 'description', content: '所有autool产品系列' }
  ]
})

const selectedPath = ref('');
const selectedCategory = ref(0);

const series = [
  {
    cname:"汽车维修检测系列"
  },
  {
    cname:"汽车维修保养系列"
  },
  {
    cname:"新能源汽车维修工具系列"
  },
]

const seriesData = [
  { id: 1, name: '系列 1', description: '这是系列 1 的描述' },
  { id: 2, name: '系列 2', description: '这是系列 2 的描述' },
  { id: 3, name: '系列 3', description: '这是系列 3 的描述' },
  { id: 4, name: '系列 4', description: '这是系列 4 的描述' },
  // 可以继续添加更多系列数据
];

const filteredSeries = computed(() => {
  // 根据选定的分类筛选系列
  return seriesData.filter((series) => {
    if (selectedCategory.value === 0) {
      // 根据实际情况设置分类 1 下的系列筛选逻辑
      return series.id <= 2;
    } else if (selectedCategory.value === 1) {
      // 根据实际情况设置分类 2 下的系列筛选逻辑
      return series.id > 2 && series.id <= 4;
    } else if (selectedCategory.value === 2) {
      // 根据实际情况设置分类 3 下的系列筛选逻辑
      return series.id > 4;
    }
  });
});
</script>
