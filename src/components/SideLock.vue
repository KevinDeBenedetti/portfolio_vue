<script setup>
import { useStore } from "@/stores/store";

const menuStore = useStore();
const menuItems = menuStore.menuItems;

const handleMouseOver = (event) => {
  const bar = event.target.querySelector(".bar");
  bar.style.width = "80px";
}

const leaveMouseOver = (event) => {
  const bar = event.target.querySelector(".bar");
  bar.style.width = "20px";
}
</script>

<template>
  <div>
    <h1 class="text-4xl">Kevin <br> De Benedetti</h1>
    <h2 class="text-2xl mt-4">Développeur Web</h2>
    <p class="mt-8 text-justify">Je crée des sites web à la fois performants et esthétiquement attrayants, tout en veillant à leur optimisation pour le référencement naturel (SEO). Passionné par le développement web, j'ai choisi de me réinventer après plusieurs années dans le commerce. En me formant intensivement, j'ai acquis les compétences essentielles en développement front-end, back-end et en design.</p>
  </div>

  <nav class="my-4">
    <ul v-for="item in menuItems" :key="item.label" class="hidden lg:flex">
      <li class="p-2 flex" @mouseover="handleMouseOver" @mouseleave="leaveMouseOver">
        <RouterLink class="flex items-center" :to="item.link">
          <span>{{ item.number }}</span>
          <div class="bar mx-[15px] h-[2px] w-[20px] bg-white transition-width duration-300 ease-in-out"></div>
          <h3>{{ item.label }}</h3>
        </RouterLink>
      </li>
    </ul>
  </nav>
  <div class="flex items-center">

    <img class="mr-6" src="/images/PhotoCVdetoureeNB.webp" alt="Photo of Kevin De Benedetti">

    <a class="mr-6 flex" href="https://www.linkedin.com/in/kevindebenedetti" target="_blank">
      <font-awesome-icon class="text-xl" :icon="['fab', 'linkedin']" />
      <span class="mx-3">Linkedin</span>
      <font-awesome-icon class="text-xs" :icon="['fas', 'arrow-up-right-from-square']" />
    </a>

    <a class="mr-6 flex" href="https://github.com/KevinDeBenedetti" target="_blank">
      <font-awesome-icon class="text-xl" :icon="['fab', 'github']" />
      <span class="mx-3">GitHub</span>
      <font-awesome-icon class="text-xs" :icon="['fas', 'arrow-up-right-from-square']" />
    </a>

  </div>
</template>

<style scoped>
/*  .bar {
    transition: width 0.3s ease-in-out;
  }*/
</style>