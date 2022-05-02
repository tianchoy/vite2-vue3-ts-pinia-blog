<script setup lang='ts'>
import TopNav from '../components/TopNav.vue'
import { watchEffect, reactive, ref } from 'vue'
import { useRoute } from 'vue-router'
import { getArtDetail } from '../Api/Index'
const router = useRoute()
console.log(typeof router.params.id)
let id: number = Number(router.params.id)


type ArtDetailData = {
    title: String,
    content: string,
    time: string,
    hits: string,
    art_love: string
}

const state = reactive({
    loading:true,
    //文章详情
    artDetailData: <ArtDetailData>{},
    //获取评论列表
    replyData: [],
    //提交回复数据
    formData: {
        id: '',
        username: '',
        comContent: '',
        city: '',
        time: ''
    },
    //验证码
    verify: "",
})
watchEffect(async () => {
    const res = await getArtDetail(id)
    state.artDetailData = res.data
    state.loading = false
})
</script>
           
<template>
    <div class="container">
        <van-loading size="24px" vertical v-if="state.loading">加载中...</van-loading>
        <TopNav :title="state.artDetailData.title" :left-arrow="true" />
        <div class="content">
            <p class="title">{{ state.artDetailData.title }}</p>
            <p v-html="state.artDetailData.content"></p>
        </div>
    </div>
</template>
           
<style scoped lang='scss'>
</style>