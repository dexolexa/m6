<script setup>
defineProps({
  game: Object,
});
</script>

<template>
  <div>
    <img :src="game.thumbnail" />
    <h2>{{ game.title }}</h2>
    <p>{{ game.short_description }}</p>
    <h3>{{ game.platform }}</h3>
    <p>release date: {{ game.release_date }}</p>
    <a :href="game.game_url"> Game link </a>
  </div>
</template>

<style scoped>
div {
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  background: #32383e;
  color: #aaa;
  transition: all 0.5s;
  text-align: center;
  display: flex !important;
  flex-direction: column;
}
img {
  border-radius: 5%;
  aspect-ratio: 16/9;
  object-fit: cover;
}
h2 {
  margin-top: 20px;
  font-size: 30px;
  font-weight: bold;
  color: lightblue;
}
h3 {
  margin: 10px 0;
  font-size: 15px;
  font-weight: bold;
  color: lightblue;
}
a{
  background: rgb(115, 115, 212);
  color: #32383e;
  font-size: 20px;
  border-radius: 16px;
  margin-top:auto;
  margin-bottom: 5px;
  position: bottom;
  width: fit-content;
  padding: 5px;
  align-self: center;
}
a:hover{
  background: rgb(175, 175, 238);
  color: #0d0e0f;
}
p {
  margin-top: 20px;
  font-size: 20px;
  line-height: 1.5;
  color: aliceblue;
}
</style>
