<script setup>
import SideNav from "@/components/SideNav.vue";
</script>

<template>

  <SideNav documentationTitle="Documentation">
    <template v-slot:default>
      <div>
        Hello world
        <pre class="w-fit language-shell"><code>> npm create vue@latest
> cd my-project</code></pre>

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