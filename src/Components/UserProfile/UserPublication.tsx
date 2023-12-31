import React, {useContext, useEffect, useRef, useState} from "react";
import {
    ImageView,
    PublicationsContainer,
    UpsideContainer,
    UserImageProfile,
    UserNameText,
    ViewHeaderOptions
} from "./styles"
import {HeaderButtons} from "./HeaderButtons";
import {
    FlatList,
    ListRenderItem,
    View,
    Animated
} from "react-native";
import {AppContext} from "../../App";
import {CommentBody} from "../Post/CommentBody";
import {Post} from "../Post";
// @ts-ignore
import CryptoJS from "rn-crypto-js"
import {ExcludeOption} from "./ExcludeOption";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {PostsInProfile} from "./interface";
import {AllConfigOptions} from "./AllConfigOptions";
import AnimatedInterpolation = Animated.AnimatedInterpolation;
import {SkeletonProfile} from "../Skeleton/SkeletonProfile";

const UserPublication: React.FC<PostsInProfile> = ({postagens, haveData, comentario}) => {
    const [posts, setPosts] = useState(true)
    const [commnts, setComments] = useState(false)
    const [albums, setAlbums] = useState(false)
    const [userName, setUserName] = useState('');
    const [userPhoto, setUserPhoto] = useState('');
    const {state} = useContext(AppContext)

    useEffect(() => {
        const storeData = async () => {
            const name = await AsyncStorage.getItem("UserName");
            setUserName(name as string)
            const photo = await AsyncStorage.getItem("UserPhoto");
            setUserPhoto(photo as string)

        }
        storeData();
    }, [state.update])

    const hash = CryptoJS.MD5("alexandrebeilner10@gmail.com").toString();

    const renderComentarios: ListRenderItem<any> | null | undefined = ({item, index}) => {
        return (
            <>
                <CommentBody
                    email={item.email}
                    body={item.body}
                    id={index}/>
            </>
        )
    }

    const renderPublicacao: ListRenderItem<any> | null | undefined = ({item, index}) => {
        if (item.url.length === 0) {
            return (
                <>
                    <Post
                        pressable={false}
                        hideComments={true}
                        post={{title: item.title, body: item.body, id: index, userId: index}}
                        userData={{userId: index, userName: userName ? userName : "Xandão", userMail: item.email}}
                    />
                    <ExcludeOption id={item.id}></ExcludeOption>
                </>
            )
        } else {
            return null
        }
    }
    const renderAlbum: ListRenderItem<any> | null | undefined = ({item, index}) => {
        const photosMap = item.url.map((url: any, index: number) => {
            return {
                albumId: index,
                id: index,
                thumbnailUrl: "N/A",
                title: item.body,
                url: url
            }
        })
        const albumData = {
            AlbumData: {
                id: index,
                photos: photosMap,
                title: item.title,
                userId: index,
            }
        }
        if (item.url.length >= 1) {
            return (
                <>
                    <Post
                        pressable={false}
                        hideComments={true}
                        album={albumData}
                        userData={{userId: index, userName: userName ? userName : "Xandão", userMail: item.email}}
                    ></Post>
                    <ExcludeOption id={item.id}></ExcludeOption>
                </>
            )
        } else {
            return null
        }
    }

    const H_MAX_HEIGHT = 375;


    const scrollOffsetY = useRef(new Animated.Value(0)).current;
    const dinamicSize = (max: number, min: number, distance: number):AnimatedInterpolation<number | string> => {
        return scrollOffsetY.interpolate({
            inputRange: [0, distance],
            outputRange: [max, min],
            extrapolate: "clamp"
        })
    }
    const PostCommentAlbum = (data: any, renderItem: any) => {
        return (
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item, index) => `${index}`}
                onScroll={Animated.event([
                    {nativeEvent: {contentOffset: {y: scrollOffsetY}}},
                ], {useNativeDriver: false})}
                scrollEventThrottle={16}
                contentContainerStyle={{paddingTop: H_MAX_HEIGHT}}
            />
        )
    }

    const changeVisiblePost = (post: boolean, album: boolean, comment: boolean): void => {
        setPosts(post)
        setAlbums(album)
        setComments(comment)
    }

    return (
        <>
            {!haveData
                ? <SkeletonProfile/>
                : <View style={{flex: 1}}>
                <UpsideContainer style={{height: dinamicSize(375, 190, 200)}}>
                    <View style={{flexDirection: "row", justifyContent: "space-between", flex: 1, marginTop: 15}}>
                        <View style={{justifyContent: "center"}}>
                            <ImageView
                                style={{
                                    height: dinamicSize(140, 70, 230),
                                    width: dinamicSize(140, 70, 230)
                                }}>
                                <UserImageProfile
                                    source={{uri: userPhoto ? userPhoto : `https://www.gravatar.com/avatar/${hash}`}}
                                    resizeMode={"cover"}/>
                            </ImageView>
                            <UserNameText
                                style={{fontSize: dinamicSize(30, 15, 150)}}>{userName ? userName : "Xandão"}</UserNameText>
                        </View>
                        <AllConfigOptions></AllConfigOptions>
                    </View>
                    <ViewHeaderOptions>
                        <HeaderButtons
                            onPress={() => changeVisiblePost(true, false, false)}
                            name={"Publicações"}
                            color={posts}/>
                        <HeaderButtons
                            onPress={() => changeVisiblePost(false, false, true)}
                            name={"Comentários"}
                            color={commnts}/>
                        <HeaderButtons
                            onPress={() => changeVisiblePost(false, true, false)}
                            name={"Álbums"}
                            color={albums}/>
                    </ViewHeaderOptions>
                </UpsideContainer>
                <PublicationsContainer>
                    {posts && PostCommentAlbum(postagens, renderPublicacao)}
                    {commnts && PostCommentAlbum(comentario, renderComentarios)}
                    {albums && PostCommentAlbum(postagens, renderAlbum)}
                </PublicationsContainer>
            </View>}
        </>
    )
}

export {UserPublication}
