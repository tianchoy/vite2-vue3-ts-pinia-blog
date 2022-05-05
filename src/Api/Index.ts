import instance from "./axios";

export const getIndexList = () => {
    return instance({
        url: 'getIndex.php'
    })
}

export const getTalkData=(page:Number)=>{
    return instance.post('getSay.php?page='+page)
}

export const postTalkLike = (id:string)=>{
    console.log(id)
    return instance.post('say_like.php?id='+id)
}

export const getCity = ()=>{
    return instance.get('getCity.php')
}


export default {
    getIndexList,
    getTalkData,
    postTalkLike,
    getCity
}