<template>
  <article class="card">
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <a :href="link" target="_blank" class="btn">Переглянути</a>
  </article>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  link: String
});
</script>

<style scoped>
.card {
    background-color: var(--card-bg);
    padding: 20px;
    border: 2px solid var(--primary);
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}
</style>