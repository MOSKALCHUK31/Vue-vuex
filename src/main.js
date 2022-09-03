import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

// Создаем обьект (модуль каунтера)
const counterModule = {
    state () {
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
        },
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
        getAuth(_, _2, rootState, rootGetters) {
            console.log('RootState ' + rootState.isAuth);

            return rootGetters.isAuth;
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
    }
};

const store = createStore({
    // Тут его подключаем
    modules: {
        counter: counterModule
    },
    state() {
        return {
            isAuth: false
        }
    },
    mutations: {
        setAuth(state) {
            state.isAuth = !state.isAuth;
        }
    },
    getters: {
        isAuth(state) {
            return state.isAuth;
        }
    },
    actions: {
        setAuth(context) {
            context.commit('setAuth')
        }
    }
});

const app = createApp(App);

app.use(store);

app.mount('#app');
