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

function scrollToSection(target) {
  const element = document.querySelector(target);
  if(element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start'});
  }
}

</script>

<template>

  <div>
    <h1 class="text-4xl font-josefinSans">Kevin <br> De Benedetti</h1>
    <h2 class="text-xl mt-2 font-robotoMono font-bold text-grayLight">Développeur Web</h2>
    <p class="mt-6 font-robotoMono text-sm font-extralight leading-6 tracking-tight text-justify">Je crée des sites web à la fois performants et esthétiquement attrayants, tout en veillant à leur optimisation pour le référencement naturel (SEO).</p>
  </div>

  <nav class="hidden lg:block lg:my-4">
    <ul v-for="item in menuItems" :key="item.label" class="lg:flex">
      <li class="p-2 flex ml-6" @mouseover="handleMouseOver" @mouseleave="leaveMouseOver">
        <button class="flex items-center cursor-pointer" @click="scrollToSection(item.link)">
          <span class="font-robotoMono">{{ item.number }}</span>
          <div class="bar mx-[15px] h-[2px] w-[20px] bg-white transition-width duration-300 ease-in-out"></div>
          <span class="font-robotoMono text-lg uppercase">{{ item.label }}</span>
        </button>
      </li>
    </ul>
  </nav>

  <div class="my-10 flex items-center justify-center hover:scale-125 transition-transform duration-500">
    <RouterLink to="/contact">
      <button class="border-2 border-white h-20 w-60 rounded-full font-ubuntu text-3xl font-bold hover:bg-white hover:text-gray pointer">
        Me contacter
      </button>
    </RouterLink>
  </div>

  <div class="flex items-center mt-4 justify-center">

    <img class="mr-8" width="90" height="90" src="/images/photo_90x90.webp" alt="Photo of Kevin De Benedetti">

    <div class="flex flex-wrap">

      <a class="p-6 mr-6 flex items-center hover:scale-125 transition-transform duration-500" href="https://www.linkedin.com/in/kevindebenedetti" target="_blank">
        <font-awesome-icon class="text-lg" :icon="['fab', 'linkedin-in']" />
        <span class="ml-3 font-ubuntu text-lg">Linkedin</span>
        <font-awesome-icon class="ml-2 text-lg" :icon="['fas', 'arrow-up-right-from-square']" />
      </a>

      <a class="p-6 flex items-center hover:scale-125 transition-transform duration-500" href="https://github.com/KevinDeBenedetti" target="_blank">
        <font-awesome-icon class="text-lg" :icon="['fab', 'github']" />
        <span class="ml-3 font-ubuntu text-lg">GitHub</span>
        <font-awesome-icon class="ml-2 text-lg" :icon="['fas', 'arrow-up-right-from-square']" />
      </a>

    </div>

  </div>

</template>

<style scoped>
</style>