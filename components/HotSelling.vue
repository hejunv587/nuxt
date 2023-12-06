<template>
  <section id="hotselling" class="items-center w-full my-0 mx-auto">

    <div class="grid sm:grid-cols-1 lg:grid-cols-2">
      <div class="">
        <img :src="productImg" alt="Image" class="w-full h-full object-contain" />
      </div>
      <div class="">
        <div class="flex flex-col px-5">
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
          <a href="/products/MT005">
            <p class="text-sm text-[#b6b4b1] text-right">View full details -></p>
          </a>

        </div>
      </div>
    </div>
  </section>
</template>
    
<script lang="ts" setup>
import productImg from "~/public/images/MT005/1.jpg";
const product = ref({
  id: "MT005",
  name: "MT005多功能摩托车智能车机",
  images: [
    {
      name: "MT005 picture 1",
      type: "image",
      src: `/images/MT005/1.jpg`,
      thumbnail: `/images/MT005/1.jpg`,
    },
    {
      name: "MT005 picture 2",
      type: "image",
      src: `/images/MT005/2.jpg`,
      thumbnail: `/images/MT005/2.jpg`,
    },
    {
      name: "MT005 picture 3",
      type: "image",
      src: `/images/MT005/3.jpg`,
      thumbnail: `/images/MT005/3.jpg`,
    },
    {
      name: "MT005 picture 4",
      type: "image",
      src: `/images/MT005/4.jpg`,
      thumbnail: `/images/MT005/4.jpg`,
    },

  ],
  description:
    "MT005摩托车行车记录仪是一款集GPS数据采集、拍照、视频回放、停车守卫等多功能于一体的智能行车记录仪。它能够高清拍摄和录像，倾斜角设置可调节压弯角度，全自动监测车辆行驶状况。采用LED高清液晶屏显示，分辨率高，采用游离式转动，灵敏度高。",
  overview:
    "",
  functions: [
    "GPS数据采集",
    "拍照、视频回放",
    "车速、时间",
    "经纬度、指南针",
    "航向角度",
    "海拔高度、电压",
    "行驶里程、行驶时间",
    "横滚角、俯仰角",
    "停车守卫、碰撞锁档",
  ],
  advantages: [
    "防水设计,MT004具备IP67防水设计，它采用高密度的防水材料，精密的防水结构设计，无论是雨天还是轻微的泥水溅泼，都能保持稳定的性能.",
    "高清液晶屏显示,MT005采用全自动监测车辆行驶状况，采用LED高清液晶屏显示，分辨率高，随车启动，停车自动休眠功能。无论是在白天还是在黑夜，都能提供清晰的画面。",
    "多功能一体化设计,它还具备超速报警/疲劳驾驶提醒、胎压监测等贴心功能。不仅如此，它还配备坡度仪，让驾驶更加安全。",
    "IP67防水设计，不惧恶劣天气，保证产品使用寿命。",
    "高清5寸IPS液晶触摸屏，给您带来良好的视觉体验。",
    "采用博世6轴陀螺仪传感器，确保稳定的性能和流畅的操控性。",
    "大屏幕液晶屏：显示各项数据，为用户提供良好的视觉体验。",
    "独家专利外观设计，辨识度高，彰显个性。",
    "操作简便：快速上手，方便用户使用。",
    "机身采用ABS+PS耐高温材质，耐用且不易老化。",
    "温度报警功能：让你随时掌握车辆状况，安全驾驶！",
    "多语言显示：支持中文、繁体、英文等，轻松应对各种场景！",
    "可调节压弯角度：倾斜角设置自，满足各种驾驶需求",
  ],
  technical_parameters: [
    "电压：12-24V 2A",
    '供电方式：ACC、USB',
    "防水等级：IP6-7级",
    "显示屏：5寸彩色屏",
    "分辨率：854*480",
    "主机尺寸: 140.5mm*82.5mm*23.5mm"
  ],
  about: [
    {
      name: '软件升级',
      desc: '请联系联系客服',
    }
  ],
  services: [
    "免费软件升级",
    "三年保修",
    "24小时客户服务",
  ],
  whychoose: [
    "致力于全球摩托车安全出行解决方案",
    "FXFINE摩托车设备领导品牌",
    "拥有十年研发经验的技术团队和工厂",
    "所有产品支持3年保修",
    "支持OEM、批发和代理直销",
  ],
  note: [
    "请先阅读MT005操作说明书后进行安装操作。",
    "MT005支持5-40V电压，请勿安装高于24V的供电电压。",
  ],
  qa: [
    {
      q: "MT005的画质如何？",
      a: "高清液晶屏显示，分辨率高，轻松记录你的驾驶过程。"
    },
    {
      q: "防水效果如何？",
      a: "MT005具备IP67防水设计，应对雨天和轻微的泥水溅泼毫无压力。"
    }
    ,
    {
      q: "它具备防震功能吗？",
      a: "MT005采用窄边框防水机身结构设计，可以抵御恶劣天气的影响，让你在各种天气条件下都能安心驾驶。IP6-7的防水防震等级，更是让它具备了出色的防摔抗震能力。"
    }
  ]
})
</script>
