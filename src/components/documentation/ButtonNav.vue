<script setup>
const props = defineProps({
  item: Object
})

</script>

<template>
  <div class="flex items-center justify-between h-12 py-4 px-6 cursor-pointer truncate rounded-[5px] text-gray-300 transition duration-300 ease-linear hover:bg-slate-400 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit ark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10">
    <RouterLink :to="item.link">
      <span>{{ item.label }}</span>
    </RouterLink>
  </div>
</template>

<style scoped>

</style>