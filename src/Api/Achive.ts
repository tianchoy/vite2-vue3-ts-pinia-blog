import instance from "./axios";

export const getArchiveData = (page:number) =>{
    return instance.post('getArtList.php?page='+page)
}

export default{
    getArchiveData
}