<template>
  <div class="main">
    <h2 id="projetos-title" class="title">Projetos</h2>

    <div
      class="projetos-main"
      role="region"
      aria-label="Carrossel de projetos"
      aria-roledescription="carrossel"
      @mouseenter="handlePointerEnter"
      @mouseleave="handlePointerLeave"
      @focusin="handleFocusIn"
      @focusout="handleFocusOut"
    >
      <button
        class="visually-hidden visually-hidden-focusable autoplay-toggle"
        type="button"
        :aria-label="autoplayPaused ? 'Retomar rotação automática' : 'Pausar rotação automática'"
        :aria-pressed="autoplayPaused"
        @click="toggleAutoplay"
      >
        {{ autoplayPaused ? 'Retomar rotação automática' : 'Pausar rotação automática' }}
      </button>

      <button
        class="carousel-control"
        type="button"
        aria-label="Projeto anterior"
        @click="prevSlide"
      >
        <font-awesome-icon class="icon" :icon="faChevronLeft" aria-hidden="true" />
      </button>

      <div class="container-projetos">
        <div
          :class="{ prev, next }"
          class="projetos"
          :key="projetoAtual"
          role="group"
          aria-roledescription="slide"
          :aria-live="autoplayPaused || isPointerOver || hasFocusWithin ? 'polite' : 'off'"
          aria-atomic="true"
          :aria-label="`Projeto ${projetoAtual + 1} de ${projetos.length}: ${currentProject.title}`"
        >
          <div
            class="image-project"
            aria-hidden="true"
            :class="{
              'image-project-small': currentProject.animation === 'virtual-r',
              'image-project-cards': currentProject.animation === 'cards',
            }"
          >
            <Vue3Lottie
              :animationData="animacoes[currentProject.animation]"
              :loop="!prefersReducedMotion"
              :autoPlay="!prefersReducedMotion"
              width="100%"
              height="100%"
            />
          </div>

          <div class="descricao-projeto">
            <h3>{{ currentProject.title }}</h3>
            <p>{{ currentProject.description }}</p>

            <a
              class="project-link"
              :href="currentProject.href"
              target="_blank"
              rel="noopener noreferrer"
            >
              Confira
              <font-awesome-icon class="icon-arrow" :icon="faArrowRight" aria-hidden="true" />
            </a>
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
        <font-awesome-icon class="icon" :icon="faChevronRight" aria-hidden="true" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import CircleComponent from './components/CircleComponent.vue'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { Vue3Lottie } from 'vue3-lottie'
import { usePrefersReducedMotion } from '@/composables/usePrefersReducedMotion'
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
const { prefersReducedMotion } = usePrefersReducedMotion()
const autoplayPaused = ref(false)
const isPointerOver = ref(false)
const hasFocusWithin = ref(false)
const isDocumentVisible = ref(true)
let intervale = null
let pausedByMotionPreference = false

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

const syncAutoplay = () => {
  const shouldPause =
    autoplayPaused.value || isPointerOver.value || hasFocusWithin.value || !isDocumentVisible.value

  if (shouldPause && intervale !== null) {
    clearInterval(intervale)
    intervale = null
  } else if (!shouldPause && intervale === null) {
    intervale = setInterval(nextSlide, 5000)
  }
}

const handlePointerEnter = () => {
  isPointerOver.value = true
  syncAutoplay()
}

const handlePointerLeave = () => {
  isPointerOver.value = false
  syncAutoplay()
}

const handleFocusIn = () => {
  hasFocusWithin.value = true
  syncAutoplay()
}

const handleFocusOut = (event) => {
  if (!event.currentTarget.contains(event.relatedTarget)) {
    hasFocusWithin.value = false
    syncAutoplay()
  }
}

const toggleAutoplay = () => {
  pausedByMotionPreference = false
  autoplayPaused.value = !autoplayPaused.value
  syncAutoplay()
}

const handleVisibilityChange = () => {
  isDocumentVisible.value = !document.hidden
  syncAutoplay()
}

watch(prefersReducedMotion, (reducedMotion) => {
  if (reducedMotion && !autoplayPaused.value) {
    autoplayPaused.value = true
    pausedByMotionPreference = true
  } else if (!reducedMotion && pausedByMotionPreference) {
    autoplayPaused.value = false
    pausedByMotionPreference = false
  }

  syncAutoplay()
})

onMounted(() => {
  if (prefersReducedMotion.value) {
    autoplayPaused.value = true
    pausedByMotionPreference = true
  }
  isDocumentVisible.value = !document.hidden
  document.addEventListener('visibilitychange', handleVisibilityChange)
  syncAutoplay()
})

onUnmounted(() => {
  document.removeEventListener('visibilitychange', handleVisibilityChange)
  if (intervale !== null) {
    clearInterval(intervale)
  }
})
</script>

<style scoped src="../projetos/projetos.css"></style>
