<template>
  <div class="main">
    <h1 class="title">Projetos</h1>

    <div class="projetos-main" @mouseenter="pausarAutoplay" @mouseleave="iniciarAutoplay">
      <button
        class="carousel-control"
        type="button"
        aria-label="Projeto anterior"
        @click="prevSlide"
      >
        <font-awesome-icon class="icon" :icon="faChevronLeft" />
      </button>

      <div class="container-projetos">
        <div :class="{ prev, next }" class="projetos" :key="projetoAtual">
          <div
            class="image-project"
            :class="{
              'image-project-small': currentProject.animation === 'virtual-r',
              'image-project-cards': currentProject.animation === 'cards',
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
          <CircleComponent
            v-for="(project, index) in projetos"
            :key="project.animation"
            :index="index"
            :active="index === projetoAtual"
            @click="selecionarSlide(index)"
          />
        </div>
      </div>

      <button
        class="carousel-control"
        type="button"
        aria-label="Próximo projeto"
        @click="nextSlide"
      >
        <font-awesome-icon class="icon" :icon="faChevronRight" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import CircleComponent from './components/CircleComponent.vue'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { computed, onMounted, onUnmounted, ref } from 'vue'
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
let intervale = null

const nextSlide = () => {
  next.value = true
  prev.value = false
  projetoAtual.value = (projetoAtual.value + 1) % projetos.length
}

const prevSlide = () => {
  prev.value = true
  next.value = false
  projetoAtual.value = (projetoAtual.value - 1 + projetos.length) % projetos.length
}

const selecionarSlide = (index) => {
  prev.value = false
  next.value = false
  projetoAtual.value = index
}

const pausarAutoplay = () => {
  if (intervale !== null) {
    clearInterval(intervale)
    intervale = null
  }
}

const iniciarAutoplay = () => {
  if (intervale === null) {
    intervale = setInterval(nextSlide, 5000)
  }
}

onMounted(iniciarAutoplay)
onUnmounted(pausarAutoplay)

const abrirProjeto = () => {
  window.open(currentProject.value.href, '_blank', 'noopener,noreferrer')
}
</script>

<style scoped src="../projetos/projetos.css"></style>
