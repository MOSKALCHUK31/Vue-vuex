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
        ...mapGetters(['normalizedCounter'])
    }
}
</script>