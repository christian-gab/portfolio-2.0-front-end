<template>
  <header :class="border" @keydown.esc.prevent="closeMenu(true)">
    <nav class="desktop-nav" aria-label="Navegação principal">
      <ul>
        <li v-for="item in menuItems" :key="item.id">
          <a class="nav-link" :href="`#${item.id}`">
            {{ item.label }}
          </a>
        </li>

        <li class="theme-toggle">
          <button
            class="toggle"
            type="button"
            :class="{ active: isDark }"
            @click="toggleTheme"
            aria-label="Alternar tema"
            :aria-pressed="isDark"
          >
            <span class="toggle-icons" aria-hidden="true">
              <font-awesome-icon class="icon-sun" :icon="themeIcons.sun" />
              <font-awesome-icon class="icon-moon" :icon="themeIcons.moon" />
            </span>
            <span class="toggle-circle"></span>
          </button>
        </li>
      </ul>
    </nav>

    <button
      ref="hamburgerButton"
      class="hamburger-button"
      type="button"
      :aria-label="isMenuOpen ? 'Fechar menu' : 'Abrir menu'"
      :aria-expanded="isMenuOpen"
      aria-controls="mobile-navigation"
      @click="toggleMenu"
    >
      <span class="hamburger-line"></span>
      <span class="hamburger-line"></span>
      <span class="hamburger-line"></span>
    </button>

    <nav
      ref="mobileMenu"
      id="mobile-navigation"
      class="mobile-menu"
      :class="{ open: isMenuOpen }"
      aria-label="Menu móvel"
      v-show="isMenuOpen"
    >
      <ul>
        <li v-for="item in menuItems" :key="item.id">
          <a class="nav-link" :href="`#${item.id}`" @click="closeMenu()">
            {{ item.label }}
          </a>
        </li>

        <li class="theme-toggle mobile-theme-toggle">
          <button
            class="toggle"
            type="button"
            :class="{ active: isDark }"
            @click="toggleTheme"
            aria-label="Alternar tema"
            :aria-pressed="isDark"
          >
            <span class="toggle-icons" aria-hidden="true">
              <font-awesome-icon class="icon-sun" :icon="themeIcons.sun" />
              <font-awesome-icon class="icon-moon" :icon="themeIcons.moon" />
            </span>
            <span class="toggle-circle"></span>
          </button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: end;
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--color-background);
  border-bottom: 1px solid transparent;
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease,
    box-shadow 0.3s ease;
  z-index: 1000;
  padding-inline: clamp(16px, 4vw, 48px);
}

