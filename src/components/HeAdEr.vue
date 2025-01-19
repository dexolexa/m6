<template>
  <header>
    <router-link to="/">Main</router-link>
    <router-link to="/fantasy">Fantasy</router-link>
    <router-link to="/rpg">RPG</router-link>
    <router-link to="/shooter">Shooter</router-link>
    <router-link to="/horror">Horror</router-link>
    <router-link to="/br">Battle Royale</router-link>
    <router-link to="/card">Card Games</router-link>
    <router-link to="/racing">Racing</router-link>
    <router-link to="/scientificfiction">Sci-fi</router-link>
    <router-link to="/strategy">Strategy</router-link>
    <router-link to="/topdown">Top Down</router-link>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-evenly;
  background-color: #333;
  color: rgb(202, 202, 202);
  padding: 20px;
  font-size: 24px;
  text-align: center;
}
.router-link-active {
  color: #fff;
}
</style>
