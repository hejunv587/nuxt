<script lang="ts" setup>
import slogan from "~/assets/images/slogan.jpg"
import mappic from "~/assets/images/map.jpg"
import branchs from "~/assets/images/branchs.jpg"

const route = useRoute()
const isIndex = ref(route.path === '/')
console.log("index page isIndex===>", isIndex)

</script>

<template>
    <main class="relative bg-[#2d2d30] pb-8">
        <section class="">
            <Hero />
        </section>
        <section class="mx-auto mt-4 container">
            <JoinUs />
        </section>
        <section class="mx-auto mt-4 container">
            <Introduce />
        </section>
        <img :src="slogan" alt="slogan" class="object-cover object-center w-full mt-4">
        <img :src="mappic" alt="map" class="object-cover object-center w-full ">
        <img :src="branchs" alt="branchs" class="object-cover object-center w-full ">
        <!-- <section class="mx-auto mt-4 container">
            <Introduce1 />
        </section> -->
        <section class='mx-auto mt-4 container'>
            <PopularProdcts />
        </section>
        <section class='mx-auto mt-4 container'>
            <Blogs />
        </section>
        <section class='mx-auto mt-4 container'>
            <ContactForm/>
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

