import {defineStore} from 'pinia'
import {getArchiveData} from '../Api/Achive'
import {achiveType} from '../plugin/Type'

const achiveStore = defineStore({
    id:'achive',
    state:()=>({
        title:'归档',
        page:1,
        artTotal:'',
        achiveData:[] as Array<achiveType>
    }),
    getters:{},
    actions:{
        async getAchiveList(page:number){
            const res = await getArchiveData(page)
            this.$state.achiveData = res.data.data
            this.$state.artTotal = res.data.total
        }
    }
})

export default achiveStore