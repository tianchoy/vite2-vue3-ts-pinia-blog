<script setup lang='ts'>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
const active = ref(0);
const router = useRouter()
const onChange = (index: number) => {
    switch (index) {
        case 1:
            router.push('/talk')
            break
        case 2:
            router.push('/guestbook')
            break
        case 3:
            router.push('/archive')
            break
        case 4:
            router.push('/about')
            break
        default:
            router.push('/')
            break
    }
}
</script>
           
<template>
    <van-tabbar v-model="active" @change="onChange">
        <van-tabbar-item icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item icon="chat-o">说说</van-tabbar-item>
        <van-tabbar-item icon="records">留言板</van-tabbar-item>
        <van-tabbar-item icon="description">归档</van-tabbar-item>
        <van-tabbar-item icon="manager-o">关于我</van-tabbar-item>
    </van-tabbar>
</template>
