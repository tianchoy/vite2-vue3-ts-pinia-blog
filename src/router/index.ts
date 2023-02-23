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
            title:'说说',
            requiresAuth:false
        },
        component:()=>import('../pages/Talk.vue')
    },
    {
        path:'/guestbook',
        meta:{
            title:'留言板',
            requiresAuth:false
        },
        component:()=>import('../pages/GuestBook.vue')
    },
    {
        path:'/archive',
        meta:{
            title:'归档',
            requiresAuth:false
        },
        component:()=>import('../pages/Archive.vue')
    },
    {
        path:'/about',
        meta:{
            title:'关于我',
            requiresAuth:false
        },
        component:()=>import('../pages/About.vue')
    },
    {
        path:'/detail/:id',
        meta:{
            title:'文章详情',
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