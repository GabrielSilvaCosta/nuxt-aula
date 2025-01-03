<template>
  <div>
    <h2>Home</h2>
  </div>
</template>

<script setup>
// usando o useHead para configurar o title e o meta (nome de pagina e descrição la em cima )
useHead({
  title: "Home",
  meta: [
    {
      name: "description",
      content: "Home",
    },
  ],
});
</script>

<style lang="scss" scoped></style>
