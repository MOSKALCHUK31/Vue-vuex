<template>
  <div>
    <base-container v-if="isAuth" title="Vuex">
      <the-counter></the-counter>
      <favorite-value></favorite-value>

      <button @click="increment">Add 1</button>
      <button @click="increase({value: 10})">Add 10</button>
    </base-container>
    <base-container title="Auth">
      <user-auth></user-auth>
    </base-container>
  </div>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';
import UserAuth from './components/UserAuth.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  components: {
    BaseContainer,
    TheCounter,
    FavoriteValue,
    UserAuth
  },
  computed: {
    ...mapGetters(['isAuth'])
  },
  methods: {
    ...mapActions('counter', ['increment', 'increase'])
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