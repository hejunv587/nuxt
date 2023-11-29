<template>
    <section class="sm:pl-16 pl-8 top-0 bg-[#2d2d30]">
        <div class="sm:px-16 px-8 sm:pb-24 pb-12 pt-4 mx-auto container text-white">
            <ContentDoc>
                <template #not-found>
                    <div>
                        <h1>文档未找到</h1>
                        <p>抱歉，请求的文档未找到。</p>
                    </div>
                </template>
            </ContentDoc>
        </div>
    </section>
</template>
  
<script setup>

</script>

<style scoped>
img { 
    display: inline-block;
    margin: 0 auto !important;
}
</style>
