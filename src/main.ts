import { createApp } from 'vue'
import App from './App.vue'
import '@/styles/global.css'
import { initializeTheme } from './composables/useTheme'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

initializeTheme()

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
