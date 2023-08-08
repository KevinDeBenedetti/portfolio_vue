<script setup>
// Initialization for ES Users
import {
  Collapse,
  Dropdown,
  initTE,
} from "tw-elements";
import {onMounted} from "vue";
import { useMenuStore } from "@/stores/store";

onMounted(() => {
  initTE({ Collapse, Dropdown });
})

const menuStore = useMenuStore();
const menuItems = menuStore.getMenuItems;

</script>

<template>

  <!-- Main navigation container -->
  <!--  <nav
        class="flex-no-wrap relative flex w-full items-center justify-between bg-[#FBFBFB] py-2 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4"
        data-te-navbar-ref>-->
  <nav
      class="flex-no-wrap relative flex w-full items-center justify-between bg-green-200 py-2 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 md:flex-wrap md:flex-col md:justify-start md:w-2/12 md:h-screen md:py-4"
      data-te-navbar-ref>
    <div class="flex w-full flex-wrap items-center justify-between px-3">
      <!-- Hamburger button for mobile view -->
      <button
          class="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 md:hidden"
          type="button"
          data-te-collapse-init
          data-te-target="#navbarSupportedContent1"
          aria-controls="navbarSupportedContent1"
          aria-expanded="false"
          aria-label="Toggle navigation">
        <!-- Hamburger icon -->
        <span class="[&>svg]:w-7">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="h-7 w-7">
          <path
              fill-rule="evenodd"
              d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
              clip-rule="evenodd" />
        </svg>
      </span>
      </button>

      <!-- Collapsible navigation container -->
      <div
          class="!visible hidden flex-grow basis-[100%] md:!flex md:flex-col md:basis-auto"
          id="navbarSupportedContent1"
          data-te-collapse-item>
        <!-- Left navigation links -->
        <ul
            v-for="item in menuItems" :key="item.label"
            class="list-style-none mr-auto flex flex-col pl-0 md:flex-row md:text-center"
            data-te-navbar-nav-ref>
          <li class="mb-4 md:mb-0 md:pr-2" data-te-nav-item-ref>
            <RouterLink :to="item.link">
              <a class="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400" data-te-nav-link-ref>
                {{ item.label }}
              </a>
            </RouterLink>

          </li>
        </ul>
      </div>

    </div>
  </nav>

</template>

<style scoped>

</style>