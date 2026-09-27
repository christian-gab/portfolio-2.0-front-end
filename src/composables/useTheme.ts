import { ref } from 'vue'

const isDark = ref(false)
const THEME_STORAGE_KEY = 'portfolio-theme'

const applyTheme = (dark: boolean) => {
  isDark.value = dark
  document.documentElement.classList.toggle('dark', dark)
  document.documentElement.style.colorScheme = dark ? 'dark' : 'light'
  const themeColor = getComputedStyle(document.documentElement)
    .getPropertyValue('--color-background')
    .trim()
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', themeColor)
}

export const initializeTheme = () => {
  let savedTheme: string | null = null

  try {
    savedTheme = localStorage.getItem(THEME_STORAGE_KEY)
  } catch {
    // Storage may be unavailable in private or restricted browser contexts.
  }

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  applyTheme(savedTheme === null ? prefersDark : savedTheme === 'dark')
}

export const toggleTheme = () => {
  const nextTheme = !isDark.value
  applyTheme(nextTheme)

  try {
    localStorage.setItem(THEME_STORAGE_KEY, nextTheme ? 'dark' : 'light')
  } catch {
    // Keep the selected theme active for this page even when it cannot be persisted.
  }
}

export const useTheme = () => ({ isDark, toggleTheme })
