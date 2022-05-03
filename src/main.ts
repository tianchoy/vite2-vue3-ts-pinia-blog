import { createApp } from 'vue'
import App from './App.vue'
import pinia from './store'
import router from './router'
import 'amfe-flexible/index.js'
import './assets/css/style.css'
import vant from './plugin/vant'


const app = createApp(App)
app.use(pinia)
app.use(router)
app.use(vant)
app.mount('#app')
