<script setup>
import realisationsData from '@/stores/realisations.json';
const data = realisationsData;
</script>

<template>

  <section class="mt-10 px-4">

    <h3 class="section-title">Réalisations</h3>
<!-- p-8 my-6 -->
    <article
        v-for="item in data" :key="item.title"
        class="transform transition-transform hover:scale-105 bg-article py-2 px-4 my-4 sm:p-6 md:p-10 lg:p-12 xl:p-16 2xl:p-18">
<!--Tags-->
      <div class="flex flex-wrap">
        <div
            v-for="tag in item.tags" :key="tag.label"
            class="m-1 px-2 py-1 border rounded border-gray-500"
            :class="' bg-' + tag.color + '/30' "
        >
          <span class="text-xs text-gray-300 uppercase">{{ tag.label }}</span>
        </div>
      </div>
<!--Title-->
      <h4 class="text-3xl mt-4">{{ item.title }}</h4>
<!--Content-->
      <p class="text-base text-justify mt-6">{{ item.content }}</p>
<!--Links-->
      <div class="mt-4 flex">
        <div v-for="link in item.links" :key="link.label" class="p-1 mr-2">
          <a class="text-sm" href="">{{ link.label }}</a>
        </div>
      </div>
    </article>

    <div>
      <h4>Couleurs</h4>
      <ul class="flex flex-wrap my-3">
        <li class="mx-1 p-2 w-fit border rounded border-gray-500 text-white bg-bootstrap/30">Bootstrap</li>
        <li class="mx-1 p-2 w-fit border rounded border-tailwind text-tailwind bg-tailwind/30">Tailwind</li>
        <li class="mx-1 p-2 w-fit border rounded border-vue text-vue bg-vue/30">Vue</li>
        <li class="mx-1 p-2 w-fit border rounded border-express text-express bg-express/30">Express</li>
        <li class="mx-1 p-2 w-fit border rounded border-firebase text-firebase bg-firebase/30">Firebase</li>
        <li class="mx-1 p-2 w-fit border rounded border-nosql text-nosql bg-nosql/30">NoSQL</li>
        <li class="mx-1 p-2 w-fit border rounded border-figma text-figma bg-figma/30">Figma</li>
        <li class="mx-1 p-2 w-fit border rounded border-figma text-javascript bg-javascript/30">Javascript</li>
        <li class="mx-1 p-2 w-fit border rounded border-figma text-html bg-html/30">HTML</li>
        <li class="mx-1 p-2 w-fit border rounded border-figma text-css bg-css/30">CSS</li>
      </ul>
    </div>
  </section>

</template>

<style scoped>
</style>