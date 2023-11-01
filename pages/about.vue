<script lang="ts" setup>
import about_us from "~/assets/images/about_us.jpg"
import factory from "~/assets/images/factory.jpg"
import inside_factory from "~/assets/images/inside_factory.jpg"
import exhibition from "~/assets/images/exhibition.jpg"
import office from "~/assets/images/office.jpg"
import whyus from "~/assets/images/whyus.png"


const features = [
    { name: '目标', description: '我们的目标是...' },
    { name: '愿景', description: '我们的愿景是...' },
    { name: '任务', description: '我们的任务是...' },
    { name: '标语', description: '我们的标语是...' },
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
                    <img class="w-full h-full object-cover object-center"
                        :src="about_us"
                        alt="Image" title="" />

                    <div id="introduction"
                        class="mt-6 text-white flex flex-col flex-wrap text-left leading-8 mx-auto w-full shadow-none">
                        <div style="text-shadow: none;">
                            <p id="isPasted"><span>FXTUL was founded in 2019 in Shenzhen,
                                    China, and has been specializing in providing high-quality motorcycle repair equipment.
                                    We
                                    are determined to become the backbone of the motorcycle back-end market. Our team
                                    members
                                    all have years of experience in car and motorcycle repair. With years of experience in
                                    the
                                    industry, we have established ourselves as a trusted name among motorcycle enthusiasts
                                    and
                                    professionals alike.&nbsp;</span></p>
                            <p><span>Our products include automotive smoke leak
                                    detectors,
                                    motorcycle and automotive injector cleaners and testers, and motorcycle diagnostic
                                    scanners.
                                    We are also developing new repair tools, such as lifts. More competitive products will
                                    be
                                    launched in the future. Whether you are a professional mechanic or a DIY enthusiast, we
                                    have
                                    the tools and equipment you need to get the job done right.&nbsp;</span></p>
                            <p><span>FXTUL always ensures the stability and performance
                                    of
                                    products and insists on continuous optimization of product technology and product
                                    upgrades.
                                    Ensure to enhance the applicability of the products to achieve to become a professional
                                    and
                                    competent assistant for motorcycle repair and maintenance.&nbsp;</span></p>
                            <p><span>At FXTUL, we believe that customer satisfaction is
                                    paramount, which is why we strive to provide the best possible service and support to
                                    our
                                    customers. We are proud that our customers are satisfied with our products and services
                                    and
                                    are committed to maintaining the highest standards of quality and innovation in
                                    everything
                                    we do.&nbsp;</span></p>
                            <p><span>We have professional factories and support wholesale
                                    orders such as OEM and ODM. If you are looking for reliable, high-quality equipment to
                                    help
                                    you with your motorcycle repair and maintenance needs, look no further than
                                    FXTUL.</span>
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
                    <img class="w-full h-full object-cover object-center"
                        :src="whyus"
                        alt="Image" title="" />
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

