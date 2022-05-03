import {defineStore} from 'pinia'
import { getIndexList } from '../Api/Index'
import {IndexObj} from '../plugin/Type'

const blogStore = defineStore({
    id:'blog',
    state:()=>({
        title:'小田的博客',
        IndexList: [] as Array<IndexObj>,
        Loading:true
    }),
    getters:{},
    actions:{
        //获取首页数据
        async getIndexData(){
            const res = await getIndexList()
            this.$state.IndexList = res.data.data
            this.$state.Loading = false
        }
        //获取说说数据
        
    }

})

export default blogStore