<template>
  <Header />

  <img src="~/assets/img/image1.jpeg" width="300" height="230" />

  <!-- todo conteudo esta dentro do slot -->
  <slot />
  <Footer />
</template>

<script setup></script>

<style lang="css">
@import "@/assets/css/style.css";
</style>
