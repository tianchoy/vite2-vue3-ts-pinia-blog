import instance from "./axios";

export const getIndexList = () => {
    return instance({
        url: 'getIndex.php'
    })
}


export default {
    getIndexList
}