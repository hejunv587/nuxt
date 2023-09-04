// https://nuxt.com/docs/api/configuration/nuxt-config
// import tailwindTypography from '@tailwindcss/typography'

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
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
      title: "Autool Nuxt3",
      meta: [
        {
          name: "description",
          content: "everything about Autool&nuxt3",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        },
      ],
    },
  },
  runtimeConfig:{
    currencyKey: process.env.CURRENCY_API_KEY
  }
});
