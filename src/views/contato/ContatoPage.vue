<template>
  <div class="main">
    <div class="contato">
      <h2 id="contato-title">Fale comigo!</h2>
      <p>
        Ei! Ficou com alguma dúvida ou tem uma proposta? Me conte mais sobre sua ideia, vamos
        conversar!
      </p>
      <form class="email" @submit.prevent="sendEmail" novalidate>
        <InputComponent
          id="contact-name"
          name="name"
          placeholder="Seu nome"
          autocomplete="name"
          v-model="form.name"
        />
        <InputComponent
          id="contact-email"
          name="email"
          placeholder="Seu e-mail"
          type="email"
          autocomplete="email"
          v-model="form.email"
        />
      </form>
      <div class="container-textarea">
        <TextAreaComponent v-model="form.message" />
      </div>

      <button
        id="send-btn"
        class="send-btn"
        :class="{
          loading: status === 'loading',
          success: status === 'success',
          error: status === 'error',
        }"
        :disabled="status === 'loading'"
        @click="sendEmail"
        type="button"
      >
        <span v-if="status === 'idle'" class="btn-content">Enviar mensagem</span>
        <span v-else-if="status === 'loading'" class="btn-content">
          <span class="spinner"></span>
          Enviando...
        </span>
        <span v-else-if="status === 'success'" class="btn-content">Mensagem enviada!</span>
        <span v-else-if="status === 'error'" class="btn-content">Erro ao enviar</span>
      </button>

      <div class="redes-sociais">
        <AboutMedias
          v-for="social in socialMedias"
          :key="social.name"
          :href="social.href"
          :icon="social.icon"
          :name="social.name"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import emailjs from '@emailjs/browser'
import AboutMedias from '../sobre/components/AboutMedias.vue'
import TextAreaComponent from './components/TextAreaComponent.vue'
import InputComponent from './components/InputComponent.vue'
import socialMedias from '@/data/socialMedias'

const SERVICE_ID = 'service_p4op7g7'
const TEMPLATE_ID = 'template_sd4atrd'
const PUBLIC_KEY = 'aGFyu7MBSgmGrQ4ee'

const form = ref({
  name: '',
  email: '',
  message: '',
})

const status = ref('idle') // 'idle' | 'loading' | 'success' | 'error'

async function sendEmail() {
  if (!form.value.name || !form.value.email || !form.value.message) {
    return
  }

  status.value = 'loading'

  try {
    await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        title: 'Portfólio',
        name: form.value.name,
        from_name: form.value.name,
        from_email: form.value.email,
        email: form.value.email,
        message: form.value.message,
      },
      PUBLIC_KEY,
    )

    status.value = 'success'
    form.value = { name: '', email: '', message: '' }

    setTimeout(() => {
      status.value = 'idle'
    }, 4000)
  } catch (err) {
    console.error('EmailJS error:', err)
    status.value = 'error'

    setTimeout(() => {
      status.value = 'idle'
    }, 4000)
  }
}
</script>

<style scoped src="../contato/contato.css"></style>
