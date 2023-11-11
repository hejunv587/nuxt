<template>
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
        <!-- <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4"> -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <!-- 用 v-for 渲染每个系列 -->
          <div v-for="item in filteredBlog" :key="item.id"
            class="border border-[#b6b4b1] rounded-md hover:border-blue-500 hover:shadow-md w-full mx-auto overflow-hidden">
            <a :href="`/news/${item.id}`" class="block">
              <img :src="`/images/blog/${item.image}`" class="w-full aspect-[612/408]  object-cover rounded-t-md transform transition-transform duration-300 ease-in-out hover:scale-105">
              <div class="m-4">
                <h3 class="text-lg font-medium text-white mb-2">{{ item.name }}</h3>
                <p class="text-xs text-white mb-2">{{ item.date }}</p>
                <p class="text-[#b6b4b1] text-xs mb-4">{{ item.description }}</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script lang="ts" setup>
useHead({
  title: 'FXFINE新闻动态',
  meta: [
    { name: 'description', content: '所有FXFINE新闻动态' }
  ]
})

const route = useRoute()
console.log("route.hash", route.hash)

const selectedCategory = ref();
if (route.hash) {
  const hashValue = route.hash.slice(1); // remove the '#' character
  const categoryIndex = parseInt(hashValue, 10); // convert to number
  console.log("categoryIndex", categoryIndex)

  selectedCategory.value = categoryIndex;
} else {
  selectedCategory.value = 0;
}

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
    cname: "测试指南"
  },
  {
    cname: "行业资讯"
  },
  {
    cname: "维护及改造"
  },
]

const blogData = [
  {
    id: 'test1',
    ename: 'Is it necessary to buy motorcycle diagnostic tool?',
    image: 'FXTUL motorcycle diagnostic tool obd scanner for motorcycle.jpg',
    date: '2022-11-04',
    name: '摩托车诊断工具有必要购买吗？',
    serie: '测试指南',
    description: "摩托车诊断工具是一种帮助机械师和爱好者诊断摩托车问题的设备。这些工具类似于汽车上使用的诊断工具，但它们是专门为摩托车设计的。它可以帮助诊断问题，重置摩托车的计算机系统，并提供有关摩托车性能和状况的宝贵信息。",
  },
  {
    id: 'test2',
    ename: 'Do you know how motorcycle parts are classified?',
    name: '你知道摩托车配件是怎么分类的吗',
    image: 'motorbike.png',
    date: '2022-11-14',
    serie: '测试指南',
    description: "摩托车配件行业常用专业词汇 车辆类型：摩托车，幼崽，踏板车，轻便摩托车，越野车，ATV，UTV，卡丁车，袖珍自行车.转向和控制系统：前叉、手柄、手柄、连接板、连接板、里程表、仪表、开关、开关总成、灯具、灯、悬架、减震器、减震器、制动系统、盘式制动器总成",
  },
  {
    id: 'test3',
    ename: 'Essential Motorcycle Accessories for Motorcyclists',
    name: '摩托车手必备摩托车配件',
    image: '7-Essential-Motorcycle-Accessories-for-Motorcyclists .png',
    date: '2022-10-21',
    serie: '测试指南',
    description: "摩托车头盔是骑行套件中最重要的部分之一。在许多地方，骑车时戴头盔是合法的。头盔对骑手的好处很多。显而易见的最大好处是，它可以在交通事故中尽可能避免头部受伤。由于头盔的保护作用，您还将免受灰尘和飞虫的侵害，这些污垢和飞虫在骑行时会损坏您的眼睛或嘴巴。随着技术的发展，头盔的用途越来越广泛。",
  },
  {
    id: 'test4',
    ename: 'The 10 best classic European motorcycles',
    name: '10款最佳经典欧洲摩托车',
    image: 'The 10 best classic European motorcycles.png',
    date: '2022-08-09',
    serie: '测试指南',
    description: "欧洲摩托车的特点是其独特的造型、出色的操控性和经典、独特的骑行体验。任何摩托车清单都是主观的，但它们对一些新的摩托车购买者来说是无价的——如果它在名单上，那么它就是一个知名的、久经考验的经典品牌。",
  },
  {
    id: 'test5',
    ename: 'How to avoid motorcycle accidents?',
    name: '如何避免摩托车事故？',
    image: 'How to avoid motorcycle accidents.jpg',
    date: '2022-08-12',
    serie: '测试指南',
    description: "摩托车因其操作灵活、体积小巧、使用方便等特点，已成为许多人的常规交通工具。许多人喜欢骑摩托车带来的自由和肾上腺素激增。但是，如果您没有做好准备，骑摩托车可能会非常危险。摩托车本身的安全系数取决于骑手的技能和骑行意识。在道路上的绝大多数摩托车交通事故中，情况都是如此。如果可以避免这些类型的事情，那将是最好的。下面将从安全角度谈谈骑行安全的一些相关方面，以及如何避免道路上的事故。",
  },
  {
    id: 'test6',
    ename: 'Vintage Motorcycles｜Eight popular cars to compare',
    name: '老爷车|八款热门车对比',
    image: 'Vintage Motorcycles.png',
    date: '2022-08-08',
    serie: '测试指南',
    description: "喜欢老式摩托车的人，一定有一种特殊的复古感。在本文中，我们将介绍八款流行的复古自行车，为准备购买复古摩托车的人提供参考指南。",
  },
]

const filteredBlog = computed(() => {
  // 根据选定的分类筛选系列
  return blogData.filter((item) => {
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
  