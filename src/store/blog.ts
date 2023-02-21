import {defineStore} from 'pinia'
import { getIndexList,getTalkData,postTalkLike,getCity} from '../Api/Index'
import {IndexObj,talkListType} from '../plugin/Type'

const blogStore = defineStore({
    id:'blog',
    state:()=>({
        title:'小田的博客',
        IndexList: [] as Array<IndexObj>,
        Loading:true,
        talkListData:[] as Array<talkListType>,
        talkState:{
            perPage : 1,
            total : ''
        },
        cityName:''
    }),
    getters:{},
    actions:{
        //获取首页数据
        async getIndexData(){
            const res = await getIndexList()
            this.$state.IndexList = res.data.data
            this.$state.Loading = false
        },
        //获取说说数据
        async getTalkList(val:Number){
            const res = await getTalkData(val)
            this.$state.talkListData = res.data.data
            this.$state.talkState.total= res.data.total
        },
        //说说点赞
        async postSayLike(id:string){
            const res = await postTalkLike(id)
        },
        //获取城市
        async getCityInfo(){
            const res = await getCity()
            this.$state.cityName = res.data.cname
            console.log(res.data.cname)
        }
    }

})

export default blogStore