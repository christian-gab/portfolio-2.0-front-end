<template>
  <div class="main">
    <div class="contato">
      <h1>Fale comigo!</h1>
      <p>
        Ei! Ficou com alguma dúvida ou tem uma proposta? Me conte mais sobre sua ideia, vamos
        conversar!
      </p>
      <div class="email">
        <InputComponent placeholder="Seu nome" autocomplete="name" />
        <InputComponent placeholder="Seu e-mail" type="email" autocomplete="email" />
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
