import { createRouter, createWebHistory } from "vue-router";
import Main from "../views/Main.vue";
import BR from "../views/BattleRoyale.vue";
import Fantasy from "../views/Fantasy.vue";
import Shooter from "../views/Shooter.vue";
import RPG from "../views/RPG.vue";
import Horror from "../views/Horror.vue";
import Racing from "../views/Racing.vue";
import Strategy from "../views/Strategy.vue";
import TopDown from "../views/TopDown.vue";
import SciFi from "../views/Sci-fi.vue";
import Card from "../views/Card.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "main",
      component: Main,
    },
    {
      path: "/br",
      name: "br",
      component: BR,
    },
    {
      path: "/fantasy",
      name: "fantasy",
      component: Fantasy,
    },
    {
      path: "/shooter",
      name: "shooter",
      component: Shooter,
    },
    {
      path: "/horror",
      name: "horror",
      component: Horror,
    },
    {
      path: "/rpg",
      name: "rpg",
      component: RPG,
    },
    {
      path: "/card",
      name: "card",
      component: Card,
    },
    {
      path: "/scientificfiction",
      name: "scifi",
      component: SciFi,
    },
    {
      path: "/topdown",
      name: "topdown",
      component: TopDown,
    },
    {
      path: "/racing",
      name: "racing",
      component: Racing,
    },
    {
      path: "/strategy",
      name: "strategy",
      component: Strategy,
    },
  ],
});

export default router;
