import {defineStore} from 'pinia'

const blogStore = defineStore({
    id:'blog',
    state:()=>({
        title:'小田的博客'
    }),
    getters:{},
    actions:{}
})

export default blogStore