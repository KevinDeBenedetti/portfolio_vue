<script setup>
import SideLock from "@/components/SideLock.vue";
import Realisations from "@/components/Realisations.vue";
</script>

<template>
  <main class="lg:flex h-screen">
    <aside class="p-12 text-white lg:w-6/12 flex flex-col justify-between">
      <SideLock/>
    </aside>
    <section class="text-white overflow-auto">
      <Realisations/>
      <Skills/>
    </section>
  </main>
</template>
