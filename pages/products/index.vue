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
        <div v-for="(item, index) in series" :key="index" @click="selectedCategory = index" :class="{
          'bg-blue-500 text-white': selectedCategory === index,
          'bg-gray-300 text-gray-600': selectedCategory !== index,
        }" class="py-2 px-4 rounded-lg focus:outline-none items-center text-center hover:cursor-pointer">
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
          class="border border-gray-300 rounded-md hover:border-blue-500 hover:shadow-md cursor-pointer w-full mx-auto">
          <img :src="`/images/${series.image}`" class="w-full aspect-[16/9]  object-cover rounded-t-md">
          <div class="p-2">
            <h3 class="text-lg font-medium">{{ series.name }}</h3>
            <p class="text-gray-500 text-xs mt-1">{{ series.description }}</p>
          </div>
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
    cname: "汽车维修检测系列"
  },
  {
    cname: "汽车维修保养系列"
  },
  {
    cname: "新能源汽车维修工具系列"
  },
]

const seriesData = [
  {
    ename: 'pipeline leak',
    image: 'AutomotivePipelineLeakDetection.jpg',
    name: '汽车管道泄漏检测',
    serie: '汽车维修检测系列',
    description: '汽车管道泄漏检测仪，是检查车辆管路系统密封性及查找泄漏点，帮助汽修技师快速、准确地判断故障是否由管路泄露引起的专用工具',
  },
  {
    name: '汽车电路检测',
    image: 'AutomotiveCircuitTesting.jpg',
    serie: '汽车维修检测系列',
    description: '描述汽车电路检测的信息',
  },
  {
    name: '汽车喷油嘴检测',
    image: 'AutomotiveFuelInjectorInspection.jpg',
    serie: '汽车维修检测系列',
    description: '描述汽车喷油嘴检测的信息',
  },
  {
    name: '汽车发动机压力检测',
    image: 'CarEnginePressureDetection.jpg',
    serie: '汽车维修检测系列',
    description: '描述汽车发动机压力检测的信息',
  },
  {
    name: '汽车油品检测',
    image: 'AutomotiveOilTesting.jpg',
    serie: '汽车维修检测系列',
    description: '描述汽车油品检测的信息',
  },
  {
    name: '汽车蓄电池检测',
    image: 'CarBatteryTesting.jpg',
    serie: '汽车维修检测系列',
    description: '描述汽车蓄电池检测的信息',
  },
  {
    name: '汽车火花塞检测',
    serie: '汽车维修检测系列',
    description: '描述汽车火花塞检测的信息',
  },
  {
    name: '汽车密闭空间检测',
    serie: '汽车维修检测系列',
    description: '描述汽车密闭空间检测的信息',
  },
  {
    name: '汽车底盘检测',
    serie: '汽车维修检测系列',
    description: '描述汽车底盘检测的信息',
  },
  {
    name: '汽车刹车油更换',
    serie: '汽车维修保养系列',
    description: '描述汽车刹车油更换的信息',
  },
  {
    name: '汽车发动机积碳清洗',
    serie: '汽车维修保养系列',
    description: '描述汽车发动机积碳清洗的信息',
  },
  {
    name: '汽车冷媒维护保养',
    serie: '汽车维修保养系列',
    description: '描述汽车冷媒维护保养的信息',
  },
  {
    name: '汽车蓄电池充电',
    serie: '汽车维修保养系列',
    description: '描述汽车蓄电池充电的信息',
  },
  {
    name: '汽车编程稳压',
    serie: '汽车维修保养系列',
    description: '描述汽车编程稳压的信息',
  },
  {
    name: '汽车自动变速箱油更换',
    serie: '汽车维修保养系列',
    description: '描述汽车自动变速箱油更换的信息',
  },
  {
    name: '汽车废油回收',
    serie: '汽车维修保养系列',
    description: '描述汽车废油回收的信息',
  },
  {
    name: '汽车燃油系统保养',
    serie: '汽车维修保养系列',
    description: '描述汽车燃油系统保养的信息',
  },
  {
    name: '汽车冷却液更换',
    serie: '汽车维修保养系列',
    description: '描述汽车冷却液更换的信息',
  },
  {
    name: '新能源汽车到电池检测',
    serie: '新能源汽车维修工具系列',
    description: '描述新能源汽车到电池检测的信息',
  }
]

const filteredSeries = computed(() => {
  // 根据选定的分类筛选系列
  return seriesData.filter((series) => {
    if (selectedCategory.value === 0) {
      // 根据实际情况设置分类 1 下的系列筛选逻辑
      return series.serie == '汽车维修检测系列';
    } else if (selectedCategory.value === 1) {
      // 根据实际情况设置分类 2 下的系列筛选逻辑
      return series.serie == '汽车维修保养系列';
    } else if (selectedCategory.value === 2) {
      // 根据实际情况设置分类 3 下的系列筛选逻辑
      return series.serie == '新能源汽车维修工具系列';
    }
  });
});
</script>
