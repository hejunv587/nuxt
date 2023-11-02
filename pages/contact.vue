<script lang="ts" setup>
import about_us from "~/assets/images/about_us.jpg"
import factory from "~/assets/images/factory.jpg"
import inside_factory from "~/assets/images/inside_factory.jpg"
import exhibition from "~/assets/images/exhibition.jpg"
import office from "~/assets/images/office.jpg"
import whyus from "~/assets/images/whyus.png"




</script>

<template>
    <main class="relative bg-[#2d2d30] pb-12">
        <section class="mx-auto container">
            <div class="container mx-auto md:px-6">
                <!-- Section: Design Block -->
                <section class="mb-32 text-center">
                    <div class="mx-auto max-w-[700px] md:px-3 p-4">
                        <h2 class="mb-10 text-3xl font-bold text-white text-start">联系我们</h2>
                        <div class="text-[#b6b4b1] text-left">
                            <p class="leading-7">如果您的问题在常见问题解签中没有得到解答，您可以在线或通过以下任何一种方式联系我们。无论您有什么问题，我们都会为您提供最好的售前和售后服务!</p>
                            <ul class="list-disc my-5 pl-5 space-y-3">
                                <li>邮箱: 872819119@qq.com (如有问题，24小时内回复)</li>
                                <li>手机: 13760354925</li>
                                <li>电话: 0755-27787225</li>
                                <li>地址: 广东省深圳市宝安区福海街道桥头港华兴三区五栋五楼</li>
                            </ul>
                        </div>

                        <form>
                            <div class="relative mb-3 py-4">
                                <input type="text"
                                    class="peer text-white block min-h-[auto] w-full border border-white border-1 z-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                    id="FormControlInputName" placeholder="Name" v-model="inputName" />
                                <label
                                    class="text-[#b6b4b1] pointer-events-none absolute left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:top-0 peer-focus:scale-[0.8] peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                    :class="{ '-translate-y-[0.9rem] scale-[0.8] block top-0': inputName, 'top-4': !inputName }">
                                    姓名
                                </label>
                            </div>

                            <div class="relative mb-3 py-4">
                                <input type="text"
                                    class="peer text-white block min-h-[auto] w-full border border-white border-1 z-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                    id="FormControlInputPhone" placeholder="Name" v-model="inputPhone" />
                                <label
                                    class="text-[#b6b4b1] pointer-events-none absolute left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:top-0 peer-focus:scale-[0.8] peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                    :class="{ '-translate-y-[0.9rem] scale-[0.8] block top-0': inputPhone, 'top-4': !inputPhone }">
                                    电话
                                </label>
                            </div>

                            <div class="relative mb-3 py-4">
                                <input type="text"
                                    class="peer text-white block min-h-[auto] w-full border border-white border-1 z-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                    id="FormControlInputEmail" placeholder="Email" v-model="inputEmail" />
                                <label
                                    class="text-[#b6b4b1] pointer-events-none absolute left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:top-0 peer-focus:scale-[0.8] peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                    :class="{ '-translate-y-[0.9rem] scale-[0.8] block top-0': inputEmail, 'top-4': !inputEmail }">
                                    邮箱
                                </label>
                            </div>

                            <div class="relative mb-6 py-4" data-te-input-wrapper-init>
                                <textarea
                                    class="peer text-white block min-h-[auto] w-full border border-white border-1 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                    id="FormControlInputMessage" rows="3" placeholder="Your message"
                                    v-model="inputMessage"></textarea>
                                <label
                                    class="text-[#b6b4b1] pointer-events-none absolute left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:top-0 peer-focus:scale-[0.8] peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                    :class="{ '-translate-y-[0.9rem] scale-[0.8] block top-0': inputMessage, 'top-4': !inputMessage }">
                                    内容
                                </label>
                            </div>
                            <button type="button" data-te-ripple-init data-te-ripple-color="light"
                                class="mb-6 inline-block w-full rounded bg-[#8b2323] px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white  transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                                提交
                            </button>
                        </form>
                    </div>
                </section>
                <!-- Section: Design Block -->
            </div>
        </section>
    </main>
</template>


<style scoped></style>

