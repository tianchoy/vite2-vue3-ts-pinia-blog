<script setup lang='ts'>
import TopNav from '../components/Bar/TopBar.vue';
import { onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'
import detailStore from '../store/Detail';
import CommentForm from '../components/Comment/CommentForm.vue';
import { storeToRefs } from 'pinia';
import CommentList from '../components/Comment/CommentList.vue';
const detail = detailStore()
const { Loading, artDetailData, replyData ,cityName } = storeToRefs(detail)
const router = useRoute()
let id: number = Number(router.params.id)
onBeforeMount(() => {
    detail.getArtDetailData(id)
    detail.getArtCommentList(id)
})

const getFormContent = (val: object) => {
    console.log(val)
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
                <van-icon name="clock-o" />{{ artDetailData.time }}
            </li>
            <li>
                <van-icon name="like" />{{ artDetailData.art_love }}
            </li>
            <li>
                <van-icon name="eye" />{{ artDetailData.hits }}
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