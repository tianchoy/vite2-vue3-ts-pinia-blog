import { defineStore } from 'pinia'
import { ArtDetailData,replyData } from '../plugin/Type'
import { getArtDetail, getNewsReply,postComment,postLikeArt} from '../Api/Detail'

const detailStore = defineStore({
    id: 'detail',
    state: () => ({
        Loading: true,
        artDetailData: <ArtDetailData>{},
        replyData: <replyData>{},
        cityName:''
    }),
    getters: {},
    actions: {
        //获取文章详情
        async getArtDetailData(id: number) {
            const res = await getArtDetail(id)
            this.$state.artDetailData = res.data
            this.$state.Loading = false
        },
        //获取评论详情
        async getArtCommentList(id: number) {
            const res = await getNewsReply(id)
            this.$state.replyData = res.data.data
        },
        //文章点赞
        async postArtLike(id:number){
            const res = await postLikeArt(id)
            console.log(res)
        },
        //发布评论
        async sendArtComment(postData:string){
            const res = await postComment(postData)
        }
    }
})

export default detailStore