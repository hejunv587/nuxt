<template>
    <!-- <header class="px-8 py-8 z-10 w-full" :class="$nuxt._route.name === 'index' ? 'absolute' : ''"> -->
    <header class="px-8 z-10 w-full">
        <nav class="container my-0 mx-auto py-4 flex justify-between items-center">
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
                    <!-- <div class="relative group"> -->
                    <div class="relative" @mouseover="showSubMenu(index)" @mouseleave="delayHideSubMenu(index)">
                        <a @click="togglePcMenu(item)"
                            class="font-montserrat leading-normal text-lg text-slate-gray cursor-pointer hover:text-blue-500">
                            {{ item.name }}
                        </a>
                        <ul v-if="activeSubMenu === index && item.subMenuList"
                            class="absolute z-20 bg-white border rounded-lg mt-2 p-2 space-y-4 whitespace-nowrap"
                            @mouseover="showSubMenu(index)" @mouseleave="delayHideSubMenu(index)">
                            <li v-for="(subItem, subIndex) in item.subMenuList" :key="subIndex" class="z-20">
                                <NuxtLink :to="subItem.path" class="block text-slate-gray hover:text-blue-500">{{
                                    subItem.name }}</NuxtLink>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>


            <div class="hidden max-lg:block">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" class="w-[25px] h-[25px]"
                    v-if="!isMobileMenuOpen && !isSubMenuOpen" @click="toggleMenuOn"
                    viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path
                        d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                </svg>
                <img src="~/assets/icons/close.svg" alt="关闭菜单" class="w-[25px] h-[25px]"
                    v-if="isMobileMenuOpen || isSubMenuOpen" @click="toggleMenuOff" />
            </div>
        </nav>

        <!-- 移动设备菜单 -->


        <div v-if="isMobileMenuOpen" class="overflow-hidden ">
            <!-- <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-screen h-screen bg-white z-20"> -->
            <div class="absolute w-full h-96 bg-white z-10 block shadow-md top-30 left-0 px-8">

                <ul class="py-4 space-y-6 z-20 font-bold text-xl">
                    <!-- 移动设备菜单项 -->

                    <li v-for="(item, index) in menuList" :key="index" class="z-20 flex justify-between items-center"
                        @click="toggleSubMenu(item)">
                        <span>{{ item.name }}</span>
                        <!-- 添加向右的箭头图标 -->
                        <span v-if="item.subMenuList">
                            <img src="~/assets/icons/next.svg" alt="返回图标" class="w-4 h-4" />
                        </span>
                    </li>
                </ul>
            </div>
        </div>




        <!-- 子菜单项 -->
        <div v-if="isSubMenuOpen" class="overflow-hidden px-8">
            <div class="absolute w-full h-96 bg-white z-10 block shadow-md top-30 left-0 px-8">

                <ul class="py-4 space-y-6 z-20 font-bold text-xl">

                    <li class="z-20 relative cursor-pointer flex items-center text-slate-gray" @click="backMenu">
                        <span class="mr-2">
                            <img src="~/assets/icons/return.png" alt="返回图标" class="w-4 h-4" />
                        </span>
                        返回主菜单
                    </li>
                    <li v-for="(item, index) in subMenuList" :key="index" class="z-20">
                        <NuxtLink :to="item.path" class="text-black hover:text-blue-500">{{ item.name }}</NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </header>

    <!-- <div class="container mx-auto"> -->
    <div class="w-full">
        <slot />
    </div>

    <Footer class="" />
</template>

<script lang="ts" setup>
const isMobileMenuOpen = ref(false);
const isSubMenuOpen = ref(false);

const activeSubMenu = ref(null);
const delayTimer = ref(null);

const showSubMenu = (index) => {
    clearTimeout(delayTimer.value);
    activeSubMenu.value = index;
};

const delayHideSubMenu = (index) => {
    // 延迟关闭子菜单
    // delayTimer.value = setTimeout(() => {
    //     activeSubMenu.value = null;
    // }, 1000); // 这里设置延迟时间，单位是毫秒
};

const togglePcMenu = async (e) => {
    console.log("toggleSubMenu", e)
    if (!e.subMenuList) {
        await navigateTo({
            path: e.path
        })
    }
};

const toggleMenuOn = () => {
    isMobileMenuOpen.value = true;
};

const toggleMenuOff = () => {
    isMobileMenuOpen.value = false
    isSubMenuOpen.value = false
};

const backMenu = () => {
    isSubMenuOpen.value = false
    isMobileMenuOpen.value = true
}

const toggleSubMenu = async (e) => {
    console.log("toggleSubMenu", e)
    if (e.subMenuList) {
        isMobileMenuOpen.value = false
        isSubMenuOpen.value = !isSubMenuOpen.value;
        subMenuList.value = e.subMenuList
    } else {
        isMobileMenuOpen.value = false
        await navigateTo({
            path: e.path
        })
    }
};

// const navigateTo = (path: string) => ({
//     path: path
// })

const subMenuList = ref([])

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
        path: '/service',
        subMenuList: [
            {
                name: '资料下载',
                path: '/downloads'
            },
            {
                name: '配送服务',
                path: '/delivery'
            },
            {
                name: '退换货服务',
                path: '/returns'
            },
            {
                name: '维护及保修期',
                path: '/maintenance'
            },
            {
                name: '全球销售条款',
                path: '/sales-terms'
            },
            {
                name: '隐私权政策',
                path: '/privacy-policy'
            }
        ]
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
