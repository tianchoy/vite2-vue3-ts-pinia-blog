<script setup lang='ts'>
import { reactive, onMounted,ref } from 'vue'
import { storeToRefs } from 'pinia';
import TopNav from '../components/TopNav.vue';
import blogStore from '../store/blog'
import { getIndexList } from '../Api/Index'
const blog = blogStore()
const { title } = storeToRefs(blog)

type obj = {
    id: number,
    title: string,
    content: string,
    hits: number,
    time: string
}

const state = reactive({
    newsData: [] as Array<obj>,
    loading: true
})
//  获取新闻列表数据
const getNewsData = async () => {
    const res = await getIndexList()
    state.newsData = res.data.data
    state.loading = false
}

onMounted(() => {
    getNewsData()
})

</script>
<template>
    <div class="container">
        <TopNav :title="title" :left-arrow="false" />
        <van-loading size="24px" vertical v-if="state.loading">加载中...</van-loading>
        <ul class="index-box">
            <li v-for="item in state.newsData" :key="item.id">
                <router-link :to="{ path: `/detail/${item.id}` }" class="title">
                    <h4>{{ item.title }}</h4>
                </router-link>
                <p v-html="item.content"></p>
            </li>
        </ul>
    </div>
</template>
<style scoped lang='scss'>
.index-box {
    li {
        font-size: .4rem;
        text-align: center;
    }
}

pre {
    white-space: pre-wrap;
    word-wrap: break-word;
}
</style>