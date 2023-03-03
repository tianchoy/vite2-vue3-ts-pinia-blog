<script setup lang='ts'>
import { storeToRefs } from 'pinia';
import { onMounted, unref } from 'vue-demi';
import TopBar from '../components/Bar/TopBar.vue';
import achiveStore from '../store/Achive'
import Pagination from '../components/pagination/Index.vue';
const achive = achiveStore()
const { title, page, artTotal, achiveData } = storeToRefs(achive)

onMounted(() => {
    achive.getAchiveList(unref(page))
})

const getPageNumber = (page: number) => {
    achive.getAchiveList(unref(page))
}

</script>
           
<template>
    <div class="container">
        <TopBar :title="title" :left-arrow="false" />
        <ul class="achiveBox">
            <li class="achive-item" v-for="item in achiveData" :key="item.id">
                <span class="item-title">{{ item.title }}</span>
                <router-link :to="{ path: `/detail/${item.id}` }" class="title">
                    <van-button type="primary">查看</van-button>
                </router-link>
            </li>
        </ul>
        <Pagination @pageNumber="getPageNumber" :total="artTotal" />
    </div>
</template>
           
<style scoped lang='scss'>
.achiveBox {
    margin-bottom: .5rem;
}

.achive-item {
    display: flex;
    justify-content: space-between;
    margin: .5rem 0;
    border-bottom: 1px solid #dcdfe6;
    padding-bottom: .5rem;
    font-size: .4rem;
    align-items: center;
}
</style>