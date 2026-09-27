<template>
  <div class="main">
    <div class="description-me">
      <h1>Olá, eu sou o <span class="destaque">Christian.</span></h1>
      <p>
        Sou um
        <span ref="typeTarget" class="destaque"></span>
        com experiência profissional na criação e evolução de aplicações web modernas, utilizando
        Vue, React, Angular, TypeScript, JavaScript e Tailwind CSS. Foco em performance,
        acessibilidade, boas práticas e experiência do usuário.
      </p>

      <div class="social-medias">
        <SociaMedia
          v-for="social in socialMedias"
          :key="social.name"
          :href="social.href"
          :icon="social.icon"
          :name="social.name"
        />
      </div>
      <a class="download-cv" href="/curriculo.pdf" download="Curriculo Christian Front-End.pdf">
        Download CV
      </a>
    </div>
    <div class="animation">
      <Vue3Lottie :animationData="animationData" :loop="true" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import TypeIt from 'typeit'
import SociaMedia from './components/SociaMedia.vue'
import { Vue3Lottie } from 'vue3-lottie'
import animationData from '@/assets/animation/animation.json'
import socialMedias from '@/data/socialMedias'

const typeTarget = ref(null)

onMounted(() => {
  new TypeIt(typeTarget.value, {
    speed: 100,
    loop: true,
    cursor: true,
  })
    .type('desenvolvedor frontend')
    .pause(5000)
    .delete()
    .type('estudante de ciência da computação')
    .pause(5000)
    .delete()
    .go()
})
</script>

<style scoped src="@/views/inicio/Inicio.css"></style>
