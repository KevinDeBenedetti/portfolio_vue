<script setup>
import { onBeforeMount, onMounted, ref } from "vue";

const isHeaderVisible = ref(false);
const currentTitle = ref("");

const handleScroll = () => {
  const scrollPosition = window.scrollY || window.pageYOffset;
  const threshold = 100;
  isHeaderVisible.value = scrollPosition >= threshold;
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
})

onBeforeMount(() => {
  window.addEventListener("scroll", handleScroll);
})

const updateCurrentTitle = (title) => {
  currentTitle.value = title;
}
</script>

<template>
  <div class="sticky top-0 bg-red-500 h-20" :class="{ 'sticky-header': isHeaderVisible }">
    {{ currentTitle }}
    <p>TEST</p>
  </div>
</template>

<style scoped>

</style>