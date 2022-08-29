<template>
  <div>
    <base-container title="Vuex"></base-container>
    <the-counter></the-counter>
    <favorite-value></favorite-value>

    <button @click="addOne">Add 1</button>
    <button @click="addTen">Add 10</button>
  </div>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    FavoriteValue
  },
  methods: {
    addOne() {
      // Здесь уже идет отличие от commit
      // Коммит - выполнить сразу
      // Диспатч - дождаться выполнения
      // В данном случае мы ссылаемся на increment в actions
      this.$store.dispatch('increment');
      
    },
    // Вариант 2
    addTen() {
      this.$store.dispatch({
        type: 'increase',
        value: 10
      })
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