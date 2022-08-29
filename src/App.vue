<template>
  <div>
    <base-container title="Vuex"></base-container>
    <the-counter></the-counter>
    
    <button @click="addOne">Add 1</button>
    <button @click="addTen">Add 10</button>
  </div>
  <the-counter></the-counter>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';

export default {
  components: {
    BaseContainer,
    TheCounter
  },
  methods: {
    addOne() {
      this.$store.commit('increment');
    },
    addTen() {
      this.$store.commit('increase', 10);
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>