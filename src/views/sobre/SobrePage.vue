<template>
  <div class="main">
    <div class="about-me">
      <div class="image" aria-hidden="true">
        <Vue3Lottie
          width="500px"
          :animationData="aboutAnimation"
          :loop="!prefersReducedMotion"
          :autoPlay="!prefersReducedMotion"
          aria-hidden="true"
        />
      </div>
      <div class="description">
        <h2 id="sobre-title">Sobre mim.</h2>
        <h3>Christian Gabriel</h3>
        <h4>Desenvolvedor Frontend</h4>
        <p>
          Atualmente, atuo em múltiplos projetos como desenvolvedor Frontend, trabalhando no
          desenvolvimento, evolução e modernização de aplicações web. Tenho experiência com Angular,
          Vue, React e TypeScript, atuando com autonomia na implementação de funcionalidades,
          refatoração e melhoria de aplicações.
        </p>
        <div class="social-medias">
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
  </div>
</template>

<script setup>
import aboutAnimation from '@/assets/animation/aboutAnimation.json'
import { Vue3Lottie } from 'vue3-lottie'
import AboutMedias from './components/AboutMedias.vue'
import socialMedias from '@/data/socialMedias'
import { usePrefersReducedMotion } from '@/composables/usePrefersReducedMotion'

const { prefersReducedMotion } = usePrefersReducedMotion()
</script>

<style src="/src/views/sobre/sobre.css" scoped></style>
