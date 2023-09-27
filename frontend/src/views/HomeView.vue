<script setup>
import SideLock from "@/components/SideLock.vue";
import Realisations from "@/components/RealisationsSection.vue";
import Skills from "@/components/SkillsSection.vue";
import Challenges from "@/components/ChallengesSection.vue";

</script>

<template>

  <main class="lg:flex h-screen lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl m-auto">

    <aside class="p-12 text-white lg:w-4/12 flex flex-col justify-around">

      <SideLock/>

    </aside>

    <div class="text-white overflow-auto lg:w-8/12">

      <Realisations />

      <Skills />

      <Challenges />

    </div>

  </main>

</template>

<style scoped>

</style>