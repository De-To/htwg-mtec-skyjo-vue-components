<template>
  <div class="home">
    <Scoreboard scoreboardPlayers="hallo"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Scoreboard from "@/components/skyjo-scoreboard.vue";

export default {
  name: "Score",
  components: {
    Scoreboard
  }
};
</script>