.desktop-nav {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

ul {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 24px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-link {
  border: 0;
  padding: 0;
  background: transparent;
  color: inherit;
  font: inherit;
  font-size: 14px;
  font-weight: 400;
  text-decoration: none;
  white-space: nowrap;
}

.nav-link:hover,
.nav-link:focus-visible {
  color: var(--color-primary-text);
}

.nav-link:focus-visible,
.toggle:focus-visible,
.hamburger-button:focus-visible {
  outline: 2px solid var(--color-primary-text);
  outline-offset: 3px;
}

.theme-toggle {
  display: flex;
  align-items: center;
}

.toggle {
  width: 48px;
  height: 26px;
  padding: 3px;
  border: none;
  border-radius: 999px;
  background-color: var(--color-toggle-track);
  cursor: pointer;
  position: relative;
  transition: background-color 0.3s ease;
  overflow: hidden;
}

.toggle-icons {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 7px;
  pointer-events: none;
}

.icon-sun,
.icon-moon {
  width: 11px;
  height: 11px;
  color: var(--color-toggle-icon);
  opacity: 0.9;
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}

.toggle.active .icon-sun {
  opacity: 0.4;
}

.toggle.active .icon-moon {
  opacity: 1;
}

.toggle-circle {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: var(--color-toggle-thumb);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  line-height: 1;
  position: absolute;
  top: 3px;
  left: 3px;
  transition:
    transform 0.3s ease,
    background-color 0.3s ease;
}

.toggle.active {
  background-color: var(--color-toggle-active);
}

.toggle.active .toggle-circle {
  transform: translateX(22px);
}

.border {
  border-color: var(--color-border);
  box-shadow: 0 1px 0 color-mix(in srgb, var(--color-text) 8%, transparent);
}

header.border {
  border-color: var(--color-border);
}

.hamburger-button {
  display: none;
  width: 34px;
  height: 34px;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  background: transparent;
  padding: 7px 8px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 4px;
  position: relative;
  z-index: 2;
}

.hamburger-line {
  display: block;
  width: 16px;
  height: 2px;
  border-radius: 2px;
  background-color: var(--color-text);
  transition:
    transform 0.25s ease,
    opacity 0.25s ease;
}

.mobile-menu {
  display: none;
}

@media (max-width: 767px) {
  header {
    height: 50px;
    justify-content: flex-end;
    padding: 0 16px;
  }

  .desktop-nav {
    display: none;
  }

  .hamburger-button {
    display: flex;
  }

  .hamburger-button .hamburger-line {
    transform-origin: center;
  }

  .hamburger-button[aria-expanded='true'] .hamburger-line:nth-child(1) {
    transform: translateY(7px) rotate(45deg);
  }

  .hamburger-button[aria-expanded='true'] .hamburger-line:nth-child(2) {
    opacity: 0;
  }

  .hamburger-button[aria-expanded='true'] .hamburger-line:nth-child(3) {
    transform: translateY(-7px) rotate(-45deg);
  }

  .mobile-menu {
    position: absolute;
    top: calc(100% + 8px);
    left: 16px;
    right: 16px;
    display: block;
    background-color: var(--color-background);
    border: 1px solid var(--color-border);
    border-radius: 4px;
    opacity: 0;
    pointer-events: none;
    transform: translateY(-8px);
    transition:
      opacity 0.25s ease,
      transform 0.25s ease;
    overflow: hidden;
  }

  .mobile-menu.open {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  }

  .mobile-menu ul {
    display: flex;
    flex-direction: column;
    gap: 0;
    align-items: stretch;
  }

  .mobile-menu li {
    display: block;
    min-height: 48px;
    padding: 0;
    border-bottom: 1px solid var(--color-border);
    font-size: 14px;
  }

  .mobile-menu .nav-link {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    min-height: 48px;
    padding-inline: 16px;
    text-align: left;
  }

  .mobile-menu li:last-child {
    border-bottom: none;
  }

  .mobile-menu .mobile-theme-toggle {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    box-sizing: border-box;
    width: 100%;
    min-height: 48px;
    padding: 12px 16px;
  }
}
</style>

<script setup>
import { nextTick, onMounted, onUnmounted, ref, useTemplateRef } from 'vue'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import { useTheme } from '@/composables/useTheme'

const border = ref('')
const isMenuOpen = ref(false)
const hamburgerButton = useTemplateRef('hamburgerButton')
const mobileMenu = useTemplateRef('mobileMenu')
const { isDark, toggleTheme } = useTheme()

const themeIcons = {
  sun: faSun,
  moon: faMoon,
}

const menuItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Habilidades', id: 'habilidades' },
  { label: 'Projetos', id: 'projetos' },
  { label: 'Contato', id: 'contato' },
]

const handleScroll = () => {
  border.value = window.scrollY > 0 ? 'border' : ''
}

const handleOutsidePointerDown = (event) => {
  const target = event.target

  if (
    isMenuOpen.value &&
    target instanceof Node &&
    !mobileMenu.value?.contains(target) &&
    !hamburgerButton.value?.contains(target)
  ) {
    closeMenu()
  }
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = async (restoreFocus = false) => {
  if (!isMenuOpen.value) return

  isMenuOpen.value = false

  if (restoreFocus) {
    await nextTick()
    hamburgerButton.value?.focus()
  }
}

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll)
  document.addEventListener('pointerdown', handleOutsidePointerDown)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('pointerdown', handleOutsidePointerDown)
})
</script>
