import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
    state() {
        return {
            counter: 0
        }
    },
    mutations: {
        increment(state) {
            state.counter = state.counter + 1;
        },
        // Создаем мутацию increase, принимает 2 параметра
        // Стейт - текущее состояние, payload - данные, переданные из компонента
        // payload может быть как и обьектом, там и простой переменной

        increase(state, payload) {
            state.counter = state.counter + payload;
        }
    }
});

const app = createApp(App);

app.use(store);

app.mount('#app');
