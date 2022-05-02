<script setup lang='ts'>
import {defineProps} from 'vue'
defineProps(['title','leftArrow'])
const onClickLeft = () => history.back();
</script>
           
<template>
    <van-nav-bar fixed :left-arrow = "leftArrow" :placeholder = true @click-left="onClickLeft" :title="title" />
</template>
           
<style scoped lang='scss'>

</style>