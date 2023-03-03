<script setup lang='ts'>
defineProps<{
    isLoading: boolean
}>()
</script>
           
<template>
    <div v-if="isLoading">
        <van-loading size="24px" vertical>加载中...</van-loading>
    </div>
</template>
           
<style scoped lang='scss'></style>