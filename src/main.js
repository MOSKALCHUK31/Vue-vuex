import { createApp } from 'vue';
//Импортируем Vuex
import { createStore } from 'vuex';

import App from './App.vue';

// Создаем хранилище с помощью функции
// Запись как в роутере
const store = createStore({
    state() {
        return {
            counter: 0
        }
    },
    // Методы, которые управляют состояние - мутации
    mutations: {
        // Метод принимает текущее состояние, поэтому мы можем им манипулировать
        increment(state) {
            state.counter = state.counter + 1;
        }
    }
});

const app = createApp(App);

// Используем в апп (как в роутере)
app.use(store);

app.mount('#app');
