import React from "react";
import {HeaderContainer, ImageView, BoxName, BackButton, Avatar, ShapeImage, PostsView} from "./styles"
import Icon from "react-native-vector-icons/FontAwesome6";
import {Follower} from "./interface";
// @ts-ignore
import CryptoJS from "rn-crypto-js"
import {NavigationProp, useNavigation} from "@react-navigation/native";
import {useTheme} from "styled-components";
import {HeaderButtons} from "../UserProfile/HeaderButtons";

const Header: React.FC<Follower> = (
    {
        postagens,
        heigthView,
        heigthText,
        heigthImage,
        setPost,
        setAlbum,
        post,
        album
    }) => {
    const hash = CryptoJS.MD5(postagens[0]?.userData.userMail).toString();
    const navigation: NavigationProp<any> = useNavigation();
    const theme = useTheme();

    const goToHome = () => {
        navigation.navigate("ScreenInicio");
    }

    const changeVisiblePost = (post: boolean, album: boolean): void => {
        setPost(post)
        setAlbum(album)
    }

    return (
        <HeaderContainer style={{height: heigthView}}>
            <BackButton
                onPress={() => {
                    goToHome();
                }}>
                <Icon name={"arrow-left-long"} color={theme.colors.text} size={40}/>
            </BackButton>
            <ImageView>
                <ShapeImage style={{height: heigthImage, width: heigthImage}}>
                    <Avatar resizeMode={"contain"} source={{uri: `https://www.gravatar.com/avatar/${hash}`}}/>
                </ShapeImage>
                <BoxName style={{fontSize: heigthText}}>{postagens[0].userData.userName}</BoxName>
            </ImageView>
            <PostsView>
                <HeaderButtons
                    name={"Publicações"} color={post}
                    onPress={() => changeVisiblePost(true, false)}/>
                <HeaderButtons
                    name={"Álbums"} color={album}
                    onPress={() => changeVisiblePost(false, true)}/>
            </PostsView>
        </HeaderContainer>
    )
}

export {Header};
