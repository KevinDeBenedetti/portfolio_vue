<script setup>
import ContactForm from "@/components/ContactForm.vue";
</script>

<template>
  <main class="h-screen container m-auto">

    <header class="my-10 flex justify-center items-center">
      <RouterLink to="/">
        <font-awesome-icon class="text-3xl text-[40px] text-white" icon="fa-solid fa-house" />
      </RouterLink>
    </header>

    <div class="my-10 text-white text-xl font-robotoMono">
      <p>Des idées à concrétiser ? 💡</p>
      <p>Vous pouvez me contacter avec ce formulaire 👇</p>
    </div>

    <ContactForm/>

  </main>
</template>

<style scoped>

</style>