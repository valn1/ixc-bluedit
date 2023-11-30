import React from "react";
import {SharedValue} from "react-native-reanimated";

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
    haveData?: boolean
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


export interface HeaderProps{
    userName: string,
    userPhoto: string,
    translateY:  SharedValue<number>
}
