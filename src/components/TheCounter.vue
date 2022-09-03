<template>
    <div>
        <h3>{{ finalCounter }}</h3>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    
    computed: {
        // Другой способ выведение каунтера
        ...mapGetters({
            finalCounter: 'finalCounter'
        })
    }
}
</script>