import { createApp } from 'vue'
import App from './App.vue'
import '@/styles/global.css'
import { initializeTheme } from './composables/useTheme'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

try {
  initializeTheme()
} catch {
  // Theme initialization is optional; restricted browser APIs must not block rendering.
}

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
