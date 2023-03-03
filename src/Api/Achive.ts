import instance from "./axios";
import pathURL from "./base";

export const getArchiveData = (page: number) => {
    return instance.post(pathURL.getArtList + page)
}

export default {
    getArchiveData
}