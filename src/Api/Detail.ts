import instance from './axios'
import pathURL from './base'

//getNewsDetailData

export const getArtDetail = (id: number) => {
    return instance({
        url: pathURL.getArtDetail + id
    })
}

//get article list data
export const getNewsReply = (id: number) => {
    return instance.post(pathURL.getArtReply + id)
}
//post reply data
export const postComment = (postContent: string) => {
    return instance.post(pathURL.postArtComm, postContent)
}

//post like artcle data

export const postLikeArt = (id: number) => {
    return instance.post(pathURL.ArtLike, id)
}


export default {
    getArtDetail,
    getNewsReply,
    postComment,
    postLikeArt
}