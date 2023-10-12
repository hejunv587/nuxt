<script lang="ts" setup>
    const route = useRoute()
    const isIndex = ref(route.path === '/')
    console.log("index page isIndex===>",isIndex)
</script>

<template>
    <main class="relative bg-[#2d2d30]">
        <section class="">
            <Hero />
        </section>
        <section class="mx-auto mt-4 container">
            <JoinUs />
        </section>
        <section class="mx-auto mt-4 container">
            <Introduce />
        </section>
        <section class='sm:px-16 px-8 sm:py-24 py-12 mt-16'>
            <OurStory />
        </section>
        <section class='sm:px-16 px-8 sm:py-24 py-8'>
            <OurQualification />
        </section>
        <section class='sm:px-16 px-8 sm:py-24 py-8'>
            <PopularProdcts />
        </section>
        <section class='sm:px-16 px-8 sm:py-24 py-8'>
            <LatestNews />
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

