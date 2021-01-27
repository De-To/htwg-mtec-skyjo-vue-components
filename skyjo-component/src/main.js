import Vue from "vue";
import Scoreboard from "./skyjo-scoreboard.vue";
import Gamedeck from "./skyjo-gamedeck.vue";

Vue.config.productionTip = false;

new Vue({
  render: h => h(Scoreboard)
}).$mount("#skyjo-scoreboard");

new Vue({
  render: h => h(Gamedeck)
}).$mount("#skyjo-gamedeck");