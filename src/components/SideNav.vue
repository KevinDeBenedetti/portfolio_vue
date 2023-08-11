<script setup>
import {
  Sidenav,
  initTE,
} from "tw-elements";

import { onMounted } from "vue";
import { useStore } from "@/stores/store";

import { defineProps } from "vue";

const props = defineProps({
  documentationTitle: String
});

onMounted(() => {
  initTE({ Sidenav });

  const instanceMode = Sidenav.getInstance(
      document.getElementById("sidenav-2")
  );

})

const menuStore = useStore();
const menuItems = menuStore.getMenuItems;

</script>

<template>
  <div class="flex">

  </div>
  <!-- Sidenav -->
  <nav
      id="sidenav-2"
      class="fixed left-0 top-0 z-[1035] h-screen w-60 -translate-x-full overflow-hidden bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] data-[te-sidenav-hidden='false']:translate-x-0 dark:bg-zinc-800"
      data-te-sidenav-init
      data-te-sidenav-hidden="false"
      data-te-sidenav-mode="side"
      data-te-sidenav-content="#content">
    <ul
        v-for="item in menuItems" :key="item.label"
        class="relative m-0 list-none px-[0.2rem]"
        data-te-sidenav-menu-ref>

      <li
          v-if="item.subMenus && item.subMenus.length > 0"
          class="relative">

        <a
            class="flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
            data-te-sidenav-link-ref>

          <font-awesome-icon class="mr-4 text-2xl" :class="item.color" :icon="['fab', item.icon]" />

          <RouterLink :to="'/documentation' + item.link">
          <span>{{ item.label }}</span>
          </RouterLink>
          <span
              class="absolute right-0 ml-auto mr-[0.8rem] transition-transform duration-300 ease-linear motion-reduce:transition-none [&>svg]:text-gray-600 dark:[&>svg]:text-gray-300"
              data-te-sidenav-rotate-icon-ref>
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
        </a>

        <ul
            v-for="subMenu in item.subMenus" :key="subMenu.label"
            class="!visible relative m-0 hidden list-none p-0 data-[te-collapse-show]:block "
            data-te-sidenav-collapse-ref>
          <li class="relative">
            <RouterLink :to="'/documentation' + item.link + subMenu.link">
            <a
                class="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                data-te-sidenav-link-ref
            >{{ subMenu.label }}</a>
            </RouterLink>
          </li>
        </ul>
      </li>
      <li
          v-else
          class="relative">

        <a
            class="flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
            data-te-sidenav-link-ref>
        <span class="mr-4 [&>svg]:h-4 [&>svg]:w-4 [&>svg]:text-gray-400 dark:[&>svg]:text-gray-300">
          <font-awesome-icon :icon="['fas', 'house']" />
        </span>
          <RouterLink :to="'/documentation' + item.link">
          <span>{{ item.label }}</span>
          </RouterLink>
        </a>

      </li>
    </ul>
  </nav>

  <div id="content">
    <!-- Toggler -->
    <button
        class="mt-10 inline-block rounded bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg fixed top-0 right-0"
        data-te-sidenav-toggle-ref
        data-te-target="#sidenav-2"
        aria-controls="#sidenav-2"
        aria-haspopup="true">
    <span class="block [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-white">
      <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="h-5 w-5">
        <path
            fill-rule="evenodd"
            d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
            clip-rule="evenodd" />
      </svg>
    </span>
    </button>

    <header class="bg-slate-300 h-20 flex items-center justify-center py-2">
      <h1 class="text-2xl text-primary">{{ documentationTitle }}</h1>
    </header>

    <slot></slot>
  </div>

</template>

<style scoped>

</style>