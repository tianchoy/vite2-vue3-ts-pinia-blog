<script setup lang='ts'>
import { onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia';
import TopNav from '../components/Bar/TopBar.vue';
import LoadingVue from '../components/Loading/loading.vue';
import blogStore from '../store/blog'
const blog = blogStore()
const { title, IndexList, Loading } = storeToRefs(blog)
const loading = ref<boolean>(true)
onMounted(() => {
    blog.getIndexData()
    loading.value = false
})
</script>
<template>
    <TopNav :title="title" :left-arrow="false" />
    <LoadingVue :isLoading="loading" />
    <div class="container">
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