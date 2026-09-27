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
          @click="openLink(social.href)"
        />
      </div>
      <a href="/public/curriculo.pdf" download="Curriculo Christian Front-End.pdf">
        <button class="download-cv">Download CV</button>
      </a>
    </div>
    <div class="animation">
      <Vue3Lottie width="500px" :animationData="animationData" :loop="true" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import TypeIt from 'typeit'
import SociaMedia from './components/SociaMedia.vue'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Vue3Lottie } from 'vue3-lottie'
import animationData from '@/assets/animation/animation.json'

const typeTarget = ref(null)

const socialMedias = [
  {
    name: 'GitHub',
    href: 'https://github.com/christian-gab',
    icon: faGithub,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/christiangdev',
    icon: faLinkedin,
  },
  {
    name: 'Email',
    href: 'https://mail.google.com/mail/?view=cm&to=christiandeveloper123@gmail.com',
    icon: faEnvelope,
  },
]

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

const openLink = (href) => {
  window.open(href, '_blank')
}
</script>

<style scoped src="@/views/inicio/Inicio.css"></style>
