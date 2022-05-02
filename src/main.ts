import { createApp } from 'vue'
import App from './App.vue'
import pinia from './store'
import router from './router'
import 'amfe-flexible/index.js'
import './assets/css/style.css'
import { Tabbar, TabbarItem,Button,Col, Row ,NavBar,Loading} from 'vant';


const app = createApp(App)
app.use(pinia)
app.use(router)
app.use(Button)
app.use(Tabbar)
app.use(TabbarItem)
app.use(Col)
app.use(Row)
app.use(NavBar)
app.use(Loading)
app.mount('#app')
