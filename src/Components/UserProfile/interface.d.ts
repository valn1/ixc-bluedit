import React from "react";

export interface ButtonProps {
    name: string
    color: boolean
    onPress: () => void
}

export interface PostsInProfile {
    postagens: {
        userName?: string,
        title: string,
        body: string,
        email: string
        url: string[]
    }[],
    comentario: {
        body: string,
        email: string,
    }[],
}

export interface ExcludePosts{
    id: string
}


export interface OptionButton{
    iconName: string,
    buttonName: string,
    onPress?: () => {}
}

export interface Config{
    onPress: () => void,
    iconName: string,
    placeholder: string,
}

export interface OptionsConfig{
    state: boolean,
    setState: React.Dispatch<React.SetStateAction<boolean>>,
}
