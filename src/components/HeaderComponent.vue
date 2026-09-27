<template>
  <header :class="border">
    <ul>
      <li v-for="item in menuItems" :key="item.id" @click="scrollToSection(item.id)">
        {{ item.label }}
      </li>

      <li class="theme-toggle">
        <button
          class="toggle"
          :class="{ active: isDark }"
          @click="toggleTheme"
          aria-label="Alternar tema"
          :aria-pressed="isDark"
        >
          <span class="toggle-circle"> </span>
        </button>
      </li>
    </ul>
  </header>
</template>

<style scoped>
header {
  width: 100vw;
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
}

ul {
  display: flex;
  align-items: center;
  gap: 24px;
  list-style: none;
  margin-right: 48px;
}

li {
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
}

li:hover {
  color: var(--color-primary);
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
  background-color: #ddd;
  cursor: pointer;
  position: relative;
  transition: background-color 0.3s ease;
}

.toggle-circle {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: white;
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
  background-color: #333;
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
</style>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useTheme } from '@/composables/useTheme'

const border = ref('')
const { isDark, toggleTheme } = useTheme()

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

const scrollToSection = (id) => {
  const section = document.getElementById(id)

  if (section) {
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
