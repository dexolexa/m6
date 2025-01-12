<script setup>
defineProps({
  game: Object,
});
</script>

<template>
  <div>
    <img
      src="https://img.freepik.com/free-photo/person-standing-surrounded-by-snowy-mountain_406225-9.jpg?t=st=1736693724~exp=1736697324~hmac=219473f9bb8a0e5623c56ec11d1fd1d592c47804813feb0a4b25016a9fcbb25e&w=1380"
    />
    <h2> {{ game.title }}</h2>
    <p>
      {{ game.short_description }}
    </p>
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
  aspect-ratio: 16/9;
  object-fit: cover;
}
h2 {
  color: lightblue;
}
p {
  color: aliceblue;
}
</style>
