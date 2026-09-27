<template>
  <div class="main">
    <div class="description-me">
      <h1 id="inicio-title">Olá, eu sou o <span class="destaque">Christian.</span></h1>
      <p>
        Sou um
        <span ref="typeTarget" class="destaque">{{
          prefersReducedMotion ? 'desenvolvedor frontend' : ''
        }}</span>
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
    <div class="animation" aria-hidden="true">
      <Vue3Lottie
        :animationData="animationData"
        :loop="!prefersReducedMotion"
        :autoPlay="!prefersReducedMotion"
        aria-hidden="true"
      />
    </div>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import TypeIt from 'typeit'
import SociaMedia from './components/SociaMedia.vue'
import { Vue3Lottie } from 'vue3-lottie'
import animationData from '@/assets/animation/animation.json'
import socialMedias from '@/data/socialMedias'
import { usePrefersReducedMotion } from '@/composables/usePrefersReducedMotion'

const typeTarget = ref(null)
const { prefersReducedMotion } = usePrefersReducedMotion()
let typingAnimation

const startTypingAnimation = () => {
  if (!typeTarget.value || prefersReducedMotion.value) return

  typingAnimation = new TypeIt(typeTarget.value, {
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
}

onMounted(startTypingAnimation)

watch(prefersReducedMotion, (reducedMotion) => {
  if (!typeTarget.value) return

  if (reducedMotion) {
    typingAnimation?.destroy()
    typingAnimation = undefined
    typeTarget.value.textContent = 'desenvolvedor frontend'
  } else {
    typeTarget.value.textContent = ''
    startTypingAnimation()
  }
})

onBeforeUnmount(() => typingAnimation?.destroy())
</script>

<style scoped src="@/views/inicio/Inicio.css"></style>
