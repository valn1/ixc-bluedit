import {Album} from "../Carrousel/interface";

export interface PostData {
    userMail?: string,
    userName?: string,
    post?: {
        userId?: number,
        id?: number,
        title?: string,
        body?: string
    },
    album?: Album
}
