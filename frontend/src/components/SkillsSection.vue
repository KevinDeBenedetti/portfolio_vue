<script setup>
import skillsData from '@/stores/skills.json';

const skills = skillsData;

</script>

<template>

  <section class="mt-10 px-4" id="skills">

    <h3 class="hidden">Compétences</h3>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">

<!-- FRONTEND article -->
      <article v-for="skill in skills" :key="skill.category" class="mt-10">

<!--        <div v-if="skill.category === 'frontend'" class="flex flex-col justify-end items-center">-->
        <div class="flex justify-center items-center">
          <p class="uppercase text-3xl" v-for="(letter, index) in skill.category" :key="index">
            {{ letter }}
          </p>
        </div>
<!--        <div v-if="skill.category === 'frontend'" class="grid grid-cols-3">-->
        <div class="mt-6 flex flex-wrap justify-center gap-3">
          <a class="text-grayLight flex justify-center items-center flex-col" v-for="technologie in skill.technologies" :key="technologie.title" :href="technologie.doc">

            <div class="border-2 h-[80px] w-[80px] rounded-xl flex flex-col items-center justify-center">
              <font-awesome-icon v-if="technologie.icon" class="text-white text-3xl" :icon="technologie.icon" />
              <img v-else-if="technologie.whiteLogo" :src="technologie.whiteLogo" :alt="'Logo' + technologie.title">
              <p v-else>NO LOGO</p>
              <h5 class="text-xs mt-2">{{ technologie.title }}</h5>
            </div>

          </a>

        </div>

      </article>

    </div>

  </section>
</template>

<style scoped>
</style>