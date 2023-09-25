<script setup>
import ContactForm from "@/components/ContactForm.vue";
</script>

<template>

  <main class="container m-auto h-screen max-w-2xl mt-10">

    <header class="my-4 flex justify-center items-center">
      <RouterLink to="/">
        <font-awesome-icon class="text-[30px] text-white" icon="fa-solid fa-house" />
      </RouterLink>
    </header>

    <div class="text-white font-robotoMono px-4 sm:px-0 mt-10">
      <p>Des idées à concrétiser ? 💡</p>
      <p class="mt-2">Vous pouvez me contacter avec ce formulaire 👇</p>
    </div>

    <ContactForm />

  </main>

</template>

<style scoped>

</style>