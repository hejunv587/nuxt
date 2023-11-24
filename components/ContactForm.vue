<template>
    <!-- Container for demo purpose -->
    <div class="container my-24 mx-auto md:px-6">
        <!-- Section: Design Block -->
        <section class="mb-32 text-center">
            <div class="mx-auto max-w-[700px] md:px-3">
                <h2 class="mb-12 text-3xl font-bold text-white">联系我们</h2>
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
                            id="FormControlInputPhone" placeholder="Phone" v-model="inputPhone" />
                        <label
                            class="text-[#b6b4b1] pointer-events-none absolute left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:top-0 peer-focus:scale-[0.8] peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                            :class="{ '-translate-y-[0.9rem] scale-[0.8] block top-0': inputPhone, 'top-4': !inputPhone }">
                            手机
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
                            id="FormControlInputMessage" rows="3" placeholder="Your message" v-model="inputMessage"></textarea>
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
    <!-- Container for demo purpose -->
</template>

<script lang="ts" setup>
const inputName = ref('');
const inputEmail = ref('');
const inputMessage = ref('');
const inputPhone = ref('');


</script>
  
<style scoped>
/* You can add custom styles here if needed */
</style>
  