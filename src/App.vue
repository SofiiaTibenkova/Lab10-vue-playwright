<template>
  <div :class="{ 'dark-theme': isDarkTheme }" class="app-container">
    
    <AppHeader @toggle-theme="toggleTheme" />
    
    <main>
      <RouterView /> 
    </main>

    <AppFooter />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { RouterView } from 'vue-router';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

const isDarkTheme = ref(false);

const toggleTheme = () => {
  isDarkTheme.value = !isDarkTheme.value;
};
</script>

<style>
:root {
    --bg-color: #f6c0d2;
    --text-color: #4a3b40;
    --primary: #fe3773;
    --primary-hover: #e898b6;
    --card-bg: #ffffff;
    --line: #ffb3c6;
}

.dark-theme {
    --bg-color: #2b2b2b;
    --text-color: #f5f5f5;
    --card-bg: #3a3a3a;
    --line: #555;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

body {
  font-family: 'Segoe UI', Tahoma, sans-serif;
  background-color: var(--bg-color);
  color: var(--text-color);
  padding: clamp(16px, 3vw, 48px); 
  line-height: 1.6;
  transition: background-color 0.3s, color 0.3s;
}

.app-container {
  min-height: 100vh;
  background-color: var(--bg-color);
  color: var(--text-color);
  transition: background-color 0.3s, color 0.3s;

  max-width: 1200px; 
  margin: 0 auto;
}

h1, h2, h3 {
  color: inherit;
  margin-bottom: 15px;
  font-size: clamp(1.5rem, 4vw, 2.5rem); 
}

a {
    color: var(--primary);
    text-decoration: none;
    font-weight: 500;
}

a:hover {
    text-decoration: underline;
}

.btn {
    display: block;
    margin: 10px 0 20px;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid var(--line);
    font-family: inherit;
    background-color: var(--primary);
    color: white;
    cursor: pointer;
    width: 200px;
}

.btn:hover {
    background-color: var(--primary-hover);
}
</style>