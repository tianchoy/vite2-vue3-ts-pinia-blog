<script setup lang='ts'>
import { toRefs } from 'vue'
const props = defineProps({
    commentListContent: Object
})
const { commentListContent } = toRefs(props)

</script>
           
<template>
    <div class="comment-list">
        <div class="tit">评论：</div>
        <div class="content-box" v-for="item in commentListContent" :key="item.id">
            <div class="com-title">
                <span class="NickName">
                    <van-icon name="friends" />
                    {{ item.name }}
                    <span class="city" v-if="item.city != ''">
                        <van-icon name="location-o" />
                        {{ item.city }}
                    </span>
                </span>
                <span class="sendTime">{{ item.pl_time }}</span>
            </div>
            <div class="com-content">{{ item.pl_content }}</div>
        </div>
    </div>
</template>
           
<style scoped lang='scss'>
.comment-list {
    margin-top: 1rem;

    .tit {
        font-size: .5rem;
        color: #999;
    }

    .content-box {
        border: 1px solid #dcdfe6;
        border-radius: 5px;
        margin: .4rem 0;
        padding: .4rem;

        .com-title {
            border-bottom: 1px dotted #ccc;
            padding-bottom: .3rem;
            margin-bottom: .3rem;
            display: flex;
            justify-content: space-between;

            .NickName {
                font-size: .5rem;
                float: left;
                color: #555;

                .city {
                    font-size: .1rem;
                    margin-left: .2rem;
                }
            }

            .sendTime {
                font-size: .2rem;
                float: right;
            }
        }

        .com-content {
            font-size: .4rem;
            color: #666
        }
    }
}
</style>