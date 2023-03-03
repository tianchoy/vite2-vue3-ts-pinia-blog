import { defineStore } from 'pinia'
import { getGuestBookList, postComment } from '../Api/GuestBook'
import { guestBookType } from '../plugin/Type'

const guestBookStore = defineStore({
    id: 'guestBook',
    state: () => ({
        title: '留言板',
        page: 1,
        total: '',
        guestBookList: [] as Array<guestBookType>
    }),
    getters: {},
    actions: {
        async getGuestBookList(page: number) {
            const res = await getGuestBookList(page)
            this.$state.guestBookList = res.data.data
            this.$state.total = res.data.total
        },

        //发布留言
        async sendMessage(postContent: string) {
            await postComment(postContent)
        },
    }
})

export default guestBookStore