<script setup>
import { useStore } from "@/stores/store";

const menuStore = useStore();
const menuItems = menuStore.menuItems;

</script>

<template>
  <div>
    <h1 class="text-4xl">Kevin <br> De Benedetti</h1>
    <h2 class="text-2xl mt-4">Développeur Web</h2>
    <p class="mt-8 text-justify">Je crée des sites web à la fois performants et esthétiquement attrayants, tout en veillant à leur optimisation pour le référencement naturel (SEO). Passionné par le développement web, j'ai choisi de me réinventer après plusieurs années dans le commerce. En me formant intensivement, j'ai acquis les compétences essentielles en développement front-end, back-end et en design.</p>
  </div>
  <nav class="my-4">
    <ul v-for="item in menuItems" :key="item.label" class="hidden lg:flex">
      <li class="p-2 flex">
        <span>{{ item.number }}</span>
        <div>-</div>
        <span>{{ item.label }}</span>
      </li>
    </ul>
  </nav>
  <div class="flex">
    <img src="#" alt="Picture Kevin De Benedetti">
    <a href="https://www.linkedin.com/in/kevindebenedetti" target="_blank">
      <font-awesome-icon :icon="['fab', 'linkedin']" />
      <span>Linkedin</span>
    </a>
    <a href="https://github.com/KevinDeBenedetti" target="_blank">
      <font-awesome-icon :icon="['fab', 'github']" />
      <span>GitHub</span>
    </a>
  </div>
</template>

<style scoped>

</style>