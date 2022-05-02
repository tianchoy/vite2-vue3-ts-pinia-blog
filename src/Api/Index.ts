import instance from "./axios";

export const getIndexList = () => {
    return instance({
        url: 'getIndex.php'
    })
}

export const getArtDetail = (id: number) => {
    return instance({
        url: 'getArtDetail.php?id=' + id
    })
}

export default {
    getIndexList,
    getArtDetail
}