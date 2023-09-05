<template>
    <header class="sm:px-16 px-8 py-8 z-10 w-full">
        <nav class="container my-0 mx-auto p-4 flex justify-between items-center">
            <div>
                <NuxtLink to="/" class="font-bold">
                    <img class="m-0 w-[75px] h-[45px]"
                        data-original-logo="https://www.cnautool.com/wp-content/uploads/2021/04/AUTOOL.png"
                        data-alternate-logo="https://www.cnautool.com/wp-content/uploads/2021/04/AUTOOL.png"
                        src="https://www.cnautool.com/wp-content/uploads/2021/04/AUTOOL.png" alt="AUTOOL">
                </NuxtLink>
            </div>

            <ul class="flex justify-center gap-16 max-lg:hidden">
                <li v-for="(item, index) in menuList" :key="index">
                    <NuxtLink :to="item.path" class="font-montserrat leading-normal text-lg text-slate-gray">{{ item.name }}
                    </NuxtLink>
                </li>
                <!-- <li>
                    <NuxtLink to="/about">About</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/products" class="btn">Products</NuxtLink>
                </li> -->
            </ul>


            <div class="hidden max-lg:block">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" class="w-[25px] h-[25px]"
                    viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path
                        d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                </svg>
            </div>
        </nav>
    </header>

    <div class="container mx-auto p-4">
        <slot />
    </div>
</template>

<script lang="ts" setup>
const menuList = [
    {
        name: '首页',
        path: '/'
    },
    {
        name: '关于我们',
        path: '/about'
    },
    {
        name: '产品',
        path: '/products'
    },
    {
        name: '新闻动态',
        path: '/news'
    },
    {
        name: '服务与支持',
        path: '/service'
    },
    {
        name: '联系我们',
        path: '/contact'
    },
]
</script>


<style scoped>
.router-link-exact-active {
    color: #12b488;
}
</style>
