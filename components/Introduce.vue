<template>
    <div class="relative block z-0 text-2xl text-center">
        <h2 class="text-white text-4xl font-bold my-8">关于FXFINE</h2>
        <p class="text-[#b6b4b1] text-lg max-w-2xl mx-auto break-words">FXFINE成立于中国深圳，多年来一直专注于全球摩托车智能与安全方案</p>
    </div>
    <div class="lg:grid lg:grid-cols-3 gap-4 mt-6 h-full">
        <div v-for="(item, index) in items" :key="index">
            <TextCard :content="item" />
        </div>
    </div>
</template>
  
<script lang="ts" setup>
const items = [
    {
        title: "独特的技术",
        text: "FXFINE拥有一家设计和开发产品的工厂。  凭借数十年的摩托车智能与安全产品研究经验，  FXFINE的技术人员能够准确了解摩托车车主的需求，  开发出真正满足客户需求的产品。  无论您驾驶的是哈雷摩托车还是宝马摩托车，  我们都能为您提供合适的摩托车智能与安全设备。"
    },
    {
        title: "持续迭代创新",
        text: "FXFINE拥有一支训练有素的售后团队，  专门处理客户产品问题并收集客户对产品的反馈。  对于产品建议，  售后团队会及时给反馈产品设计师，  产品设计师将产品进行进一步的调整和优化，  以提供更好的摩托车智能与安全设备。"
    },
    {
        title: "我们的愿景",
        text: "我们致力于成为摩托车智能与安全产品市场的中坚力量。  以工艺与技术的工匠精神，  打造摩托车智能与安全产品的卓越魅力。  用科技改变生活，  让摩托车出行变得更安全、便捷。"
    }
]
</script>
  
<style scoped>
/* You can add custom styles here if needed */
</style>
  