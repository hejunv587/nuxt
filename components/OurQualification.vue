<template>
    <section id="qualifications" class="max-container max-sm:mt-12">
        <div class="flex flex-col justify-start gap-5">
            <h2 class="text-4xl font-palanquin font-bold">
                我们的<span class="text-coral-red">资质</span> 
            </h2>
            <p class="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
                创新专利证书和规范标准是AUTOOL价值观的重要组成部分，力求保障我们的产品、用户和合作伙伴的权益。
            </p>
        </div>

        <div class="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-8 gap-16 items-center">
            <QualificationCard v-for="item in qualifications" :key="item.name" :product="item" />
        </div>
    </section>
</template>
  
<script setup lang="ts">
const qualifications = [
    {
        imgURL: "https://www.cnautool.com/wp-content/uploads/2023/09/证书-质量管理体系.jpg",
        name: "ISO管理体系认证",
    },
    {
        imgURL: "https://www.cnautool.com/wp-content/uploads/2023/09/证书-发明专利.jpg",
        name: "外观设计专利",
    },
    {
        imgURL: "https://www.cnautool.com/wp-content/uploads/2023/09/证书-实用新型.jpg",
        name: "实用新型发明专利"
    },
    {
        imgURL: "https://www.cnautool.com/wp-content/uploads/2023/09/证书-软件著作权.jpg",
        name: "计算机软件著作权"
    },
]

</script>
  