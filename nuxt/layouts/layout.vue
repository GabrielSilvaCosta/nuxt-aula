<template>
  <Header />

  <img src="~/assets/img/image1.jpeg" width="300" height="230" />

  <!-- todo conteudo esta dentro do slot -->
  <slot />
  <Footer />
</template>

<script setup>
// usando o useRuntimeConfig para pegar as variaveis de ambiente
const runtimeConfig = useRuntimeConfig();

console.log(runtimeConfig);
</script>

<style lang="css">
@import "@/assets/css/style.css";
</style>
