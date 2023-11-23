import {PostData} from "../Post/interface";
import {Animated} from "react-native";
import React from "react";

export interface Follower{
    postagens: PostData[],
    heigthView: Animated.AnimatedInterpolation<number | string>,
    heigthImage: Animated.AnimatedInterpolation<number | string>,
    heigthText: Animated.AnimatedInterpolation<number | string>,
    setPost:  React.Dispatch<React.SetStateAction<boolean>>,
    setAlbum:  React.Dispatch<React.SetStateAction<boolean>>,
    post: boolean,
    album: boolean,
}
