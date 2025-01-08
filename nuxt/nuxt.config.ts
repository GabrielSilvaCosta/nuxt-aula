// https://nuxt.com/docs/api/configuration/nuxt-config
// import { resolve } from "path";
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      "Kode Mono": true,
    },
  },
  runtimeConfig: {
    apiSecret: process.env.API_SECRET,
    dev: {
      apibase: process.env.NUXT_DEV_API_BASE,
    },
    prod: {
      apibase: process.env.NUXT_PROD_API_BASE,
    },
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE,
    },
  },

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
});
