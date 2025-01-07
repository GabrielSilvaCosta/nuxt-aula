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

  // este componente faz com que o nuxt reconheça os componentes criados na pasta components
  // e pode ter pasta na dentro da pasta de componentes que funciona do mesmo jeito sem precisar importar
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  // alias: {
  //   imgs: resolve(__dirname, "./assets/img"),
  //   "!!": resolve(__dirname, "./node_modules"),
  // },
});
