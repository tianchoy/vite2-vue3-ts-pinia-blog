<script setup lang='ts'>
import {ref} from 'vue'
import TopBar from '../components/Bar/TopBar.vue';
const title = ref('关于我')

</script>
           
<template>
    <div class="container">
        <TopBar :title="title" :left-arrow="false" />
        <div class="about">
            <p>兜兜转转又回到了前端</p>
            <p>浪费了很多时间，未来认真对待</p>
        </div>
    </div>
</template>
           
<style scoped lang='scss'>
.about{
    text-align: center;
    font-size: .4rem;
}
</style>