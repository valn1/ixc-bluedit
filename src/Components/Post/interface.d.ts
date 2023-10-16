import {Album} from "../Carrousel/interface";

export interface PostData {
    userData?: {
        userId?: number
        userMail?: string,
        userName?: string,
    },
    post?: {
        userId?: number,
        id?: number,
        title?: string,
        body?: string
        comments?: {
            postId: number,
            id: number,
            name: string,
            email: string,
            body: string
        }[]
    },
    album?: Album,
}
