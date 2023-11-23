import React, {useContext} from "react";
import {PostHeaderView, AvatarImage, TextUserName, ShowPerfilOpacity} from './styles'
import {PostData} from "./interface";
// @ts-ignore
import CryptoJS from "rn-crypto-js"
import {AppContext} from "../../App";
import {NavigationProp, useNavigation} from "@react-navigation/native";
const PostHeader: React.FC<PostData>= ({userData, pressable}) => {
    const hash = CryptoJS.MD5(userData?.userMail).toString();
    const {dispatch} = useContext(AppContext)

    const navigation: NavigationProp<any> = useNavigation();

    const goToFollower = () =>{
        navigation.navigate("FollowerProfile")
    }
    return(
        <PostHeaderView>
            <ShowPerfilOpacity disabled={!pressable} activeOpacity={0.5} onPress={() => {
                goToFollower();
                dispatch({
                    type: "CURRENT_ID",
                    payload: userData.userId
                })
            }}>
                <AvatarImage
                    source={{uri: `https://www.gravatar.com/avatar/${hash}`}}
                />
                <TextUserName>{`b/${userData?.userName}`}</TextUserName>
            </ShowPerfilOpacity>
        </PostHeaderView>
    )
}

export {PostHeader}
