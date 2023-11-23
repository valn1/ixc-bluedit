import {Album} from "../Carrousel/interface";
import React from "react";

export interface PostData {
    userData: {
        userId?: number
        userMail?: string,
        userName: string,
    },
    post?: {
        userId?: number,
        id?: number,
        title?: string,
        body?: string
        comments?: {
            postId?: number,
            id: number,
            name: string,
            email: string,
            body: string
        }[]
    },
    album?: Album,
    hideComments?: boolean,
    pressable?: boolean,
}

export interface CommentsData{
    email: string
    body: string
    id: number
}

export interface modal{
    visible: boolean,
    setVisible:  React.Dispatch<React.SetStateAction<boolean>>
    post: any,
    userData: any,
}


export interface showPerfil{
    state: boolean,
    setState: React.Dispatch<React.SetStateAction<boolean>>
}
