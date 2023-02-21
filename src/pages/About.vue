<script setup lang='ts'>
import { ref } from 'vue'
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

const {talkState} = storeToRefs(blog)
const {total} = storeToRefs(guestbook)
const {artTotal} = storeToRefs(archive)


</script>
           
<template>
    <div class="container">
        <TopBar :title="title" :left-arrow="false" />
        <div class="userImg">
            <img :src="img" />
        </div>
        <div class="total">
            <span>文章：{{ artTotal }}</span>
            <span>说说：{{ talkState.total }}</span>
            <span>留言：{{ total }}</span>
        </div>
        <div class="tips">
            <div>我是田超,感谢你来到这里!</div>
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
}

.total {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-bottom: 30px;
    font-size: 14px;
    text-align: center;
}
</style>