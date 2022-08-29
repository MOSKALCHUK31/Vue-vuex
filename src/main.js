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
        increase(state, payload) {
            state.counter = state.counter + payload;
        }
    },
    // Геттеры, это как computed props в локальном компоненте. Только ГЛОБАЛЬНО.
    // Значение кода, которые повторяються в компоненте 
    // выносяться глобально - в геттеры
    getters: {
        // Принимаем стейт (Как и любая функция в Vuex)
        finalCounter(state) {
            return state.counter * 2;
        },
        // Еще один геттер, который использует предыдущий
        // Первый параметр - state. Его принимаем как "_", что значит, что мы не собираемся его использовать
        // Вторым параметром передаються геттеры
        // Мы можем использовать один геттер внутри другого - логика проста
        normalizedCounter(_, getters) {
            const finalCounter = getters.finalCounter
            if (finalCounter > 100) {
                return 100;
            } else if (finalCounter < 0) {
                return 0;
            }

            return finalCounter;
        }
    }
});

const app = createApp(App);

app.use(store);

app.mount('#app');
