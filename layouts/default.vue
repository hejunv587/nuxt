<template>
    <header class="px-8 py-8 z-10 w-full" :class="$nuxt._route.name === 'index' ? 'absolute' : ''">
        <nav class="container my-0 mx-auto p-4 flex justify-between items-center">
            <div>
                <NuxtLink to="/" class="font-bold">
                    <img class="m-0 w-[75px] h-[45px]"
                        data-original-logo="https://www.cnautool.com/wp-content/uploads/2021/04/AUTOOL.png"
                        data-alternate-logo="https://www.cnautool.com/wp-content/uploads/2021/04/AUTOOL.png"
                        src="https://www.cnautool.com/wp-content/uploads/2021/04/AUTOOL.png" alt="AUTOOL">
                </NuxtLink>
            </div>

            <ul class="flex-1 flex justify-center gap-12 max-lg:hidden">
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


            <div class="hidden max-lg:block" @click="toggleMenu">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" class="w-[25px] h-[25px]"
                    viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path
                        d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                </svg>
            </div>
        </nav>

        <!-- 移动设备菜单 -->
        

        <div v-if="isMobileMenuOpen" class="absolute w-full overflow-hidden top-16 left-0">
            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-screen h-screen bg-white z-20">
                <ul class="p-4 space-y-4 z-20">
                    <!-- 移动设备菜单项 -->
                    <li v-for="(item, index) in menuList" :key="index" class="z-20">
                        <NuxtLink :to="item.path" class="text-slate-gray hover:text-blue-500">{{ item.name }}</NuxtLink>
                    </li>
                    <!-- 子菜单项 -->
                    <li v-if="selectedMainMenu" v-for="(subItem, subIndex) in selectedMainMenu.subMenu" :key="subIndex">
                        <NuxtLink :to="subItem.path" class="text-slate-gray hover:text-blue-500">{{ subItem.name }}
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </header>

    <div class="container mx-auto">
        <slot />
    </div>

    <Footer class="mt-16" />
</template>

<script lang="ts" setup>
const isMobileMenuOpen = ref(false);

const toggleMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

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
