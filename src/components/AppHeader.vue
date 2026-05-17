<template>
  <header class="header-container">
    <div class="header-top">
      <div class="titles">
        <h1>Моє Портфоліо</h1>
        <p>Вітаю на моїй особистій сторінці.</p>
      </div>
      
      <button class="burger" @click="menuOpen = !menuOpen">
        {{ menuOpen ? '✖' : '☰' }}
      </button>
    </div>

    <button @click="$emit('toggle-theme')" class="btn theme-btn">Змінити тему</button>

    <nav :class="['nav-menu', { open: menuOpen }]" aria-label="Навігація">
      <ul>
        <li><RouterLink to="/" @click="menuOpen = false">Головна</RouterLink></li>
        <li><RouterLink to="/contacts" @click="menuOpen = false">Контакти</RouterLink></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'; 
import { RouterLink } from 'vue-router';

defineEmits(['toggle-theme']);

const menuOpen = ref(false); 
</script>

<style scoped>
.header-container {
  margin-bottom: 20px;
}

.header-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.burger {
  display: none; 
  background: none;
  border: none;
  font-size: 32px;
  cursor: pointer;
  color: var(--text-color);
}

.nav-menu ul {
  display: flex;
  justify-content: center;
  gap: 20px;
  list-style: none;
  padding: 15px;
  background-color: var(--card-bg);
  border-radius: 8px;
  margin-bottom: 30px;
  transition: background-color 0.3s;
}

.nav-menu a.router-link-active {
  border-bottom: 2px solid var(--primary);
  padding-bottom: 2px;
}

@media (max-width: 768px) {
  .burger {
    display: block; 
  }

  .nav-menu ul {
    display: none; 
    flex-direction: column; 
    align-items: center;
    padding: 10px;
  }

  .nav-menu.open ul {
    display: flex; 
  }

  .theme-btn {
    width: 100%; 
  }
  @media (max-width: 480px) {
  .header-top {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }
  
  .burger {
    align-self: flex-end;
    margin-top: -45px; 
   }
  }
}
</style>