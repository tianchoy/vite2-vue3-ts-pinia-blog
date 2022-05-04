import { type } from "os";

export type IndexObj = {
    id: number,
    title: string,
    content: string,
    hits: number,
    time: string,
}
export type ArtDetailData = {
    title: String,
    content: string,
    time: string,
    hits: string,
    art_love: string
}

export type replyData = {
    r_id: string;
    art_id: string;
    name: string;
    pl_time: string;
    pl_content: string;
    city: string;
    repl_content?: any;
    repl_time?: any;
}

export type artPostType = {
    name: string,
    content: string
}

export type talkListType = {
    id: string,
    content: string,
    time: string,
    zan: string
}

export type guestBookType = {
    id: string;
    name: string;
    content: string;
    city: string;
    time: string;
    huifu_content: string;
    huifu_time: string;
}

export type achiveType={
    id:string,
    title:string,
}