

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "./assets/reset.css"
import "./components/HeAdEr.vue"

const app = createApp(App)

app.use(router)

app.mount('#app')
