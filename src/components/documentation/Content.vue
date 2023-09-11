<script setup>
const props = defineProps({
  items: Array
})
</script>

<template>

  <div class="bg-white container xl:max-w-5xl py-20 px-5 m-auto overflow-auto">

    <section class="w-fit m-auto">
      <div v-for="item in items">
        <h3 class="mb-4">{{ item.title }}</h3>
        <p>{{ item.content }}</p>
        <pre class="w-fit"><code :class="'language-' + item.language" >{{ item.code }}</code></pre>
      </div>
    </section>

  </div>

</template>

<style scoped>

</style>