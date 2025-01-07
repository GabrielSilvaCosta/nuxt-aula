<template>
  <div
    class="container flex flex-col items-center justify-center gap-4 text-center"
  >
    <h2
      class="text-3xl font-bold text-[#FF2D20] dark:text-[#FF2D20] md:text-5xl"
    >
      {{ error?.statusCode }}
    </h2>
    <p class="text-lg text-[#FF2D20] dark:text-[#FF2D20] md:text-2xl">
      {{ error?.statusMessage }}
    </p>
    <button
      class="bg-[#FF2D20] text-white px-4 py-2 rounded"
      @click="handleRedirect"
    >
      Redirect to Home
    </button>
  </div>
</template>

<script setup>
const error = useError();
function handleRedirect() {
  return navigateTo("/");
}
</script>
<style lang="scss" scoped></style>
