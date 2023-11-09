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
import {AsyncPosts} from "./interface";
import {ConfigOptions} from "./ConfigOptions";

const UserPublication: React.FC<AsyncPosts> = ({postagens, comentario}) => {
    const [posts, setPosts] = useState(true)
    const [commnts, setComments] = useState(false)
    const [albums, setAlbums] = useState(false)
    const [userName, setUserName] = useState('');
    const {state} = useContext(AppContext)

    useEffect(() => {
        const storeData = async () => {
            const name = await AsyncStorage.getItem("UserName");
            setUserName(name as string)
            const photo = await AsyncStorage.getItem("UserPhoto");
            setUserPhoto(photo as string)
        }
        storeData();
    }, [state.perfilOptions.changeName])

    const hash = CryptoJS.MD5("alexandrebeilner10@gmail.com").toString();

    const onPressPost = () => {
        setPosts(true)
        setAlbums(false)
        setComments(false)
    }
    const onPressComment = () => {
        setComments(true)
        setPosts(false)
        setAlbums(false)
    }
    const onPressAlbum = () => {
        setAlbums(true)
        setPosts(false)
        setComments(false)
    }
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
    const [userPhoto, setUserPhoto] = useState('');

    const H_MAX_HEIGHT = 375;
    const H_MIN_HEIGHT = 175;
    const H_SCROLL_DISTANCE = H_MAX_HEIGHT - H_MIN_HEIGHT;

    const scrollOffsetY = useRef(new Animated.Value(0)).current;

    const headerScrollHeight = scrollOffsetY.interpolate({
        inputRange: [0, H_SCROLL_DISTANCE],
        outputRange: [H_MAX_HEIGHT, H_MIN_HEIGHT],
        extrapolate: 'clamp'
    })
    const imageScale = scrollOffsetY.interpolate({
        inputRange: [0, 230],
        outputRange: [140, 70],
        extrapolate: 'clamp'
    })
    const textSize = scrollOffsetY.interpolate({
        inputRange: [0, 150],
        outputRange: [30, 15],
        extrapolate: 'clamp'
    })

    return (
        <View style={{flex: 1}}>
            <UpsideContainer style={{height: headerScrollHeight}}>
                <View style={{flexDirection: "row", justifyContent: "space-between", flex: 1}}>
                    <View style={{justifyContent: "center"}}>
                        <ImageView style={{height: imageScale, width: imageScale}}>
                            <UserImageProfile
                                source={{uri: userPhoto ? userPhoto : `https://www.gravatar.com/avatar/${hash}`}}
                                resizeMode={"cover"}/>
                        </ImageView>
                        <UserNameText style={{fontSize: textSize}}>{userName ? userName : "Xandão"}</UserNameText>
                    </View>
                    <ConfigOptions></ConfigOptions>
                </View>
                <ViewHeaderOptions>
                    <HeaderButtons onPress={onPressPost} name={"Publicações"} color={posts ? "#cb9412" : "#91a9d0"}/>
                    <HeaderButtons onPress={onPressComment} name={"Comentários"}
                                   color={commnts ? "#cb9412" : "#91a9d0"}/>
                    <HeaderButtons onPress={onPressAlbum} name={"Álbums"} color={albums ? "#cb9412" : "#91a9d0"}/>
                </ViewHeaderOptions>
            </UpsideContainer>
            <PublicationsContainer>
                {posts &&
                    <FlatList
                        data={postagens}
                        renderItem={renderPublicacao}
                        keyExtractor={(item, index) => index + item.title}
                        onScroll={Animated.event([
                            {nativeEvent: {contentOffset: {y: scrollOffsetY}}},
                        ], {useNativeDriver: false})}
                        scrollEventThrottle={16}
                        contentContainerStyle={{paddingTop: H_MAX_HEIGHT}}
                    />
                }
                {commnts &&
                    <FlatList
                        keyExtractor={(item, index) => index + item.body}
                        data={comentario}
                        renderItem={renderComentarios}
                        onScroll={Animated.event([
                            {nativeEvent: {contentOffset: {y: scrollOffsetY}}},
                        ], {useNativeDriver: false})}
                        scrollEventThrottle={16}
                        contentContainerStyle={{paddingTop: H_MAX_HEIGHT}}
                    />
                }
                {albums &&
                    <FlatList
                        data={postagens}
                        renderItem={renderAlbum}
                        keyExtractor={(item, index) => index + item.title}
                        onScroll={Animated.event([
                            {nativeEvent: {contentOffset: {y: scrollOffsetY}}},
                        ], {useNativeDriver: false})}
                        scrollEventThrottle={16}
                        contentContainerStyle={{paddingTop: H_MAX_HEIGHT}}
                    />
                }
            </PublicationsContainer>
        </View>
    )
}

export {UserPublication}
