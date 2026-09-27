import { ref } from 'vue'

const isDark = ref(false)
const THEME_STORAGE_KEY = 'portfolio-theme'

const applyTheme = (dark: boolean) => {
  isDark.value = dark
  document.documentElement.classList.toggle('dark', dark)
  document.documentElement.style.colorScheme = dark ? 'dark' : 'light'
}

export const initializeTheme = () => {
  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY)
  applyTheme(savedTheme === 'dark')
}

export const toggleTheme = () => {
  const nextTheme = !isDark.value
  applyTheme(nextTheme)
  localStorage.setItem(THEME_STORAGE_KEY, nextTheme ? 'dark' : 'light')
}

export const useTheme = () => ({ isDark, toggleTheme })
