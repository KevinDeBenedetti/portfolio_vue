<script setup>
import challengesData from '@/stores/challenges.json';
const data = challengesData;
</script>

<template>

  <section class="py-20 px-4 gap-4 grid grid-cols-1 sm:grid-cols-2" id="challenges">

    <article
        v-for="item in data" :key="item.title"
        class="flex-col border-solid border-grayLight border-2 rounded-xl bg-article"
    >

      <!--Tags-->
      <div class="flex flex-wrap m-1">
        <div
            v-for="tag in item.tags" :key="tag.label"
            class="m-1 px-1 py-0 border rounded border-gray-500"
            :class="' bg-' + tag.color + '/30' "
        >
          <span class="text-xs text-gray-300 uppercase">{{ tag.label }}</span>
        </div>
      </div>

      <!--Title-->
      <h4 class="text-sm font-robotoMono text-white font-bold text-center">{{ item.challenge }}</h4>

      <img
          :src="item.preview"
          alt="">

      <!--Links-->
      <div class="flex justify-center">
        <a class="p-1 mr-2 text-grayLight hover:text-white hover:scale-110 transition-transform duration-300" v-for="link in item.links" :key="link.label" :href="link.url" target="_blank">
          <font-awesome-icon class="mr-2" :icon="link.icon" />
          <span class="text-sm font-ubuntu ">{{ link.label }}</span>
        </a>
      </div>

    </article>

  </section>

</template>

<style scoped>

</style>