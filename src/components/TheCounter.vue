<template>
    <div>
        <h3>{{ finalCounter }}</h3>
    </div>

    <div>
        <!-- Выводим getAuth из rootState -->
        <p>RootState = {{ getAuth }}</p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    
    computed: {
        // Выводим getAuth из rootGetters
        ...mapGetters('counter', {
            finalCounter: 'finalCounter',
            getAuth: 'getAuth'
        })
    }
}
</script>