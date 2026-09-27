<template>
  <div class="main">
    <h1 class="title">Projetos</h1>

    <div class="projetos-main">
      <div @click="prevSlide">
        <font-awesome-icon class="icon" :icon="faChevronLeft" />
      </div>

      <div class="container-projetos">
        <div :class="{ prev, next }" class="projetos" :key="projetoAtual">
          <div
            class="image-project"
            :class="{
              'image-project-small': currentProject.title === 'Virtual-R',
              'image-project-cards': currentProject.title === 'Jokes card',
            }"
          >
            <Vue3Lottie
              :animationData="animacoes[currentProject.animation]"
              :loop="true"
              :autoPlay="true"
              width="100%"
              height="100%"
            />
          </div>

          <div class="descricao-projeto">
            <h1>{{ currentProject.title }}</h1>
            <p>{{ currentProject.description }}</p>

            <button @click="abrirProjeto">
              Confira
              <font-awesome-icon class="icon-arrow" :icon="faArrowRight" />
            </button>
          </div>
        </div>

        <div class="circles-components">
          <CircleComponent v-for="(project, index) in projetos" :key="index" :active="index === projetoAtual"
            @click="projetoAtual = index" />
        </div>
      </div>

      <div @click="nextSlide">
        <font-awesome-icon class="icon" :icon="faChevronRight" />
      </div>
    </div>
  </div>
</template>


<script setup>
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import CircleComponent from './components/CircleComponent.vue'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { computed, ref } from 'vue'
import { Vue3Lottie } from 'vue3-lottie'
import contactAnimation from '@/assets/animation/Contact.json'
import summerAnimation from '@/assets/animation/Summer.json'
import cardsAnimation from '@/assets/animation/Cards.json'
import virtualRAnimation from '@/assets/animation/Backend.json'
import projetos from './arrayProjetos'


const animacoes = {
  contact: contactAnimation,
  summer: summerAnimation,
  cards: cardsAnimation,
  'virtual-r': virtualRAnimation,
}

const projetoAtual = ref(0)
const prev = ref(false)
const next = ref(false)
const currentProject = computed(() => projetos[projetoAtual.value])

const nextSlide = () => {
  next.value = true
  projetoAtual.value = (projetoAtual.value + 1) % projetos.length
  clearInterval(intervale)
}

const prevSlide = () => {
  prev.value = true
  projetoAtual.value = (projetoAtual.value - 1 + projetos.length) % projetos.length
  clearInterval(intervale)
}

const intervale = setInterval(() => {
  nextSlide()
}, 5000)

const abrirProjeto = () => {
  window.open(currentProject.value.href, '_blank')
}

</script>

<style scoped src="../projetos/projetos.css"></style>
