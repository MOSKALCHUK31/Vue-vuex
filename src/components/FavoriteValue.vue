<template>
    <div>
        <h3>{{ counter }}</h3>
        <p>Do more ...</p>
    </div>
</template>

<script>
export default {
    computed: {
        counter() {
            // Вызов функции геттера
            return this.$store.getters.normalizedCounter;
        }
    }
}
</script>