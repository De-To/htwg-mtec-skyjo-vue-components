import Vue from "vue";
import VueRouter from "vue-router";
import Game from "../views/Gamedeck.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Game",
    component: Game
  },
  {
    path: "/scoreboard",
    name: "Score",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Scoreboard.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
