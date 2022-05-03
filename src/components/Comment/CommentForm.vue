<script setup lang='ts'>
import { reactive, ref, toRefs } from 'vue'
import VeriCode from '../../plugin/veriCode.vue';
import { Dialog } from 'vant';

const emit = defineEmits<{
    (e: 'commentFormContent', values: object): void
}>()
const name = ref('');
const content = ref('');
const onSubmit = (values: object) => {
    emit('commentFormContent', values)

}
const state = reactive({
    vCode: 0,
    uCode: 0
})

const getVeriCode = (val: Number) => {
    state.vCode = Number(val)
}

const getUserCode = (val: Number) => {
    state.uCode = Number(val)
    console.log(val)
}



</script>
           
<template>
    <div>
        <van-form @submit="onSubmit">
            <van-cell-group inset>
                <van-field v-model="name" name="name" label="用户名" :clearable="true" maxlength="10"
                    placeholder="用户名" :rules="[{ required: true, message: '请填写用户名' }]" />
                <van-field v-model="content" name="content" rows="2" :clearable="true" autosize label="感想"
                    type="textarea" maxlength="50" placeholder="不说点啥吗？" show-word-limit
                    :rules="[{ required: true, message: '请填写内容' }]" />
            </van-cell-group>
            <van-divider dashed />
            <!-- <VeriCode @veriCode="getVeriCode" @userCode="getUserCode" /> -->
            <div>
                <van-button round block type="primary" native-type="submit">
                    提交
                </van-button>
            </div>
        </van-form>
    </div>
</template>
           
<style scoped lang='scss'>
</style>