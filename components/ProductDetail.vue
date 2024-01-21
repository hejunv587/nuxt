<template>
    <div class="bg-[#2d2d30] py-4" ref="fullscreenContainer">
        <div class="flex flex-col md:flex-row">
            <div class="p-7 w-full md:w-1/2 md:h-screen flex flex-col">
                <div class="max-h-[80%] h-auto">
                    <img :src="res_src" class="mx-auto h-full w-full object-contain object-top" />
                </div>

                <div class="max-h-[20%] flex flex-row mt-4 w-full items-center relative justify-between">
                    <button @click="changeVisibleThumbnails(-3)" class="h-full">
                        <!-- Left arrow icon -->
                        <span class="inline-block h-8 w-8 relative ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="h-6 w-6 absolute left-0 text-white">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </span>
                    </button>
                    <div class="flex-grow grid grid-cols-3 sm:grid-cols-5 gap-2">
                        <div v-for="(image, index) in visibleThumbnails" :key="index">
                            <div class="cursor-pointer" @click="selectImage(index)"
                                :class="{ 'border border-white': currentIndex === index }">
                                <img :src="image.url" alt="Thumbnail" class="w-full h-auto" />
                            </div>
                        </div>
                    </div>
                    <button @click="changeVisibleThumbnails(+3)" class="h-full">
                        <!-- Right arrow icon -->
                        <span class="inline-block h-8 w-8 relative">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="h-6 w-6 absolute right-0 text-white">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </span>
                    </button>
                </div>


            </div>
            <div ref="scrollContainer" class="p-7 w-full md:w-1/2 md:h-screen overflow-y-auto no-scrollbar">
                <div ref="scrollContent">
                    <h2 class="text-4xl my-7 text-white">{{ product.name }}</h2>
                    <!-- <p class="text-xl my-7">Price - ${{ product.price }}</p> -->
                    <h3 class="font-bold border-b-2 mb-4 pb-2 text-white">产品详情:</h3>
                    <p class="mb-7 text-[#b6b4b1]">{{ product.description }}</p>

                    <h3 class="font-bold mb-4 pb-2 text-white" v-if="product.overview">产品概述:</h3>
                    <p class="mb-7 text-[#b6b4b1]" v-if="product.overview">{{ product.overview }}</p>

                    <h3 class="font-bold mb-4 pb-2 text-white">产品功能:</h3>
                    <div class="mb-7">
                        <ul class="list-disc pl-5">
                            <li v-for="(item, index) in product.functions" :key="index" class="mb-2 text-[#b6b4b1]">{{ item
                            }}
                            </li>
                        </ul>
                    </div>

                    <h3 class="font-bold mb-4 pb-2 text-white">产品优势:</h3>
                    <div>
                        <ul class="list-disc pl-5">
                            <li v-for="(item, index) in product.advantages" :key="index" class="mb-2 text-[#b6b4b1]">{{ item
                            }}
                            </li>
                        </ul>
                    </div>

                    <h3 class="font-bold mb-4 pb-2 text-white mt-7">技术参数:</h3>
                    <div>
                        <ul class="list-disc pl-5">
                            <li v-for="(item, index) in product.technical_parameters" :key="index"
                                class="mb-2 text-[#b6b4b1]">
                                {{ item }}
                            </li>
                        </ul>
                    </div>

                    <div v-for="(item, index) in product.about" :key="index" class="mt-7">
                        <h3 class="font-bold mb-4 pb-2 text-white">关于{{ item.name }}:</h3>
                        <p class="text-[#b6b4b1]">{{ item.desc }}</p>
                    </div>

                    <h3 class="font-bold mb-4 pb-2 text-white mt-7">服务:</h3>
                    <div>
                        <ul class="list-disc pl-5 mb-7">
                            <li v-for="(item, index) in product.services" :key="index" class="mb-2 text-[#b6b4b1]">
                                {{ item }}
                            </li>
                        </ul>
                    </div>

                    <h3 class="font-bold mb-4 pb-2 text-white mt-7">为什么选择FXFINE福克菲:</h3>
                    <div>
                        <ul class="list-disc pl-5 mb-7">
                            <li v-for="(item, index) in product.whychoose" :key="index" class="mb-2 text-[#b6b4b1]">
                                {{ item }}
                            </li>
                        </ul>
                    </div>

                    <h3 class="font-bold mb-4 pb-2 text-white mt-7">注意事项:</h3>
                    <div>
                        <ul class="list-disc pl-5 mb-7">
                            <li v-for="(item, index) in product.note" :key="index" class="mb-2 text-[#b6b4b1]">
                                {{ item }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div ref="qa" class="my-7 mx-auto max-w-7xl pb-7 px-4">
            <p class="text-white text-left font-extrabold text-xl">常用问答</p>
            <div class="text-[#b6b4b1] mb-4">
                <div class="my-4" v-for="(item, index) in paginatedQA">
                    <div class="mb-1">
                        <span class="mr-2">问:</span>{{ item.q }}
                    </div>
                    <div>
                        <span class="mr-2">答:</span>{{ item.a }}
                    </div>
                </div>
            </div>
        </div>

        <!-- 翻页控制按钮 -->
        <div class="flex justify-center">
            <button @click="prevPage" :disabled="currentPage === 1" class="mr-2 px-4 py-2 text-white">
                上一页
            </button>
            <div class="flex items-center"><span v-for="(item, index) in totalPages" class="mr-1 px-1 py-2"
                    :class="{ 'text-white': currentPage === index + 1, 'text-[#b6b4b1]': currentPage !== index + 1, 'underline': currentPage === index + 1 }">{{
                        item }}</span></div>
            <button @click="nextPage" :disabled="currentPage === totalPages" class="px-4 py-2 text-white">
                下一页
            </button>
        </div>

        <!-- 一个整体白色背景的客户评价区域 -->
        <div class="bg-white w-full pt-6 my-4">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div class="flex flex-col items-center basis-1/3 my-3 mx-auto">
                    <div class="text-xl font-semibold">客户评价</div>
                    <div class="text-base">{{ avg }}</div>
                    <Starts :rating="avg" starSize="36" name="total"></Starts>
                    <div class="text-base">{{ totalReviews }}评价</div>
                </div>
                <div class="flex flex-col items-center basis-1/3 my-3 mx-auto">
                    <div class="flex flex-row items-center " v-for="(score, index) in scores" :key="index">
                        <div class="StarProgressBar__Name svelte-1wgsjsx">{{ score.key }}</div>
                        <div class="mx-2">
                            <svg style="width: var(--star-size, 14px); height: var(--star-size, 14px)" viewBox="0 0 24 24"
                                version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <defs>
                                    <clipPath id="c9d62ca8-456d-43a1-a3d0-f6a062b6212b">
                                        <path
                                            d="M12,0.145898039 L8.47328849,7.29179607 L0.587321804,8.43769411 L6.2936609,14 L4.94657697,21.854102 L12,18.145898 L19.053423,21.854102 L17.7063391,14 L23.4126782,8.43769411 L15.5267115,7.29179607 L12,0.145898039 Z">
                                        </path>
                                    </clipPath>
                                </defs>
                                <rect x="0" y="0" width="24" height="24"
                                    clip-path="url(#c9d62ca8-456d-43a1-a3d0-f6a062b6212b)" style="fill: #ffb303">
                                </rect>
                                <rect x="0" y="0" width="100%" height="24"
                                    clip-path="url(#c9d62ca8-456d-43a1-a3d0-f6a062b6212b)" style="fill: #ffb303">
                                </rect>
                            </svg>
                        </div>
                        <div class="mx-2 bg-[#e4e5e7] rounded w-48 h-2">
                            <span class="bg-[#ffb303] rounded block h-full"
                                :style="'width:' + (score.value / totalReviews) * 100 + '%'"></span>
                        </div>
                        <div style="white-space: nowrap;">{{ score.value }}</div>
                    </div>

                </div>



            </div>
            <div class="flex flex-row bg-[#fdfdfd] gap-4 overflow-x-scroll p-4">
                <div class="flex p-2 w-[287px]" v-for="(item, index) in reviews" :key="index">
                    <figure class="bg-white rounded-sm overflow-y-hidden shadow-xl overflow-x-hidden">
                        <div class="h-[283px] w-[287px] mb-2 select-none">
                            <!-- <div
                                class="relative w-full h-full overflow-hidden after:clear-both after:block after:content-['']">
                                <div v-for="(image, index) in item.image" :key="index"
                                    class="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                                    :class="{
                                        'hidden': currentIndex !== index
                                    }" style="backface-visibility: hidden">
                                    <img class="h-full w-full object-cover" :src="image" alt="">
                                </div>
                            </div> -->
                            <ReviewImage :images="item.image"></ReviewImage>
                        </div>

                        <Starts :rating="item.score" starSize="24" :name="item.name"></Starts>
                        <div class="p-2 space-y-2 h-full overflow-x-hidden select-none">
                            
                                <div class="text-sm"> {{ item.name }} </div>
                            
                            
                                <div class="text-base overflow-y-auto  max-h-[200px]">
                                    <p>
                                        {{ item.review }}
                                    </p>
                                </div>

                           

                        </div>
                    </figure>
                </div>

            </div>
        </div>


    </div>
</template>
  
<script setup lang="ts">
import { Product } from '../types/product';
// import BScroll from 'better-scroll';

const scrollY = ref(0);
const lastScrollY = ref(0);
const scrollDirection = ref('down');

// 翻页控制
const itemsPerPage = 5;
const currentPage = ref(1);
const pagenumbers = ref(1)

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

// const { product } = defineProps(['product'])
// const product: Product = defineProps(['product'])
const {
    product = undefined as Product | undefined
} = defineProps(['product'])

const paginatedQA = computed(() => {
    if (!product.qas) return [];
    const start = (currentPage.value - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return product.qas.slice(start, end);
});

const reviews = ref([
    {
        "name": "赵六",
        "score": 4,
        "review": "产品非常实用，我很喜欢。产品非常实用，我很喜欢。产品非常实用，我很喜欢。产品非常实用，我很喜欢。产品非常实用，我很喜欢。产品非常实用，我很喜欢。产品非常实用，我很喜欢。产品非常实用，我很喜欢。产品非常实用，我很喜欢。产品非常实用，我很喜欢。产品非常实用，我很喜欢。产品非常实用，我很喜欢。",
        "email": "zhaoliu@example.com",
        "image": ["https://reviews.am-usercontent.com/images/u/o/fe7f1d45cd55be947962814c0c85676e6a77187c/review-images/d320d14c2bdc487c8619aaa6472515af.jpeg", "https://reviews.am-usercontent.com/images/u/o/fe7f1d45cd55be947962814c0c85676e6a77187c/review-images/d2957d59d2b54d82937ec6c3f66424f6.jpeg",]
    },
    {
        "name": "孙七",
        "score": 5,
        "review": "非常好的购物体验，产品质量上乘。",
        "email": "sunqi@example.com",
        "image": ["https://reviews.am-usercontent.com/images/u/o/fe7f1d45cd55be947962814c0c85676e6a77187c/review-images/eec8aeaa51854a1fa8c68ced1e62c988.jpeg"]
    },
    {
        "name": "周八",
        "score": 3,
        "review": "产品还不错，但是物流有些慢。",
        "email": "zhouba@example.com",
        "image": ["https://reviews.am-usercontent.com/images/u/o/fe7f1d45cd55be947962814c0c85676e6a77187c/review-images/cd32072d15714b748c0a9199e6042725.jpeg"]
    },
    {
        "name": "吴九",
        "score": 4,
        "review": "服务态度很好，产品也很满意。",
        "email": "wujui@example.com",
        "image": ["https://reviews.am-usercontent.com/images/u/o/fe7f1d45cd55be947962814c0c85676e6a77187c/review-images/fae8d8a02490420b811893bed3498a6a.jpeg"]

    },
    {
        "name": "郑十",
        "score": 5,
        "review": "下次还会再来，推荐给朋友了。",
        "email": "zhengshi@example.com",
        "image": ["https://reviews.am-usercontent.com/images/u/o/fe7f1d45cd55be947962814c0c85676e6a77187c/review-images/08588eaa59aa41fcaf1989f658413189.jpeg"]

    },
    {
        "name": "王十一",
        "score": 4,
        "review": "产品质量很好，下次还会再买。",
        "email": "wangshiyi@example.com",
        "image": ["https://reviews.am-usercontent.com/images/u/o/fe7f1d45cd55be947962814c0c85676e6a77187c/review-images/e133d0c682ce45a398a762a56d04a534.jpeg"]
    },
    {
        "name": "李十二",
        "score": 5,
        "review": "非常满意，服务也很好。",
        "email": "lishier@example.com"
    },
    {
        "name": "张十三",
        "score": 4,
        "review": "产品很好，物流也很快。",
        "email": "zhangshisan@example.com"
    },
    {
        "name": "赵十四",
        "score": 5,
        "review": "非常满意，产品质量很好。",
        "email": "zhaoshisi@example.com"
    },
    {
        "name": "孙十五",
        "score": 4,
        "review": "产品很实用，我很喜欢。",
        "email": "sunshiwu@example.com"
    }
])


let scores = [
    { key: 5, value: 0 },
    { key: 4, value: 0 },
    { key: 3, value: 0 },
    { key: 2, value: 0 },
    { key: 1, value: 0 }
]
let totalReviews = reviews.value.length;
let avg = ref(0);

for (let review of reviews.value) {
    let score = review.score; // 假设每个评价对象都有一个名为`score`的属性来存储评价的分数
    avg.value += review.score
    for (let scoreObj of scores) {
        if (scoreObj.key === score) {
            scoreObj.value++;
            break;
        }
    }

}
avg.value = avg.value / totalReviews;



const totalPages = computed(() => Math.ceil(product.qas.length / itemsPerPage));

const screenWidth = ref(0)
const currentIndex = ref(0);
const itemsPerPageNarrow = 3; // Number of thumbnails to show on narrow screens
const itemsPerPageWide = 5; // Number of thumbnails to show on wide screens
// const currentPage = ref(0);

// Create a list of visible thumbnails
const visibleThumbnails = ref([]);

// Calculate the number of thumbnails to show based on screen width
const gridColumns = computed(() => {
    return screenWidth.value < 640 ? itemsPerPageNarrow : itemsPerPageWide;
});

// Initialize the visible thumbnails list
// const initializeVisibleThumbnails = () => {
//     //   const startIndex = currentPage.value * itemsPerPage;
//     console.log("initializeVisibleThumbnails", currentIndex.value, gridColumns.value)
//     console.log("product.images", product.images)
//     const images = product.images.value
//     console.log("images", images)
//     const thumbnails = images.slice(currentIndex.value, currentIndex.value + gridColumns.value)
//     console.log("thumbnails", thumbnails)
//     visibleThumbnails.value = thumbnails.value.map((thumbnail) => thumbnail.value);
//     // visibleThumbnails.value = product.images.slice(currentIndex.value, gridColumns.value);
// };

const initializeVisibleThumbnails = () => {
    const images = product.images;
    const thumbnails = [];

    for (let i = currentIndex.value; i < currentIndex.value + gridColumns.value; i++) {
        if (i < images.length) {
            thumbnails.push(images[i]);
        }
    }

    visibleThumbnails.value = thumbnails;
};

// Update visible thumbnails when the screen width changes
watch(gridColumns, () => {
    initializeVisibleThumbnails();
});

const res_src = ref()
const res_thb = ref()
res_src.value = product.images[currentIndex.value].url
res_thb.value = product.images[currentIndex.value].thumbnail

const selectImage = (index: number) => {
    currentIndex.value = index;
    res_src.value = product.images[currentIndex.value].url

}

const changeVisibleThumbnails = (steps: number) => {
    //更改可见缩略图列表的起始索引
    currentIndex.value = currentIndex.value + steps;
    if (currentIndex.value <= 0) {
        currentIndex.value = 0
    } else if (currentIndex.value + gridColumns.value >= product.images.length) {
        currentIndex.value = product.images.length - gridColumns.value
    }

    console.log("changeVisibleThumbnails", currentIndex.value, gridColumns.value)

    initializeVisibleThumbnails()
}

const handleResize = () => {
    screenWidth.value = window.innerWidth;
}


const scrollContainer = ref<HTMLElement | null>(null);
const fullscreenContainer = ref<HTMLElement | null>(null);
const scrollContent = ref<HTMLElement | null>(null);

const handlePageScroll = () => {
    console.log("handlePageScroll")


    // scrollY.value = window.scrollY
    // if (scrollY.value > lastScrollY.value) {
    //     scrollDirection.value = 'down';
    // } else {
    //     scrollDirection.value = 'up';
    // }
    // lastScrollY.value = scrollY.value;

    // // console.log("scrollDirection", lastScrollY.value, scrollY.value,scrollDirection.value)

    const scrollContainerEl = scrollContainer.value;
    // // 将整个页面的滚动位置设置为局部元素的滚动位置
    if (scrollContainerEl) {

        // 获取局部滚动容器的可见区域
        const containerTop = scrollContainerEl.clientTop;
        const containerHeight = scrollContainerEl.clientHeight;

        // const scrollContainerBs = new BScroll(scrollContainer.value, {
        //     // Better-Scroll 配置选项
        //     mouseWheel: true,
        //     // wheel: true,
        //     // scrollbar: true,
        //     probeType: 3,
        //     preventDefault: true,
        // })

        //     // console.log("scrollContainerEl",scrollContainer.value?.scroll)

        //     // console.log("handlePageScroll", window.scrollY, window.innerHeight ,scrollContainerEl.scrollTop,scrollContainerEl.scrollHeight,containerHeight)

        //     // 判断是否滚动到局部滚动容器的底部
        //     if (scrollContainerEl.scrollTop + scrollContainerEl.clientHeight < scrollContainerEl.scrollHeight) {
        //         //     // 如果滚动到局部滚动容器的底部，将滚动事件传递给局部容器
        //         //     scrollContainerEl.scrollTop += 10;
        //         //     window.scrollTo(0,10)
        //         //     lastScrollY.value = 0 
        //         //     // event.preventDefault();
        //         //     return false;
        //         // console.log("scrollContainerEl", scrollContainer.value?.scroll)

        //         // return scrollContainer.value?.sc
        //     }

        //     // if (scrollContainerEl.scrollTop + containerHeight < scrollContainerEl.scrollHeight) {
        //     //     // 如果滚动到局部滚动容器的底部，将滚动事件传递给局部容器
        //     //     scrollContainerEl.scrollTop += 10;
        //     //     window.scrollTo(0, scrollContainerEl.scrollTop);
        //     //     // 停止处理全局滚动事件
        //     //     return false;
        //     // }

        //     // // 处理向上滚动
        //     // if (scrollDirection.value == 'up' && scrollContainerEl.scrollTop > 0) {
        //     //     scrollContainerEl.scrollTop -= 10;
        //     //     window.scrollTo(0, scrollContainerEl.scrollTop);
        //     //     // 停止处理全局滚动事件
        //     //     return false;
        //     // }
    }
}

// Initialize visible thumbnails on component mount
onMounted(() => {
    const scrollContainerEl = scrollContainer.value;
    const fullscreenContainerEl = fullscreenContainer.value;

    console.log("scrollContainerEl", scrollContainerEl)

    // document.documentElement.style.overflow = 'hidden';//即：设置html元素的overflow属性hidden
    // document.body.style.overflow = 'hidden'//移动端的可以这样设置


    window.addEventListener("scroll", handlePageScroll);

    gridColumns.value = 5
    screenWidth.value = window.innerWidth
    window.addEventListener('resize', handleResize);
    initializeVisibleThumbnails();

});

onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize);
    window.removeEventListener("scroll", handlePageScroll);
})

// Handle window resize to update visible thumbnails
// window.addEventListener('resize', () => {
//     initializeVisibleThumbnails()
// })

</script>
  
<style scoped></style>