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
            state.counter = state.counter + payload.value;
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
        }
    },
    // Actions - методы, которые позволяют выполнить асинхронный код
    actions: {
        // Даем название любое (можно как и название метода выше)
        // Принимаем контекст
        // Обьяснение контекста будет в следующем скрине
        increment(context) {
            setTimeout(function() {
                // Контекст нам позволяет вызвать метод с помощью commit
                context.commit('increment');
            }, 2000);
        },
        // Вариант 2
        // То же самое, только передаем те же параметры (дату)
        increase(context, payload) {
            context.commit('increase', payload);
        }
    }
});

const app = createApp(App);

app.use(store);

app.mount('#app');
