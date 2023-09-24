<script setup>
import SideLock from "@/components/SideLock.vue";
import Realisations from "@/components/RealisationsSection.vue";
import Skills from "@/components/SkillsSection.vue";

</script>

<template>

  <main class="lg:flex h-screen">

    <aside class="p-12 text-white lg:w-4/12 flex flex-col justify-around">

      <SideLock/>

    </aside>

    <div class="text-white overflow-auto lg:w-8/12">

      <Realisations />

      <Skills />

    </div>

  </main>

</template>

<style scoped>

</style>