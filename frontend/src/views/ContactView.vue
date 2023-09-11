<script setup>
import {ref} from "vue";

const formData = ref({
  firstName: null,
  lastName: null,
  email: null,
  message: null
});

function submitForm() {
  console.log(formData.value)
}
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

    <form @submit.prevent="submitForm" class="p-12 border-2 border-white rounded-2xl flex flex-col justify-between text-white font-ubuntu" action="#">

      <div class="flex justify-between">

        <div class="flex flex-col w-1/2 pr-10">
          <label for="lastname">Votre nom</label>
          <input v-model="formData.lastname" class="mt-2 px-4 py-2 text-white bg-transparent border-2 border-white rounded-lg" type="text" required>
        </div>

        <div class="flex flex-col w-1/2">
          <label for="firstname">Votre prénom</label>
          <input v-model="formData.firstname" class="mt-2 px-4 py-2 text-white bg-transparent border-2 border-white rounded-lg" type="text" required>
        </div>

      </div>

      <label for="email" class="flex flex-col">
        <span>Votre email</span>

        <input v-model="formData.email" class="mt-2 px-4 py-2 text-white bg-transparent border-2 border-white rounded-lg w-4/6" type="email" required>

      </label>


      <label for="message" class="flex flex-col">
        <span>Votre message</span>
        <input v-model="formData.message" class="mt-2 px-4 py-2 text-white bg-transparent border-2 border-white rounded-lg" type="text" required>
      </label>

      <label for="attachment" class="flex flex-col">
        <span> Pièce jointe</span>
        <input class="mt-2 px-4 py-2 text-white bg-transparent border-2 border-white rounded-lg" type="file">
      </label>

      <div class="flex justify-center">
        <button type="submit" class="border-2 border-white h-10 w-40 rounded-full text-xl font-bold hover:bg-white hover:text-gray pointer">
          Envoyer
          <font-awesome-icon :icon="['far', 'paper-plane']" />
        </button>
      </div>

    </form>
  </main>
</template>

<style scoped>

</style>