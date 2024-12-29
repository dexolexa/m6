import { createRouter, createWebHistory } from "vue-router";
import Main from "../views/Main.vue";
import BR from "../views/BattleRoyale.vue";
import Fantasy from "../views/Fantasy.vue";
import Shooter from "../views/Shooter.vue";
import RPG from "../views/RPG.vue";
import Horror from "../views/Horror.vue";

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
  ],
});

export default router;
