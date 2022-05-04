<script setup lang='ts'>
import { reactive,ref } from 'vue'

const emit = defineEmits<{
    (e: 'veriCode', values: Number): void
    (e:'userCode', values:Number):void
}>()

const state = reactive({
    vCode: 0,
    userCode:''
})

function rand(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
}
const change = () => {
    state.vCode = Number(rand(1000, 9999))
    emit('veriCode', state.vCode)
}

const uChange=()=>{
    emit('userCode', Number(state.userCode))
}

defineExpose({change})

</script>
           
<template>
    <van-cell-group inset class="veriCode">
        <van-field v-model="state.userCode" @change="uChange" center clearable label="验证码" placeholder="请输入验证码">
            <template #button>
                <van-button size="small" @click="change" type="default">{{ state.vCode == 0 ? '获取验证码' : state.vCode }}</van-button>
            </template>
        </van-field>
    </van-cell-group>
</template>
           
<style scoped lang='scss'>
.veriCode{
    margin-bottom: .5rem;
}
</style>