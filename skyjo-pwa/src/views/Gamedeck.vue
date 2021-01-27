<template>
  <div class="home">
    <Gamedeck dpv="1"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Gamedeck from "@/components/skyjo-gamedeck.vue";

export default {
  name: "Game",
  components: {
    Gamedeck
  }
};
</script>
