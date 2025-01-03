<template>
  <div>
    <h2>User Found</h2>
  </div>
</template>

<script setup>
// aqui estamos usando o route params
const route = useRoute();

//verificando os params que e o id do usuario
console.log(route.params.id);
</script>

<style lang="scss" scoped></style>
