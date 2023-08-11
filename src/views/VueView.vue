<script setup>
  import SideNav from "@/components/SideNav.vue";
  import vueData from "@/stores/vue.json";

  import { onBeforeRouteUpdate } from "vue-router";
  import { ref } from "vue";

  const currentSubCategory = ref(null);

  onBeforeRouteUpdate(async (to, from, next) => {
    try {
      const newSlug = to.params.slug;
      if(newSlug) {
        const data = vueData.find(entry => entry.subCategory === newSlug);
        currentSubCategory.value = data;
      } else {
        currentSubCategory.value = null
      }
      next();
    } catch(error) {
      console.log(error)
    }

  })

</script>

<template>

  <SideNav v-if="currentSubCategory !== null" :documentationTitle="currentSubCategory.subCategoryTitle">
    <template v-slot:default>

      <div class="container xl:max-w-5xl py-20 px-5 m-auto">

        <div v-for="item in currentSubCategory.items">
          <h3 class="mb-4">{{ item.title }}</h3>
          <p>{{ item.content }}</p>
          <pre class="w-fit"><code :class="'language-' + item.language" >{{ item.code }}</code></pre>
        </div>

        <div>
          <h2>Bienvenue dans ma documentation sur vue</h2>
        </div>

      </div>

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