<script setup lang='ts'>
import {ref} from 'vue'
import TopNav from '../components/Bar/TopBar.vue';
const title = ref('说说')
</script>
           
<template>
    <div class="container">
        <TopNav :title="title" :left-arrow="false" />
        
    </div>
</template>
           
<style scoped lang='scss'>

</style>