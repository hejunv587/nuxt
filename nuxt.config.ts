// https://nuxt.com/docs/api/configuration/nuxt-config
// import tailwindTypography from '@tailwindcss/typography'

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/content"],
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config",
    exposeConfig: false,
    exposeLevel: 2,
    config: {
      plugins: [],
    },
    injectPosition: "first",
    viewer: true,
  },
  app: {
    head: {
      title: "FXFINE 福克菲官方网站",
      meta: [
        {
          name: "description",
          content: "Fxfine 福克菲官方网站",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        },
        { rel: "icon", type: "image/icon", href: "favicon.ico" }

      ],
    },
  },
  content: {
    // // 设置 Markdown 内容目录的路径
    // documentDriven: {
    //   layoutFallbacks: ['default'],
    // },
    markdown: {
      dir: "content",
    },
  },
  runtimeConfig: {
    currencyKey: process.env.CURRENCY_API_KEY,
  },
});
