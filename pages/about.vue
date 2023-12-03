<script lang="ts" setup>
import about_us from "~/assets/images/about_us.jpg"
import factory from "~/assets/images/factory.jpg"
import inside_factory from "~/assets/images/inside_factory.jpg"
import exhibition from "~/assets/images/exhibition.jpg"
import office from "~/assets/images/office.jpg"
import whyus from "~/assets/images/whyus.jpg"


const features = [
    { name: '目标', description: '成为摩托车智能与安全设备市场的中坚力量' },
    {
        name: '愿景', description: 'FXFINE福克菲 始终保持革命性的创新和探索精神，凭借多年的摩托车智能与安全产品的研发经验，生产出优质的摩托车智能与安全产品。我们也尊重所有忠实用户的反馈需求。如果您对产品升级有任何建议，请随时联系我们。我们希望创造出更多满足用户需求的产品！'
    },
    {
        name: '任务', description: 'FXFINE福克菲 始终将客户放在第一位。我们承诺对所有产品提供三年保修。我们有严格的质量控制部门，确保每个产品在发货前都是完整且可用的。我们认真倾听客户的任何反馈，让每一位信任FXFINE福克菲 的客户对我们的产品和服务有更好的感受！'
    },
    { name: '理念', description: 'FXFINE福克菲 专注于摩托车智能与安全解决方案。秉承着创新创造价值、质量第一、用户体验第一的理念，努力为每一位摩托车爱好者提供更优质的智能产品和服务。' },
];

const images = [
    { name: '工厂', src: factory },
    { name: '工厂内部', src: inside_factory },
    { name: '展会', src: exhibition },
    { name: '办公室', src: office },
]

let selectedFeature = ref(features[0]);

const selectFeature = (feature) => {
    console.log(feature)
    selectedFeature.value = feature;
};

</script>

<template>
    <main class="relative bg-[#2d2d30] pb-8">
        <section class="mx-auto container">
            <div id="about_container" class="flex flex-col flex-wrap">
                <div class="px-4 py-5 min-h-24 block max-w-7xl w-full mx-auto">
                    <img class="w-full h-full object-cover object-center" :src="about_us" alt="Image" title="" />

                    <div id="introduction"
                        class="mt-6 text-white flex flex-col flex-wrap text-left leading-8 mx-auto w-full shadow-none">
                        <div style="text-shadow: none;">


                            <p id="isPasted"><span>
                                    FXFINE福克菲
                                    于2015年成立于中国深圳，一直专注于提供高品质的摩托车智能设备。我们立志成为摩托车智能与安全设备市场的中坚力量。我们的团队成员都有多年的汽车和摩托车智能与安全研发经验。凭借多年的行业经验，我们已成为摩托车爱好者和专业人士值得信赖的品牌。

                                    &nbsp;</span></p>
                            <p><span>我们的产品包括摩托车胎压监测、摩托车行车记录仪以及摩托车CarPlay。我们还在开发新的摩托车专用设备。未来还将推出更多有竞争力的产品。
                                    &nbsp;</span></p>
                            <p><span>FXFINE福克菲 始终保证产品的稳定性和性能，坚持产品技术的持续优化和产品升级。确保增强产品的适用性，成为专业、得力的摩托车行车安全助手。 &nbsp;</span>
                            </p>
                            <p><span>在FXFINE福克菲，我们相信客户满意度至关重要，这就是为什么我们努力为客户提供最好的服务和支持。我们很自豪我们的客户对我们的产品和服务感到满意，并致力于在我们所做的一切中保持最高的质量和创新标准。
                                    &nbsp;</span></p>
                            <p><span>我们拥有专业工厂，支持OEM和ODM等批发订单。如果您正在寻找可靠、高品质的设备来帮助您满足您的行车需求，那么 FXFINE福克菲 就是您的最佳选择。</span>
                            </p>
                        </div>
                    </div>


                </div>
                <div class="min-h-24 block max-w-7xl w-full mx-auto bg-[#f6f6f6] p-4 ">
                    <div id="features" class="mt-6 text-black flex flex-row w-full">
                        <div id="featuretabs" class="min-w-fit">
                            <ul>
                                <li v-for="feature in features" :key="feature.name" @click="selectFeature(feature)"
                                    class="p-4 cursor-pointer"
                                    :class="{ 'bg-white': selectedFeature.name === feature.name }">
                                    {{ feature.name }}
                                </li>
                            </ul>
                        </div>
                        <div class="p-4 bg-white w-full">
                            <ul>
                                <li class="mb-4" v-if="selectedFeature">
                                    {{ selectedFeature.description }}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- 添加图片部分 -->
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                        <div v-for="image in images" :key="image.name" class="text-center">
                            <img :src="image.src" alt="Image" class="w-full h-auto mb-2">
                            <p>{{ image.name }}</p>
                        </div>
                    </div>
                </div>
                <div class="min-h-24 block max-w-7xl w-full mx-auto">
                    <img class="w-full h-full object-cover object-center" :src="whyus" alt="Image" title="" />
                </div>

            </div>
        </section>
    </main>
</template>


<style scoped>
.h1 {
    margin-bottom: 20px;
    font-size: 36px;
}

.p {
    margin: 20px 0;
}
</style>

