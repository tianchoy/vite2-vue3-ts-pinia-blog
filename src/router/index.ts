import path from 'path'
import {createRouter,createWebHashHistory,RouteRecordRaw} from 'vue-router'
import Index from '../pages/Index.vue'
const routes:Array<RouteRecordRaw> = [
    {
        path:'/',
        meta:{
            title:'首页',
            requiresAuth:false
        },
        component: Index
    },
    {
        path:'/talk',
        meta:{
            title:'首页',
            requiresAuth:false
        },
        component:()=>import('../pages/Talk.vue')
    },
    {
        path:'/guestbook',
        meta:{
            title:'首页',
            requiresAuth:false
        },
        component:()=>import('../pages/GuestBook.vue')
    },
    {
        path:'/archive',
        meta:{
            title:'首页',
            requiresAuth:false
        },
        component:()=>import('../pages/Archive.vue')
    },
    {
        path:'/about',
        meta:{
            title:'首页',
            requiresAuth:false
        },
        component:()=>import('../pages/About.vue')
    },
    {
        path:'/detail/:id',
        meta:{
            title:'首页',
            requiresAuth:false
        },
        component:()=>import('../pages/Detail.vue')
    }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})



export default router