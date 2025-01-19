<script setup>
import { GamesCategory } from "@/api";
import Card from "@/components/Card.vue";
import { onBeforeMount, ref } from "vue";

let games = ref([]);
onBeforeMount(async () => {
  games.value = await GamesCategory("sci-fi");
});
console.log(games);
</script>
<template>
  <section>
    <h1>sci-fi</h1>
    <div class="main">
      <Card v-for="(item, index) in games" :key="index" :game="item" />
    </div>
  </section>
</template>

<style scoped>
h1 {
  font-size: 40px;
  text-align: center;
  margin: 20px 0;
  color: wheat;
}
.main {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 50px;
}
</style>
