import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
    state() {
        return {
            counter: 0,
            isAuth: false
        }
    },
    mutations: {
        increment(state) {
            state.counter = state.counter + 1;
        },
        increase(state, payload) {
            state.counter = state.counter + payload.value;
        },
        // Функция, изменяющяя стйт
        setAuth(state) {
            state.isAuth = !state.isAuth;
        }
    },
    getters: {
        finalCounter(state) {
            return state.counter * 2;
        },
        normalizedCounter(_, getters) {
            const finalCounter = getters.finalCounter;
            if (finalCounter > 100) {
                return 100;
            } else if (finalCounter < 0) {
                return 0;
            }

            return finalCounter;
        },
        // Геттер, который мы получаем в компоненте
        isAuth(state) {
            return state.isAuth;
        }
    },
    actions: {
        increment(context) {
            setTimeout(function() {
                context.commit('increment');
            }, 2000);
        },

        increase(context, payload) {
            context.commit('increase', payload);
        },
        // Функция (в реальности асинхронная) для смены состояние
        setAuth(context) {
            context.commit('setAuth')
        }
    }
});

const app = createApp(App);

app.use(store);

app.mount('#app');
