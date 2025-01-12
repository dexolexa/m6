<script setup>
import { RouterLink, RouterView } from "vue-router";

import HeAdEr from "./components/HeAdEr.vue";
</script>

<template>
  <main>
    <HeAdEr />
    <RouterView />
  </main>
</template>

<style scoped>
main {
  background: #272b30;
  min-height: 100vh;
}
</style>
