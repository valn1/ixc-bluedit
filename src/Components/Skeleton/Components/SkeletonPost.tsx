import React from "react";
import {Skeleton} from "@rneui/themed";
import {Dimensions, View} from "react-native";

const SkeletonPost: React.FC = () => {
    const {width, height} = Dimensions.get("window")
    return(
        <View style={{marginTop:20}}>
            <Skeleton
                height={height/4} width={width*0.9}
                skeletonStyle={{
                    backgroundColor: "rgba(255,255,255,0.1)",
                    borderRadius: 60,
                }}
                style={{
                    backgroundColor: "rgba(25,0,73,0.5)",
                    borderRadius: 60,
                    marginTop: 20
                }}/>
        </View>
    )
}

export {SkeletonPost}
