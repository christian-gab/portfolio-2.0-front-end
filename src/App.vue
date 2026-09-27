<template>
  <div class="app-shell">
    <DecorativeSideShapes />
    <HeaderComponent />

    <section id="inicio">
      <InicioPage />
    </section>

  <section id="sobre">
    <SobrePage />
  </section>

  <section id="habilidades">
    <HabilidadesPage />
  </section>

  <section id="projetos">
    <ProjetosPage />
  </section>

    <section id="contato">
      <ContatoPage />
    </section>
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
