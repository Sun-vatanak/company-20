import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'
import router from './router'
import App from './App.vue'

// Configure axios BEFORE creating app
axios.defaults.baseURL = import.meta.env.VITE_API_HOST || 'http://localhost:8000'
axios.defaults.headers.common['Accept'] = 'application/json'
axios.defaults.headers.common['Content-Type'] = 'application/json'

// Create Pinia instance
const pinia = createPinia()

// Create Vue app
const app = createApp(App)

// Use Pinia BEFORE router and BEFORE mounting
app.use(pinia)
app.use(router)

// Mount the app
app.mount('#app')
