<template>
<!-- Рендер -->
    <button v-if="isAuth" @click="setAuth">Logout</button>
    <button v-else @click="setAuth">Login</button>
    <p>{{ isAuth }}</p>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    // Получаем по геттеру стейт
    computed: {
        ...mapGetters(['isAuth'])
    },
    methods: {
        // Получаем по екшинсу функцию
        ...mapActions(['setAuth'])
    }
}
</script>