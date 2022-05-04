import instance from "./axios";

export const getGuestBookList = (page:number)=> {
    return instance.get('getGuestBook.php?page='+page)
}

export const postComment = (postContent:string) =>{
    return instance.post('postGuestBook.php',postContent)
} 


export default{
    getGuestBookList,
    postComment
}