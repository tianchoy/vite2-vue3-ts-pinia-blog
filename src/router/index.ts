import {createRouter,createWebHashHistory,RouteRecordRaw} from 'vue-router'
import Index from '../pages/Index.vue'
const routes:Array<RouteRecordRaw> = [
    {
        path:'/',
        component: Index
    }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})



export default router