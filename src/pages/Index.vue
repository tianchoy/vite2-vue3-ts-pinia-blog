<script setup lang='ts'>
import { onMounted} from 'vue'
import { storeToRefs } from 'pinia';
import TopNav from '../components/Bar/TopBar.vue';
import blogStore from '../store/blog'
const blog = blogStore()
const { title,IndexList,Loading} = storeToRefs(blog)
onMounted(()=>{
    blog.getIndexData()
})
</script>
<template>
    <div class="container">
        <TopNav :title="title" :left-arrow="false" />
        <van-loading size="24px" vertical v-if="Loading">加载中...</van-loading>
        <ul class="index-box">
            <li v-for="item in IndexList" :key="item.id">
                <router-link :to="{ path: `/detail/${item.id}` }" class="title">
                    <h4>{{ item.title }}</h4>
                </router-link>
                <p class="van-multi-ellipsis--l3" v-html="item.content"></p>
            </li>
        </ul>
    </div>
</template>
<style scoped lang='scss'>
.index-box {
    li {
        font-size: .4rem;
        text-align: left;
    }
}
</style>