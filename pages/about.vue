<script lang="ts" setup>
// const { data } = await useFetch('/api/test?name=tom', {
//     method: 'post',
//     body: { age: 30 }
// })

const { data } = await useFetch('/api/currency/CNY')
</script>

<template>
    <main class="relative bg-[#2d2d30] pb-8">
        <section class="mx-auto container">
            <div id="about_container" class="flex flex-col flex-wrap">
                <div class="px-4 py-5 min-h-24 block max-w-7xl w-full mx-auto">
                    <img class="w-full h-full object-cover object-center"
                        src="https://cdn.shopify.com/s/files/1/0615/2503/3117/t/7/assets/168863862611_jpg.jpeg?v=1688638627"
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

                    <div id="features" class="bg-[#f6f6f6] mt-6 text-black p-4 flex flex-row w-full">
                        <div id="featuretabs" class="">
                            <div class="inline-block"
                                style="color: rgb(0, 0, 0); font-weight: initial; background-color: rgb(255, 255, 255);">OUR
                                PURPOSE</div>
                            <div class="spbitem-tab-nav-item inactive"
                                style="color: rgb(0, 0, 0); background-color: initial; font-weight: initial;">OUR VISION
                            </div>
                            <div class="spbitem-tab-nav-item inactive"
                                style="color: rgb(0, 0, 0); background-color: initial;">OUR MISSION</div>
                            <div class="spbitem-tab-nav-item inactive"
                                style="color: rgb(0, 0, 0); background-color: initial;">OUR SLOGAN</div>
                        </div>
                        <div id="pbitm-id-4" class="spb-item   type_container spb-item-id_4 "
                            style="display: flex; flex-flow: column wrap; direction: ltr; background-color: rgb(255, 255, 255); min-height: 100px; color: rgb(0, 0, 0); width: 100%;">
                            <div id="pbitm-id-3" class="spb-item   type_paragraph spb-item-id_3 "
                                style="display: flex; flex-flow: column wrap; direction: ltr; line-height: 2em; font-family: inherit; max-width: 1280px; margin-left: auto; margin-right: auto; width: 100%; box-shadow: none;">
                                <div style="text-shadow: none;">
                                    <p><span style="font-size: 16px;">Motorcycle testing and diagnosis expert</span></p>
                                </div>
                            </div>
                        </div>
                        <div id="pbitm-id-6" class="spb-item   type_container spb-item-id_6 "
                            style="display: none; flex-flow: column wrap; direction: ltr; background-color: rgb(255, 255, 255); min-height: 100px; color: rgb(0, 0, 0); width: 100%;">
                            <div id="pbitm-id-1" class="spb-item   type_paragraph spb-item-id_1 "
                                style="display: flex; flex-flow: column wrap; direction: ltr; line-height: 2em; font-family: inherit; max-width: 1280px; margin-left: auto; margin-right: auto; width: 100%; box-shadow: none;">
                                <div style="text-shadow: none;">
                                    <p><span style="font-size: 16px;">Accompanying users, we are committed to becoming the
                                            backbone of the motorcycle aftermarket.</span></p>
                                </div>
                            </div>
                        </div>
                        <div id="pbitm-id-62" class="spb-item   type_container spb-item-id_62 "
                            style="display: none; flex-flow: column wrap; direction: ltr; background-color: rgb(255, 255, 255); color: rgb(0, 0, 0); width: 100%;">
                            <div id="pbitm-id-63" class="spb-item   type_paragraph spb-item-id_63 "
                                style="display: flex; flex-flow: column wrap; direction: ltr; width: 100%; box-shadow: none;">
                                <div style="text-shadow: none;">
                                    <p><span style="font-size: 16px;">With craftsmanship spirit of craft and technology to
                                            create the outstanding charm of products. Changing lives with technology makes
                                            it more convenient to repair motorbikes.</span></p>
                                </div>
                            </div>
                        </div>
                        <div id="pbitm-id-65" class="spb-item   type_container spb-item-id_65 "
                            style="display: none; flex-flow: column wrap; direction: ltr; background-color: rgb(255, 255, 255); color: rgb(0, 0, 0); width: 100%;">
                            <div id="pbitm-id-66" class="spb-item   type_paragraph spb-item-id_66 "
                                style="display: flex; flex-flow: column wrap; direction: ltr; width: 100%; box-shadow: none;">
                                <div style="text-shadow: none;">
                                    <p><span style="font-size: 16px;">Make Your Motorcycle Repair Easier.</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
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

