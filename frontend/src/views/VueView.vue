<script setup>
  import vueData from "@/stores/documentation/vue.json";
  import {useRoute} from "vue-router";
  import {onBeforeMount, onMounted, ref, watchEffect} from "vue";
  import SideNav from "@/components/documentation/SideNav.vue";
  import Prism from 'prismjs';
  import 'prismjs/themes/prism-okaidia.css';
  import {initTE, Sidenav} from "tw-elements";
  import Content from "@/components/documentation/Content.vue";

  const currentSubCategory = ref(null);
  const route = useRoute();

  const initializeLibAndData = (slug) => {
    Prism.highlightAll();

    initTE({ SideNav });

    const data = vueData.find(entry => entry.subCategory === slug);
    currentSubCategory.value = data;
  }

  onMounted(() => {
    initializeLibAndData(route.params.slug);
  });

  watchEffect(() => {
    const newSlug = route.params.slug;
    if(newSlug) {
      initializeLibAndData(newSlug);
    } else {
      currentSubCategory.value = null;
    }
  })

  onBeforeMount(() => {
    initTE({ Sidenav });
  })

</script>

<template>

  <SideNav v-if="currentSubCategory !== null" :documentationTitle="'Vue JS - ' +currentSubCategory.subCategoryTitle">

    <template v-slot:default>

      <Content :items="currentSubCategory.items"/>

    </template>

  </SideNav>

  <SideNav v-else documentationTitle="Bienvenue dans ma documentation de Vue V3">
    <template v-slot:default>

      <div class="container xl:max-w-5xl py-20 px-5 m-auto">

        <div>
          <h2>Bienvenue dans ma documentation sur vue</h2>
        </div>

      </div>

    </template>
  </SideNav>

</template>

<style scoped>
</style>