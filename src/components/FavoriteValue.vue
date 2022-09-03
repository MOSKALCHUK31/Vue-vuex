<template>
    <div>
        <h3>{{ normalizedCounter }}</h3>
        <p>Do more ...</p>
    </div>
</template>

<script>

import { mapGetters } from 'vuex';
export default {
    computed: {
        // Теперь мы обращаемся к нашему модулю через counter
        ...mapGetters('counter', ['normalizedCounter'])
    }
}
</script>