<script setup lang='ts'>
import { ref, toRefs } from 'vue'
const currentPage = ref(1);
const props = defineProps({
    total: String,
});
const emit = defineEmits<{
  (e: 'pageNumber', page: number): void
}>()

let { total } = toRefs(props)
const selectPageNumber = (val: number) => {
    emit('pageNumber',val)
}

</script>
           
<template>
    <div>
        <van-pagination v-model="currentPage" :total-items="total" @change="selectPageNumber" :items-per-page="10">
            <template #prev-text>
                <van-icon name="arrow-left" />
            </template>
            <template #next-text>
                <van-icon name="arrow" />
            </template>
            <template #page="{ text }">{{ text }}</template>
        </van-pagination>
    </div>
</template>
           
<style scoped lang='scss'>
</style>