<template>
  <div class="row head-table">
    <div id="trade" v-for="d in dpv" class="col deckAndPile" :key="d">{{ d }}</div>
    <div id="draw" class="col deckAndPile">#</div>
  </div>
</template>

<script>
export default {
  name: "skyjo-gamedeck",
  data: () => ({
    dpv: []
  })
};
</script>

<style lang="scss">
.head-table {
  border: 2px solid black;
  vertical-align: middle;
  text-align: center;
  display: flex;
  margin-top: 15px;
  max-width: 150px;
  max-height: 29px;
}
.deckAndPile:hover {
  background-color: black;
  color: white;
  cursor: pointer;
}
</style>
