<script setup lang='ts'>
import TopNav from '../components/Bar/TopBar.vue';
import { onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'
import detailStore from '../store/Detail';
import CommentForm from '../components/Comment/CommentForm.vue';
import { storeToRefs } from 'pinia';
import CommentList from '../components/Comment/CommentList.vue';
import moment from 'moment'
import qs from 'qs'

const detail = detailStore()
const { Loading, artDetailData, replyData } = storeToRefs(detail)
const router = useRoute()
let id: number = Number(router.params.id)
const now = new Date
const nowTime = moment(now).format('YYYY-MM-DD HH:mm:ss')
onBeforeMount(() => {
    detail.getArtDetailData(id)
    detail.getArtCommentList(id)
})
const getFormContent = (val: any) => {

    let postData = qs.stringify({
        id: id,
        name: val["name"],
        content:val["content"],
        city: returnCitySN["cname"],
        time: nowTime
    })
    detail.sendArtComment(postData).then(()=>{
        
        detail.getArtCommentList(id)
    })
}
const artLike=(id:number)=>{
    detail.postArtLike(id)
}
</script>
           
<template>
    <div class="container">
        <van-loading size="24px" vertical v-if="Loading">加载中...</van-loading>
        <TopNav :title="artDetailData.title" :left-arrow="true" />
        <div class="content">
            <p v-html="artDetailData.content"></p>
        </div>
        <van-divider dashed />
        <ul class="other">
            <li>
                <van-icon class="vanIcon" name="clock-o" />{{ artDetailData.time }}
            </li>
            <li>
                <van-icon @click="artLike" class="vanIcon" name="like" />{{ artDetailData.art_love }}
            </li>
            <li>
                <van-icon class="vanIcon" name="eye" />{{ artDetailData.hits }}
            </li>
        </ul>
        <CommentForm @commentFormContent="getFormContent" />
        <CommentList :commentListContent="replyData" />
    </div>
</template>
           
<style scoped lang='scss'>
.content {
    font-size: .4rem;
}

.other {
    display: flex;
    justify-content: space-between;
    font-size: .3rem;
    margin-bottom: .5rem;
}
</style>