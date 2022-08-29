<template>
  <div>
    <base-container title="Vuex"></base-container>
    <!-- Можем обращаться к стейту ( как в роутах ) -->
    <h3>{{ $store.state.counter }}</h3>
    <button @click="addOne">Add 1</button>
    <button @click="addTen">Add 10</button>
  </div>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';

export default {
  components: {
    BaseContainer,
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