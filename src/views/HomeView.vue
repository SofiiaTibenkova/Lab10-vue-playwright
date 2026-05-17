<template>
  <div class="home">
    <section id="about">
      <h2>Про мене</h2>
      <p>Я студентка 2 курсу і це моя практична робота з побудови сайту на Vue.</p>
      <img src="/avatar.jpg" alt="Моє фото" width="200" height="200">
    </section>

    <section id="projects">
      <h2>Мої проєкти</h2>
      
      <input 
        type="text" 
        v-model="searchQuery" 
        placeholder="Пошук проєктів за назвою..."
        class="search-input"
      >
      
      <div class="projects-grid">
        <ProjectCard 
          v-for="project in filteredProjects" 
          :key="project.id"
          :title="project.title"
          :description="project.description"
          :link="project.link"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import ProjectCard from '../components/ProjectCard.vue';

const searchQuery = ref('');

const baseUrl = import.meta.env.BASE_URL;

const projects = ref([
  { id: 1, title: 'Квітковий магазин', description: 'Веб-проєкт магазину квітів', link: baseUrl + 'Flowershop.html' },
  { id: 2, title: 'Космічні запуски', description: 'Відстеження місій', link: baseUrl + 'space.html' },
]);

const filteredProjects = computed(() => {
  return projects.value.filter(p => 
    p.title.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});
</script>

<style scoped>
.search-input {
    display: block;
    margin: 10px 0 20px;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid var(--line);
    font-family: inherit;
    width: 100%;
    max-width: 400px;
}

#about img {
  width: 100%; 
  max-width: 200px; 
  height: 200px; 
  object-fit: cover; 
  border-radius: 10px;
  margin-top: 15px;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); 
  gap: 20px;
  margin-bottom: 30px;
}

</style>