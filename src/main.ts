import { createApp } from 'vue'
import App from './App.vue'
import blogStore from './store'
import router from './router'

const app = createApp(App)
app.use(blogStore)
app.use(router)
app.mount('#app')
