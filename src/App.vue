<template>
  <div>
    <base-container title="Vuex"></base-container>
    <the-counter></the-counter>
    <favorite-value></favorite-value>

    <button @click="increment">Add 1</button>
    <button @click="increase({value: 10})">Add 10</button>
  </div>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';
import { mapActions } from 'vuex';

export default {
  components: {
    BaseContainer,
    TheCounter,
    FavoriteValue
  },
  methods: {
    // Та же самая история и с mapActions
    // Мы можем использовать функции из store и передавать туда параметры
    // В данном случае передает параметры в верстке, а тут лишь определяем и импортируем их
    ...mapActions(['increment', 'increase'])
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