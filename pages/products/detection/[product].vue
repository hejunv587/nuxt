<template>
    <div class="class='sm:px-16 px-8 sm:py-24 py-12 mt-16'">
        <!-- <ContentDoc path="/content/products/detection/AS502.md"/> -->
        <!-- <ContentDoc path="/readme" /> -->
        <ContentDoc>
            <template #not-found>
                <div>
                    <h1>文档未找到</h1>
                    <p>抱歉，请求的文档未找到。</p>
                </div>
            </template>
        </ContentDoc>
        <!-- <slot />
        <NuxtExampleLayout example="document-driven" repo="nuxt/content/products/detection/">
            <NuxtPage class="prose text-left" />
        </NuxtExampleLayout> -->
    </div>
</template>
  
<script setup>

</script>
  