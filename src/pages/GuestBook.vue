<script setup lang='ts'>
import { storeToRefs } from 'pinia';
import { onMounted, unref, ref } from 'vue';
import TopNav from '../components/Bar/TopBar.vue';
import LoadingVue from '../components/Loading/loading.vue';
import guestBookStore from '../store/GuestBook'
import blogSore from '../store/blog'
import CommentList from '../components/Comment/CommentList.vue';
import CommentForm from '../components/Comment/CommentForm.vue';
import Pagination from '../components/pagination/Index.vue';
import qs from 'qs'
import moment from 'moment';

const guestBook = guestBookStore()
const { title, page, total, guestBookList } = storeToRefs(guestBook)
const blog = blogSore()
const { cityName } = storeToRefs(blog)
const now = new Date
const nowTime = moment(now).format('YYYY-MM-DD HH:mm:ss')
const loading = ref<boolean>(true)

onMounted(() => {
    setTimeout(() => {
        guestBook.getGuestBookList(unref(page))
        loading.value = false
    }, 2000)
})

const getPageNumber = (page: number) => {
    guestBook.getGuestBookList(page)
}

const getFormContent = (val: any) => {
    let postData = qs.stringify({
        name: val["name"],
        content: val["content"],
        city: cityName.value,
        time: nowTime
    })
    guestBook.sendMessage(postData).then(() => {
        guestBook.getGuestBookList(unref(page))
    })
}

</script>
           
<template>
    <div class="container">
        <TopNav :title="title" :left-arrow="false" />
        <CommentForm @commentFormContent="getFormContent" />
        <LoadingVue :isLoading="loading" />
        <CommentList :commentListContent="guestBookList" />
        <Pagination @pageNumber="getPageNumber" :total="total" />
    </div>
</template>
           
<style scoped lang='scss'></style>