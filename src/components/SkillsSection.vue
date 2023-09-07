<script setup>
import skillsData from '@/stores/skills.json';

const skills = skillsData;

console.log(skills);

</script>

<template>

  <section class="section mt-10 px-4">

    <h3 class="section-title">Compétences</h3>

    <article v-for="skill in skills" :key="skill.category">
      <h4>{{ skill.category }}</h4>

      <a v-for="technologie in skill.technologies" :key="technologie.title" :href="technologie.doc">
        <h5>{{ technologie.title }}</h5>
      </a>

    </article>
  </section>
</template>

<style scoped>

</style>