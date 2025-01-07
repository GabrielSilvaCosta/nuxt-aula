<template>
  <!-- este NuxtLoadingIndicator e o carregamento da pagina com a cor vermelha -->
  <NuxtLoadingIndicator color="red" :height="3" :throttle="0" />
  <!-- para ligar o arquivo layout com este app vc coloca 'name='layout' -->
  <NuxtLayout name="layout">
    <!-- todo conteudo que esta no pages sera renderizado aqui no 'NuxtPage'
        começando pelo index principal que e o home -->
    <NuxtPage />
  </NuxtLayout>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
