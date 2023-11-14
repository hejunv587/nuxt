<template>
  <div class="bg-[#2d2d30]">
    <div class="max-w-7xl mx-auto p-8 ">
      <!-- Tab 分类 -->
      <div class="mb-8">
        <div class="grid grid-cols-3 gap-4">
          <div v-for="(item, index) in series" :key="index" @click="updateHash(index)" :class="{
            'bg-blue-500 text-white': selectedCategory === index,
            'bg-[#353538] text-[#b6b4b1]': selectedCategory !== index,
          }" class="py-2 px-4 rounded-lg focus:outline-none items-center text-center hover:cursor-pointer shadow-md">
            {{ item.cname }}
          </div>
        </div>
      </div>

      <!-- Table -->
      <div class="overflow-x-auto">
        <table class="min-w-full bg-white border border-gray-300">
          <!-- Table Headings -->
          <thead>
            <tr>
              <th class="py-2 px-4 border-b text-left w-[300px]" >标题</th>
              <!-- <th class="py-2 px-4 border-b text-left">分类</th> -->
              <th class="py-2 px-4 border-b text-left">文件格式</th>
              <th class="py-2 px-4 border-b text-left">更新日期</th>
              <th class="py-2 px-4 border-b text-left">操作</th>
            </tr>
          </thead>

          <!-- Table Body -->
          <tbody>
            <tr v-for="(item, index) in filteredDownload" :key="index">
              <td class="py-2 px-4 border-b">{{ item.title }}</td>
              <!-- <td class="py-2 px-4 border-b">{{ item.category }}</td> -->
              <td class="py-2 px-4 border-b">{{ item.fileType }}</td>
              <td class="py-2 px-4 border-b">{{ item.updatedAt }}</td>
              <td class="py-2 px-4 border-b">
                <button @click="downloadItem(item)" class="text-blue-500 underline">下载</button>
                <button @click="browseItem(item)" class="text-green-500 underline ml-2">浏览</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- 翻页控制按钮 -->
      <div class="flex justify-center mt-4">
        <button @click="prevPage" :disabled="currentPage === 1" class="mr-2 px-4 py-2 text-white">
          上一页
        </button>
        <div class="flex items-center">
          <span v-for="(item, index) in totalPages" class="mr-1 px-1 py-2 cursor-pointer"
            :class="{ 'text-white': currentPage === index + 1, 'text-[#b6b4b1]': currentPage !== index + 1, 'underline': currentPage === index + 1 }"
            @click="clickPage(item)">
            {{ item }}
          </span>
        </div>
        <button @click="nextPage" :disabled="currentPage === totalPages" class="px-4 py-2 text-white">
          下一页
        </button>
      </div>
    </div>
  </div>
</template>
    
<script lang="ts" setup>
useHead({
  title: 'FXFINE下载',
  meta: [
    { name: 'description', content: '所有FXFINE下载' }
  ]
})

// 翻页控制
const itemsPerPage = 6;
const currentPage = ref(1);

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const clickPage = (page: number) => {
  currentPage.value = page
}

const pageDownload = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return filteredDownload.value.slice(start, end);
});

const totalPages = computed(() => Math.ceil(filteredDownload.value.length / itemsPerPage));

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
    cname: "操作手册"
  },
  {
    cname: "操作视频"
  },
  {
    cname: "升级软件"
  },
]

const downloadList = ref([
  {
    title: 'AST618 MANUAL',
    category: '操作手册',
    fileType: 'PDF',
    path: 'AST618 MANUAL.pdf',
    updatedAt: '2023-11-12',
  },
  {
    title: 'Item 2 Item 2 Item 2 Item 2 Item 2 Item 2 Item 2',
    category: '升级软件',
    fileType: 'rar',
    updatedAt: '2023-11-13',
  },
  {
    title: 'M6操作视频',
    category: '操作视频',
    fileType: 'mp4',
    path: 'ccfe7095917cd5f21146d9d0d875e95f.mp4',
    updatedAt: '2023-11-13',
  },
]);

const downloadItem = (item: any) => {
  console.log('Downloading:', item);
  // Trigger a file download
  const link = document.createElement('a');
  link.href = `/downloads/${item.path}`;
  link.download = item.path; // Set the desired filename
  link.click();
};

const browseItem = (item: any) => {
  console.log('Browsing:', item);
  window.open(`/downloads/${item.path}`, '_blank');
};

const filteredDownload = computed(() => {
  // 根据选定的分类筛选系列
  return downloadList.value.filter((item: { category: string; }) => {
    return item.category == series[selectedCategory.value].cname;
  });
});
</script>
    