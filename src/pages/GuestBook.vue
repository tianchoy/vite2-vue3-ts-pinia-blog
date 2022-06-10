<script setup lang='ts'>
import { storeToRefs } from 'pinia';
import { onMounted ,unref} from 'vue';
import TopNav from '../components/Bar/TopBar.vue';
import guestBookStore from '../store/GuestBook'
import blogSore from '../store/blog'
import CommentList from '../components/Comment/CommentList.vue';
import CommentForm from '../components/Comment/CommentForm.vue';
import Pagination from '../components/pagination/Index.vue';
import qs from 'qs'
import moment from 'moment';

const guestBook = guestBookStore()
const {title,page,total,guestBookList} = storeToRefs(guestBook)
const blog = blogSore()
const {cityName} = storeToRefs(blog)
const now = new Date
const nowTime = moment(now).format('YYYY-MM-DD HH:mm:ss')

onMounted(()=>{
    guestBook.getGuestBookList(unref(page))
})

const getPageNumber=(page:number)=>{
    guestBook.getGuestBookList(page)
}

const getFormContent=(val:any)=>{
    let postData = qs.stringify({
        name: val["name"],
        content:val["content"],
        city: cityName.value,
        time: nowTime
    })
    console.log(postData)
    guestBook.sendMessage(postData).then(()=>{
        guestBook.getGuestBookList(unref(page))
    })
}

</script>
           
<template>
    <div class="container">
        <TopNav :title="title" :left-arrow="false" />
        <CommentForm @commentFormContent="getFormContent" />
        <CommentList :commentListContent="guestBookList" />
        <Pagination @pageNumber="getPageNumber" :total= "total" />
    </div>
</template>
           
<style scoped lang='scss'>

</style>