<template>
  <div>
    <base-container title="Vuex"></base-container>
    <!-- Можем обращаться к стейту ( как в роутах ) -->
    <h3>{{ $store.state.counter }}</h3>
    <button @click="addOne">Add 1</button>
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
      // Вызываем метод, который находиться в mutations
      // Для того чтобы изменить глобальное состояние
      this.$store.commit('increment');
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