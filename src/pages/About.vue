<script setup lang='ts'>
import { onBeforeMount, ref } from 'vue'
import blogSore from '../store/blog'
import guestBookStore from '../store/GuestBook'
import achiveStore from '../store/Achive'
import TopBar from '../components/Bar/TopBar.vue';
import img from '../assets/images/my.jpg'
import { storeToRefs } from 'pinia';
const title = ref('关于我')
const blog = blogSore()
const guestbook = guestBookStore()
const archive = achiveStore()

const { hitokotoInfo } = storeToRefs(blog)

onBeforeMount(() => {
    blog.getHitokotoInfo()
})


</script>
           
<template>
    <div class="container">
        <TopBar :title="title" :left-arrow="false" />
        <div class="userImg">
            <img :src="img" />
        </div>
        <div class="tips">
            <p>{{ hitokotoInfo.hitokoto }}</p>
            <p class="creator">From:{{ hitokotoInfo.creator }}</p>
        </div>
    </div>
</template>
           
<style scoped lang='scss'>
.userImg {
    margin: 10% auto;

    img {
        display: block;
        margin: 0 auto;
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }
}

.tips {
    line-height: 80px;
    font-size: 14px;
    text-align: center;
    .creator{
        text-align: right;
        line-height: 0;
    }
}
</style>