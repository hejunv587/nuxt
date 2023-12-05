<script lang="ts" setup>
import dearler1 from "~/assets/images/dearler1.jpg"
import dearler2 from "~/assets/images/dearler2.jpg"

useHead({
    title: 'FXFINE福克菲 成为经销商',
    meta: [
        { name: 'description', content: 'XFINE 福克菲 成为经销商' }
    ]
})

const questions = [
    {
        q:'作为FXFINE福克菲经销商需要考虑哪些主要因素？',
        a:'FXFINE福克菲经销商主要从市场拓展能力、分销销售路线建立、财务实力、线下店铺规模和位置、在线社交媒体影响力等方面进行考虑。'
    },
    {
        q:'如果我成为经销商，我将拥有多大的销售区域/销售区域？',
        a:'销售区域是根据个别情况确定的，受许多因素的强烈影响。其中一些因素包括市场规模、人口密度、市场人口统计、经销商位置和设施、经销商产品独家性以及经销商的常规库存水平。'
    },
    {
        q:'FXFINE福克菲能帮助我进行市场营销吗？',
        a:'FXFINE福克菲为其经销商提供的市场营销支持超过任何其他摩托车智能与安全设备制造商。作为FXFINE福克菲的经销商，您将获得许多市场营销服务，包括售前和售后支持。'
    },
    {
        q:'我需要保持最低库存才能成为FXFINE经销商吗？',
        a:'是的，成为经销商需要有最低初始库存，具体数量可能会根据市场规模和您所在地区的不同而有所不同；FXFINE福克菲经销商销售代表在审核了您提供的位置后，将确定在该地区成为经销商所需的最低初始库存。'
    },
    {
        q:'FFXFINE福克菲是否制造其他摩托车设备？作为经销商，我可以销售吗？',
        a:'FXFINE福克菲主要生产摩托车智能与安全出行设备。作为经销商，您也可以销售这些产品。如果您对其他与摩托车相关的产品有大量需求，您也可以联系我们的销售代表，我们将为您提供最具性价比的产品。'
    },
    {
        q:'FXFINE福克菲的制造基地在哪里？',
        a:'FXFINE福克菲的制造基地总部位于中国深圳。'
    },
]
</script>

<template>
    <main class="relative bg-[#2d2d30] pb-12">
        <section class="mx-auto container">
            <div class="container mx-auto md:px-6">
                <div class="block">
                    <img class="mx-auto py-4 w-full align-middle" :src="dearler1" alt="FXFINE福克菲成为经销商">
                </div>
                <h2 class="mb-10 text-3xl font-bold text-[#bd4343] text-center mt-4">成为经销商</h2>
                <div class="text-[#b6b4b1] leading-7 my-4">
                    <p class="mb-4">感谢您对成为FXFINE福克菲经销商的兴趣。作为一家摩托车工具品牌，FXFINE福克菲一直在寻找具有战略市场的强大经销商合作伙伴。</p>

                    <p class="mb-4">
                        这一部分包含了更多关于成为经销商的信息，以便您了解更多。在您查看了所有的信息后，如果您或您的公司想要与FXFINE福克菲建立合作关系，并愿意迎接挑战并收获回报，那么请花几分钟时间填写信息表格。提交表格后，经销商销售代表将与您联系，向您提供更多关于成为经销商的细节，因此请留意联系方式。
                    </p>

                    <p class="">感谢您对FXFINE福克菲的信任和支持！</p>

                </div>
                <h2 class="mb-10 text-3xl font-bold text-[#bd4343] text-center mt-4">为什么选择FXFINE福克菲</h2>
                <div class="grid md:grid-cols-3 grid-cols-1 leading-7 gap-4">
                    <div class="p-2">
                        <h3 class="text-white">1.独特的技术</h3>
                        <p class="text-[#b6b4b1]">
                            FXFINE福克菲 拥有一家设计和开发产品的工厂。  凭借数十年的摩托车智能与安全出行产品研究经验，  FXFINE福克菲 的技术人员能够准确了解摩托车车主的需求，  开发出真正满足客户需求的产品。  无论您驾驶的是哈雷摩托车还是宝马摩托车，  我们都能为您提供合适的摩托车智能与安全出行设备。
                        </p>
                    </div>
                    <div class="p-2">
                        <h3 class="text-white">2.完整的经销商系统</h3>
                        <p class="text-[#b6b4b1]">
                            我们是增长最快的制造商，并且拥有完整的经销商分销系统。我们致力于保护每一个经销商的权益，以确保实现双赢的合作。因此，当你选择我们时，你的利益也得到了保护。我们提供24小时的销售支持。我们的销售代表在销售前也会帮助你更快更好地了解产品和业务，帮助你取得更好的销售成果。
                        </p>
                    </div>
                    <div class="p-2">
                        <h3 class="text-white">3.持续的迭代创新</h3>
                        <p class="text-[#b6b4b1]">
                            FXFINE福克菲 拥有一支训练有素的售后团队，  专门处理客户产品问题并收集客户对产品的反馈。  对于产品建议，  售后团队会及时反馈给产品设计师，  产品设计师将产品进行进一步的调整和优化，  以提供更好的摩托车智能与安全出行设备。
                        </p>
                    </div>
                </div>
                <div class="block">
                    <img class="mx-auto py-4 w-full align-middle" :src="dearler2" alt="FXFINE福克菲成为经销商">
                </div>
                <h2 class="mb-10 text-3xl font-bold text-white text-center mt-4">常见问题解答</h2>
                <div class="grid md:grid-cols-2 grid-cols-1 leading-7 gap-4">
                    <div class="p-2" v-for="(item, index) in questions" :key="index">
                        <h3 class="text-[#bd4343]">{{ item.q }}</h3>
                        <p class="text-[#b6b4b1]">
                            {{ item.a }}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>


<style scoped></style>

