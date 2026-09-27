<template>
  <div class="main">
    <div class="contato">
      <h2 id="contato-title">Fale comigo!</h2>
      <p>
        Ei! Ficou com alguma dúvida ou tem uma proposta? Me conte mais sobre sua ideia, vamos
        conversar!
      </p>
      <div class="email">
        <InputComponent id="contact-name" name="name" placeholder="Seu nome" autocomplete="name" />
        <InputComponent
          id="contact-email"
          name="email"
          placeholder="Seu e-mail"
          type="email"
          autocomplete="email"
        />
      </div>
      <div class="container-textarea">
        <TextAreaComponent />
      </div>
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
import AboutMedias from '../sobre/components/AboutMedias.vue'
import TextAreaComponent from './components/TextAreaComponent.vue'
import InputComponent from './components/InputComponent.vue'
import socialMedias from '@/data/socialMedias'
</script>

<style scoped src="../contato/contato.css"></style>
