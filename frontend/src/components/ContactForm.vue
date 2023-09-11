<script setup>

import {ref} from "vue";
import axios from "axios";

const formData = ref({
  firstName: null,
  lastName: null,
  email: null,
  message: null
});

async function submitForm() {
  try {
    console.log(formData.value)
    const url = 'http://localhost:3000/send-email';
    const data = formData.value;

    axios.post(url, data)
        .then(response => {
          const data = response.data;
          console.log(data);
        })
        .catch(error => {
          console.error(error)
        })
  } catch (error) {
    console.error(error);
  }
}

</script>

<template>
  <form @submit.prevent="submitForm" class="p-12 border-2 border-white rounded-2xl flex flex-col justify-between text-white font-ubuntu">

    <div class="flex justify-between">

      <div class="flex flex-col w-1/2 pr-10">
        <label for="lastname">Votre nom</label>
        <input v-model="formData.lastName" id="lastname" class="mt-2 px-4 py-2 text-white bg-transparent border-2 border-white rounded-lg" type="text" required>
      </div>

      <div class="flex flex-col w-1/2">
        <label for="firstname">Votre prénom</label>
        <input v-model="formData.firstName" id="firstname" class="mt-2 px-4 py-2 text-white bg-transparent border-2 border-white rounded-lg" type="text">
      </div>

    </div>

    <label for="email" class="flex flex-col">
      <span>Votre email</span>

      <input v-model="formData.email" id="email" class="mt-2 px-4 py-2 text-white bg-transparent border-2 border-white rounded-lg w-4/6" type="email">

    </label>


    <label for="message" class="flex flex-col">
      <span>Votre message</span>
      <input v-model="formData.message" id="message" class="mt-2 px-4 py-2 text-white bg-transparent border-2 border-white rounded-lg" type="text">
    </label>

    <label for="attachment" class="flex flex-col">
      <span> Pièce jointe</span>
      <input id="attachment" class="mt-2 px-4 py-2 text-white bg-transparent border-2 border-white rounded-lg" type="file">
    </label>

    <div class="flex justify-center">
      <button type="submit" class="border-2 border-white h-10 w-40 rounded-full text-xl font-bold hover:bg-white hover:text-gray pointer">
        Envoyer
        <font-awesome-icon :icon="['far', 'paper-plane']" />
      </button>
    </div>
  </form>
</template>

<style scoped>

</style>