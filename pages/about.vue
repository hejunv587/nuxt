<script lang="ts" setup>
// const { data } = await useFetch('/api/test?name=tom', {
//     method: 'post',
//     body: { age: 30 }
// })

const { data } = await useFetch('/api/currency/CNY')
</script>

<template>
    <div>
        <h1>About Page</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum iure, repellat facere rerum, voluptatem quas
            totam est, labore aut voluptates autem nostrum vitae alias. Dolores itaque eligendi nam ex facilis?</p>
        <p>{{ data }}</p>
    </div>
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

