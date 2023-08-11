<script setup>
import SideNav from "@/components/SideNav.vue";
</script>

<template>

  <SideNav documentationTitle="Documentation">
    <template v-slot:default>
      <div>
        Hello world

        <nav>
          <RouterLink to="/documentation/vue">Vue</RouterLink>
          <RouterLink to="/documentation/symfony">Symfony</RouterLink>
        </nav>
      </div>
    </template>
  </SideNav>

</template>

<style scoped>

</style>