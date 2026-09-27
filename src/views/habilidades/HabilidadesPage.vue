<template>
  <div class="main">
    <h2 id="habilidades-title">Habilidades</h2>
    <div class="grid-habilidades">
      <template v-for="habilidade in habilidades" :key="habilidade.name">
        <Habilidade v-if="habilidade.icon" :icon="habilidade.icon" :name="habilidade.name" />
        <Habilidade v-else-if="habilidade.className" :name="habilidade.name">
          <i :class="habilidade.className"></i>
        </Habilidade>
        <Habilidade v-else :name="habilidade.name">
          <img
            class="pinia"
            :src="habilidade.image"
            :alt="habilidade.alt"
            width="319"
            height="478"
            loading="lazy"
            decoding="async"
          />
        </Habilidade>
      </template>
    </div>
  </div>
</template>

<script setup>
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faVuejs,
  faReact,
  faNodeJs,
  faGitAlt,
} from '@fortawesome/free-brands-svg-icons'
import Habilidade from './components/Habilidade.vue'

const habilidades = [
  { name: 'HTML5', icon: faHtml5 },
  { name: 'CSS3', icon: faCss3Alt },
  { name: 'JavaScript', icon: faJs },
  { name: 'TypeScript', className: 'devicon-typescript-plain' },
  { name: 'Angular', className: 'devicon-angularjs-plain' },
  { name: 'Vue.js', icon: faVuejs },
  { name: 'React', icon: faReact },
  { name: 'Node.js', icon: faNodeJs },
  { name: 'Next.js', className: 'devicon-nextjs-plain' },
  { name: 'Git', icon: faGitAlt },
  {
    name: 'Pinia',
    image: new URL('../../assets/images/PiniaLogo.png', import.meta.url).href,
    alt: 'Pinia logo',
  },
  { name: 'Tailwind CSS', className: 'devicon-tailwindcss-original' },
]
</script>

<style src="../habilidades/habilidades.css" scoped></style>
