<script setup>

import {ref} from "vue";
import axios from "axios";
import { useRoute } from "vue-router";

const formData = ref({
  firstName: null,
  lastName: null,
  email: null,
  message: null
});

const emailSent = ref(false)
const route = useRoute();

/* Form submission using Axios */
async function submitForm(e) {
  try {
    e.preventDefault();

    /* Show the badge when form is submit */
    const badge = document.querySelector('.grecaptcha-badge');
    console.log(badge);
    badge.style.visibility = 'visible';

    const recaptchaToken = await new Promise((resolve) => {
      grecaptcha.ready(function() {
        grecaptcha.execute('6LcnthooAAAAAPGu7Kfi2VNtioP7GAlvMx7JZZPK', { action: 'submit' }).then(resolve);
      })
    })

    const url = 'https://localhost:3000/send-email';
    const data = { ...formData.value, recaptchaToken } ;

    axios.post(url, data)
        .then(response => {
          const data = response.data;

          emailSent.value = true;
        })
        .catch(error => {
          console.error(error)
        })
  } catch (error) {
    console.error(error);
  }
}

function closeConfirmation() {
  emailSent.value = false;
  // Init form
  formData.value.firstName = null;
  formData.value.lastName = null;
  formData.value.email = null;
  formData.value.message = null;
  // Hide form when popup is closed
  const badge = document.querySelector('.grecaptcha-badge');
  console.log(badge);
  badge.style.visibility = 'hidden';
}

</script>

<template>
<!--  <form id="contact-form" @submit.prevent="submitForm" class="mb-40 p-8 md:p-12 sm:border-2 border-white rounded-2xl flex flex-col justify-between text-white font-ubuntu">-->
  <form @submit="submitForm" class="mb-40 p-8 md:p-12 sm:border-2 border-white rounded-2xl flex flex-col justify-between text-white font-ubuntu">

    <div class="lg:flex lg:justify-between">

      <div class="flex flex-col lg:w-1/2 lg:pr-10">
        <label for="lastname">Votre nom</label>
        <input v-model="formData.lastName" id="lastname" class="mt-2 px-4 py-2 text-white bg-transparent border-2 border-white rounded-lg" type="text" required>
      </div>

      <div class="mt-2 lg:mt-0 flex flex-col lg:w-1/2">
        <label for="firstname">Votre prénom</label>
        <input v-model="formData.firstName" id="firstname" class="mt-2 px-4 py-2 text-white bg-transparent border-2 border-white rounded-lg" type="text">
      </div>

    </div>

    <label for="email" class="mt-2 flex flex-col">
      <span>Votre email</span>
      <input v-model="formData.email" id="email" class="mt-2 px-4 py-2 text-white bg-transparent border-2 border-white rounded-lg lg:w-4/6" type="email">
    </label>

    <label for="message" class="mt-2 flex flex-col">
      <span>Votre message</span>
<!--      <input v-model="formData.message" id="message" class="mt-2 px-4 py-2 text-white bg-transparent border-2 border-white rounded-lg" type="text">-->
      <textarea v-model="formData.message" id="message" class="mt-2 px-4 py-2 text-white bg-transparent border-2 border-white rounded-lg" type="text" rows="6"></textarea>
    </label>

    <div class="mt-14 flex justify-center">
      <button
          type="submit"
          class="border-2 border-white h-10 w-40 rounded-full text-xl font-bold hover:bg-white hover:text-gray pointer"
      >
        Envoyer
        <font-awesome-icon :icon="['far', 'paper-plane']" />
      </button>
    </div>

  </form>

  <div v-if="emailSent" class="fixed bottom-10 left-10 w-80 text-white bg-blue p-5 rounded-lg">
    <p class="pt-2">Message envoyé 🚀 Merci pour votre message, je vous répond au plus vite. À bientôt ! 👋</p>
    <div class="absolute top-2 right-2 h-6 w-6 border-2 border-white rounded-full cursor-pointer flex justify-center items-center">
      <div @click="closeConfirmation" class="text-white">x</div>
    </div>
  </div>

</template>

<style scoped>
</style>