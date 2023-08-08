<script setup>
import { defineProps } from "vue";

const props = defineProps({
  documentationTitle: String
});
</script>

<template>

  <header class="bg-green-100 h-20 w-full flex items-center justify-center py-2">
    <h1 class="text-center text-2xl text-primary">{{ documentationTitle }}</h1>
  </header>

</template>

<style scoped>

</style>