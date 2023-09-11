import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DocumentationView from "@/views/DocumentationView.vue";
import VueView from "@/views/VueView.vue";
import SymfonyView from "@/views/SymfonyView.vue";
import ContactView from "@/views/ContactView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/documentation',
      name: 'documentation',
      component: DocumentationView
    },
    {
      /* Les routes sont facultatives et changent */
      path: '/documentation/vue/:slug?',
      name: 'vue',
      component: VueView
    },
    {
      path: '/documentation/symfony/:slug?',
      name: 'symfony',
      component: SymfonyView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
  ]
})

export default router
