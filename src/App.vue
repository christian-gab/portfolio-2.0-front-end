<template>
  <div class="app-shell">
    <a class="skip-link" href="#main-content">Pular para o conteúdo principal</a>
    <DecorativeSideShapes />
    <HeaderComponent />

    <main id="main-content" tabindex="-1">
      <section id="inicio" aria-labelledby="inicio-title">
        <InicioPage />
      </section>

      <section id="sobre" aria-labelledby="sobre-title">
        <SobrePage />
      </section>

      <section id="habilidades" aria-labelledby="habilidades-title">
        <HabilidadesPage />
      </section>

      <section id="projetos" aria-labelledby="projetos-title">
        <ProjetosPage />
      </section>

      <section id="contato" aria-labelledby="contato-title">
        <ContatoPage />
      </section>
    </main>
  </div>
</template>

<script setup>
import ContatoPage from './views/contato/ContatoPage.vue'
import ProjetosPage from './views/projetos/ProjetosPage.vue'
import HabilidadesPage from './views/habilidades/HabilidadesPage.vue'
import SobrePage from './views/sobre/SobrePage.vue'
import InicioPage from './views/inicio/InicioPage.vue'
import HeaderComponent from './components/HeaderComponent.vue'
import DecorativeSideShapes from './components/DecorativeSideShapes.vue'
</script>

<style scoped>
.app-shell {
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
}
</style>
