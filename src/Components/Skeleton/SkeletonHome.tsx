import React from "react";
import {SkeletonContainer} from "../../Screens/Home/Styles"
import {SkeletonPost} from "./Components/SkeletonPost";
import {Skeleton} from "@rneui/themed";
import {Dimensions} from "react-native";

const SkeletonHome: React.FC = () => {
    const {height} = Dimensions.get("window")
    return (
        <SkeletonContainer>
            <Skeleton
                height={height * 0.1}
                skeletonStyle={{
                    backgroundColor: "rgba(255,255,255,0.1)",
                }}
                style={{
                    backgroundColor: "rgba(25,0,73,0.5)",
                    marginTop: 20
                }}></Skeleton>
            <SkeletonPost></SkeletonPost>
            <SkeletonPost></SkeletonPost>
            <SkeletonPost></SkeletonPost>
        </SkeletonContainer>
    )
}

export {SkeletonHome}
