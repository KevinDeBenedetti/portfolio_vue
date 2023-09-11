<script setup>
import { useStore } from "@/stores/store";
import ButtonNav from "@/components/documentation/ButtonNav.vue";

const props = defineProps({
  documentationTitle: String
});

const menuStore = useStore();
const menuItems = menuStore.menuItemsDocumentation;

</script>

<template>
  <div class="flex">
    <nav class="h-screen max-w-sm">
      <ul v-for="item in menuItems" :key="item.label" class="list-none p-0 m-0">
        <li v-if="item.subMenus && item.subMenus.length > 0">
            <ButtonNav :item="item"/>
          <!-- ... autres éléments ... -->
          <ul v-for="subMenu in item.subMenus" :key="subMenu.label" class="p-0 m-0">
            <li>
                <ButtonNav :item="subMenu"/>
              <!-- ... autres éléments ... -->
            </li>
          </ul>
        </li>
        <li v-else>
            <ButtonNav :item="item"/>
          <!-- ... autres éléments ... -->
        </li>
      </ul>
    </nav>

    <div id="content" class="w-full h-screen flex flex-col">
      <header class="h-40 flex items-center justify-center py-2 sticky">
        <h1 class="text-2xl text-primary">{{ documentationTitle }}</h1>
      </header>
      <slot></slot>
    </div>
  </div>
</template>


<!--<template>

<div class="flex">

  <nav class="h-screen max-w-sm">
    <ul v-for="item in menuItems" :key="item.label" class="list-none p-0 m-0">
      <li v-if="item.subMenus && item.subMenus.length > 0">

        <template v-slot:default>
          <ButtonNav :items="item"/>
        </template>

&lt;!&ndash;        <div class="flex items-center justify-between h-12 py-4 px-6 cursor-pointer truncate rounded-[5px] transition duration-300 ease-linear hover:bg-slate-400 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit ark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10">
          <font-awesome-icon class="mr-4 text-2xl" :class="item.color" :icon="['fab', item.icon]" />
          <span class="text-gray-300">{{ item.label }}</span>
          <span class="rotate-0 duration-300">
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          class="h-5 w-5">
            <path
                fill-rule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clip-rule="evenodd" />
          </svg>
          </span>
        </div>&ndash;&gt;
        <ul v-for="subMenu in item.subMenus" :key="subMenu.label" class="p-0 m-0">
          <li>

            <template v-slot:default>
              <ButtonNav :items="subMenu"/>
            </template>

&lt;!&ndash;            <div class="flex items-center justify-between h-12 py-4 px-6 cursor-pointer truncate rounded-[5px] text-gray-300 transition duration-300 ease-linear hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit ark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10" :class="item.buttonBg">
              <RouterLink :to="item.link + subMenu.link">
                {{ subMenu.label }}
              </RouterLink>
            </div>&ndash;&gt;

          </li>
        </ul>
      </li>
      <li v-else>

        <template v-slot:default>
          <ButtonNav :items="item"/>
        </template>

&lt;!&ndash;        <div class="flex items-center justify-between h-12 py-4 px-6 cursor-pointer truncate rounded-[5px] text-gray-300 transition duration-300 ease-linear hover:bg-slate-400 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit ark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10">
          <RouterLink :to="item.link">
            <span>{{ item.label }}</span>
          </RouterLink>
        </div>&ndash;&gt;
      </li>
    </ul>
  </nav>

  <div id="content" class="w-full h-screen flex flex-col">
    <header class="h-40 flex items-center justify-center py-2 sticky">
      <h1 class="text-2xl text-primary">{{ documentationTitle }}</h1>
    </header>
    <slot></slot>
  </div>
</div>
</template>-->

<style scoped>
</style>