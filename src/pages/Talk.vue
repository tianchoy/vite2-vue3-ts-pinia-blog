<script setup lang='ts'>
import { storeToRefs } from 'pinia';
import {onMounted, ref} from 'vue'
import TopNav from '../components/Bar/TopBar.vue';
import blogStore from '../store/blog'
import Pagination from '../components/pagination/Index.vue';
const talk = blogStore()
const { talkListData ,talkState } = storeToRefs(talk)
const title = ref('说说')

onMounted(()=>{
    talk.getTalkList(1)
})

const getPageNumber=(val:number)=>{
    talk.getTalkList(val)
}

const clickSayLike=(id:string)=>{
    console.log(id)
    talk.postSayLike(id)
}


</script>
           
<template>
    <div class="container">
        <TopNav :title="title"  :left-arrow="false" />
        <ul class="talkList">
            <li class="talk-item" v-for="item in talkListData" :key="item.id">
                <div class="talk-title">
                    <span class="time">{{item.time}}</span>
                    <span class="talk-like" @click="clickSayLike(item.id)"><van-icon class="vanIcon" name="like-o" />{{item.zan}}</span>
                </div>
                <div class="talk-item-data" v-html="item.content"></div>
            </li>
        </ul>
        <Pagination @pageNumber="getPageNumber" :total="talkState.total" />
    </div>
</template>
           
<style scoped lang='scss'>
.talk-item{
    border:1px solid #dcdfe6;
    padding:0 .5rem;
    border-radius: 5px;
    margin-bottom: 1rem;
    font-size: .4rem;
    color: #666;
    padding-top: .5rem;
    .talk-title{
        display: flex;
        justify-content: space-between;
        .time{
            font-size: .3rem;
        }
    }
}
</style>