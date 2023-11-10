<script setup>
import realisationsData from '@/stores/realisations.json';
const data = realisationsData;
</script>

<template>

  <section class="py-20 px-4" id="realisations">

    <h3 class="hidden">Réalisations</h3>

    <article
        v-for="item in data" :key="item.title"
        class="z-10 border-solid border-grayLight border-2 rounded-2xl bg-article hover:bg-white hover:bg-opacity-20 py-2 px-4 my-4 sm:p-6 md:p-10 lg:p-8">
<!--Tags-->
      <div class="flex flex-wrap">
        <div
            v-for="tag in item.tags" :key="tag.label"
            class="m-1 px-2 py-1 border rounded border-gray-500"
            :class="' bg-' + tag.color + '/30' "
        >
          <span class="text-sm text-gray-300 uppercase">{{ tag.label }}</span>
        </div>
      </div>
<!--Title-->
      <h4 class="text-2xl mt-4 font-robotoMono text-grayLight font-bold">{{ item.title }}</h4>
<!--Content-->
      <p class="text-base lg:text-justify mt-4 font-robotoMono">{{ item.content }}</p>
<!--Links-->
      <div class="mt-4 flex">
        <a class="p-1 mr-2 text-grayLight hover:text-white hover:scale-110 transition-transform duration-300" v-for="link in item.links" :key="link.label" :href="link.url" target="_blank">
          <font-awesome-icon class="mr-2" :icon="link.icon" />
          <span class="text-sm font-ubuntu ">{{ link.label }}</span>
        </a>
      </div>
    </article>

<!--    <div>
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
    </div>-->

  </section>

</template>

<style scoped>
</style>