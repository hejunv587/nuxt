<template>
    <footer class="bg-white sm:px-16 px-8 sm:pt-24 pt-12 pb-8">
        <div class="mt-12 max-w-[1440px] my-0 mx-auto ">
            <div class="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
                <div class="flex flex-col items-start">
                    <a href="/">
                        <img src="https://www.cnautool.com/wp-content/uploads/2021/04/AUTOOL.png" alt="logo" width="150"
                            height="46" class="m-0" />
                    </a>
                    <p class="mt-6 text-base leading-7 font-montserrat text-[#8e857c] sm:max-w-sm">
                        行车无忧，从检测开始 <br>
                        专注于提供高质量、可靠的汽车检测设备，以确保车辆的安全性和可靠性
                    </p>
                    <div class="flex items-center gap-5 mt-8">
                        <div v-for="icon in socialMedia" :key="icon.alt" class="flex justify-center items-center">
                            <img :src="icon.src" :alt="icon.alt" width="100" height="100" />
                        </div>
                    </div>
                    <div>

                    </div>
                </div>

                <div class="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
                    <div v-for="section in footerLinks" :key="section.title">
                        <h4 class="font-montserrat text-2xl leading-normal font-medium mb-6 text-black">
                            {{ section.title }}
                        </h4>
                        <ul>
                            <li class="mt-3 font-montserrat text-base leading-normal text-[#8e857c] hover:text-slate-gray"
                                v-for="link in section.links" :key="link.name">
                                <a :href="link.link">{{ link.name }}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="flex justify-between text-[#8e857c] mt-24 max-sm:flex-col max-sm:items-center">
                <div class="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
                    <!-- <img src="@/assets/icons/copyrightSign.svg" alt="copyright sign" width="20" height="20"
                        class="rounded-full m-0" /> -->
                    <p>©2012-2023偶然科技Autool 版权所有</p>
                </div>
                <p class="font-montserrat cursor-pointer">粤ICP备20053092号</p>
            </div>
        </div>
    </footer>
</template>
  
<script setup lang="ts">
const socialMedia = [
    {
        src: "https://www.cnautool.com/wp-content/uploads/2022/08/官微二维码-1.jpg",
        alt: "公众号"
    },
    {
        src: "https://www.cnautool.com/wp-content/uploads/2022/08/抖音二维码-1.jpg",
        alt: "抖音"
    }
]
const footerLinks = [
    {
        title: "汽车维修检测系列",
        links: [
            { name: "汽车管道泄漏检测", link: "/" },
            { name: "汽车电路检测", link: "/" },
            { name: "汽车喷油嘴检测", link: "/" },
            { name: "汽车发动起压力检测", link: "/" },
            { name: "汽车油品检测", link: "/" },
            { name: "汽车蓄电池检测", link: "/" },
            { name: "汽车火花塞检测", link: "/" },
            { name: "汽车密闭空间检测", link: "/" },
            { name: "汽车底盘检测", link: "/" },
            { name: "汽车故障检测", link: "/" },

        ],
    },
    {
        "title": "汽车维修保养系列",
        "links": [
            { "name": "汽车刹车油更换", "link": "/" },
            { "name": "汽车发动机积碳清洗", "link": "/" },
            { "name": "汽车冷媒维护保养", "link": "/" },
            { "name": "汽车蓄电池充电", "link": "/" },
            { "name": "汽车编程稳压", "link": "/" },
            { "name": "汽车自动变速箱油更换", "link": "/" },
            { "name": "汽车废油回收", "link": "/" },
            { "name": "汽车燃油系统保养", "link": "/" },
            { "name": "汽车冷却液更换", "link": "/" }
        ]
    },
    {
        title: "新能源汽车维修工具系列",
        links: [
            { name: "新能源汽车电池检测", link: "/" },
        ],
    },
    {
        title: "关于Autool",
        links: [
            { name: "关于我们", link: "/" },
            { name: "资料下载", link: "/" },
            { name: "配送服务", link: "/" },
            { name: "维护及保修期", link: "/" },
            { name: "全球销售条款", link: "/" },
            { name: "隐私权政策", link: "/" },
            { name: "联系我们", link: "/" },

        ],
    }
]
</script>
  