import instance from "./axios";
import pathURL from "./base";

export const getGuestBookList = (page: number) => {
    return instance.get(pathURL.getGuestBookList + page)
}

export const postComment = (postContent: string) => {
    return instance.post(pathURL.postGuestBook, postContent)
}


export default {
    getGuestBookList,
    postComment
}