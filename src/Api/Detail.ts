import instance from './axios'

//getNewsDetailData

export const getArtDetail = (id: number) => {
    return instance({
        url: 'getArtDetail.php?id=' + id
    })
}

//get article list data
export const getNewsReply = (id:number) =>{
    return instance.post('getArtReply.php?id='+id)
}
//post reply data
export const postComment = (postContent:string) =>{
    return instance.post('postComment.php',postContent)
}

//post like artcle data

export const postLikeArt = (id:number)=>{
    return instance.post('art_like.php',id)
}

export default{
    getArtDetail,
    getNewsReply,
    postComment,
    postLikeArt
}