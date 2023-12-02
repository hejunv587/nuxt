<template>
    <footer class="bg-white sm:px-16 px-8 sm:pt-12 pt-12 pb-8">
        <div class="max-w-[1440px] my-0 mx-auto ">
            <div class="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
                <div class="flex flex-col items-start">
                    <a href="/">
                        <img :src="logo" alt="logo" width="150" height="46" class="m-0" />
                    </a>
                    <p class="mt-6 text-base leading-7 font-montserrat text-[#8e857c] sm:max-w-sm">
                        FXFINE成立于中国深圳，多年来一直专注于全球摩托车智能与安全方案
                        <br>
                    </p>
                    <div class="flex items-center gap-5 mt-8">
                        <div v-for="icon in socialMedia" :key="icon.alt" class="flex justify-center items-center">
                            <img :src="icon.src" :alt="icon.alt" width="100" height="100" />
                        </div>
                    </div>
                    <div>

                    </div>
                </div>

                <div class="flex flex-1 justify-between gap-10 lg:justify-end lg:space-x-40 flex-wrap">
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
                    <p>©2015-2023 福克菲FXFINE 版权所有</p>
                </div>
                <p class="font-montserrat cursor-pointer">粤ICP备2023138110号</p>
            </div>
        </div>
    </footer>
</template>
  
<script setup lang="ts">
import logo from "~/assets/images/logo.png";
import wehcat from "~/assets/images/wechat.png";
import douyin from "~/assets/images/douyin.png";

const socialMedia = [
    {
        src: wehcat,
        alt: "公众号"
    },
    {
        src: douyin,
        alt: "抖音"
    }
]
const footerLinks = [
    {
        title: "产品",
        links: [
            { name: "摩托车行车记录仪系列", link: "/products#0" },
            { name: "摩托车CarPlay系列", link: "/products#1" },
            { name: "摩托车胎压监测系列", link: "/products#2" },
            { name: "摩托车坡度仪系列", link: "/products#3" },
            { name: "摩托车头盔系列", link: "/products#4" },
            { name: "摩托车蓝牙耳机系列", link: "/products#5" },

        ],
    },
    // {
    //     "title": "汽车维修保养系列",
    //     "links": [
    //         { "name": "汽车刹车油更换", "link": "/" },
    //         { "name": "汽车发动机积碳清洗", "link": "/" },
    //         { "name": "汽车冷媒维护保养", "link": "/" },
    //         { "name": "汽车蓄电池充电", "link": "/" },
    //         { "name": "汽车编程稳压", "link": "/" },
    //         { "name": "汽车自动变速箱油更换", "link": "/" },
    //         { "name": "汽车废油回收", "link": "/" },
    //         { "name": "汽车燃油系统保养", "link": "/" },
    //         { "name": "汽车冷却液更换", "link": "/" }
    //     ]
    // },
    // {
    //     title: "新能源汽车维修工具系列",
    //     links: [
    //         { name: "新能源汽车电池检测", link: "/" },
    //     ],
    // },
    {
        title: "关于FXFINE",
        links: [
            { name: "关于我们", link: "/about" },
            // { name: "资料下载", link: "/" },
            // { name: "配送服务", link: "/" },
            { name: "售后服务", link: "/warranty" },
            { name: "退换政策", link: "/returnpolicy" },
            // { name: "全球销售条款", link: "/" },
            // { name: "隐私权政策", link: "/" },
            { name: "联系我们", link: "/contact" },
            { name: "成为经销商", link: "/becomedealer" },

        ],
    }
]
</script>
  