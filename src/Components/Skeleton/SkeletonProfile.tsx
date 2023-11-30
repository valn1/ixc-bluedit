import React from "react";
import {SkeletonContainer} from "../../Screens/Home/Styles";
import {Skeleton} from "@rneui/themed";
import {ViewHeader} from "./Components/styles";
import {SkeletonPost} from "./Components/SkeletonPost";
import { ScrollView} from "react-native";

const SkeletonProfile: React.FC = () => {
    return (
        <SkeletonContainer>
            <ViewHeader>
                <Skeleton
                    height={150}
                    width={150}
                    skeletonStyle={{
                        borderRadius: 10,
                        backgroundColor: "rgba(255,255,255,0.1)",
                    }}
                    style={{
                        marginLeft: 50,
                        borderRadius: 10,
                        backgroundColor: "rgba(25,0,73,0.5)",
                        marginTop: 20
                    }}/>
                <Skeleton
                    height={70}
                    width={70}
                    skeletonStyle={{
                        borderRadius: 10,
                        backgroundColor: "rgba(255,255,255,0.1)",
                    }}
                    style={{
                        position: "absolute",
                        borderRadius: 10,
                        backgroundColor: "rgba(25,0,73,0.5)",
                        right: 20,
                        top: 40
                    }}/>
            </ViewHeader>
            <Skeleton
                height={90}
                skeletonStyle={{
                    borderRadius: 10,
                    backgroundColor: "rgba(255,255,255,0.1)",
                }}
                style={{
                    borderTopLeftRadius: 50,
                    borderTopRightRadius: 50,
                    backgroundColor: "rgba(25,0,73,0.5)",
                    marginTop: 20
                }}/>
            <ScrollView showsVerticalScrollIndicator={false}>
                <SkeletonPost></SkeletonPost>
                <SkeletonPost></SkeletonPost>
                <SkeletonPost></SkeletonPost>
            </ScrollView>
        </SkeletonContainer>
    )
}

export {SkeletonProfile}
