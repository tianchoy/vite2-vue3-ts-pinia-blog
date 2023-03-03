import instance from "./axios";
import pathURL from './base'

export const getIndexList = () => {
    return instance({
        url: pathURL.getIndexList
    })
}

export const getTalkData = (page: Number) => {
    return instance.post(pathURL.getSayList + page)
}

export const postTalkLike = (id: string) => {
    return instance.post(pathURL.sayLike + id)
}

export const getCity = () => {
    return instance.get(pathURL.getCityInfo)
}

export const getHitokoto = () => {
    return instance.get(pathURL.getHitokotoInfo)
}


export default {
    getIndexList,
    getTalkData,
    postTalkLike,
    getCity,

}