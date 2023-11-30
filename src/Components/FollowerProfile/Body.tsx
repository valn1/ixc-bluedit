import React, {useRef, useState} from "react";
import {BodyContainer, ContentView} from "./styles"
import {Animated} from "react-native";
import {Post} from "../Post";
import {Header} from "./Header";
import {PostData} from "../Post/interface";
import {FlashList} from "@shopify/flash-list";

const Body: React.FC<{ postagens: PostData[], albums: PostData[] }> = ({postagens, albums}) => {
    const [post, setPost] = useState(true)
    const [album, setAlbum] = useState(false)

    const H_MAX_HEIGHT = 325;


    const scrollOffsetY = useRef(new Animated.Value(0)).current;
    const dinamicSize = (max: number, min: number, distance: number) => {
        return scrollOffsetY.interpolate({
            inputRange: [0, distance],
            outputRange: [max, min],
            extrapolate: "clamp"
        })
    }
    const renderPosts = ({item}: {item: PostData}) => {
        return (
            <Post
                pressable={false}
                hideComments={false}
                post={{
                    title: item.post?.title,
                    body: item.post?.body,
                    id: item.post?.id,
                    userId: item.post?.userId,
                    comments: item.post?.comments
                }}
                userData={{
                    userId: item.userData.userId,
                    userName: item.userData.userName,
                    userMail: item.userData.userMail
                }}
            />
        )
    }
    const renderAlbuns = ({item} : {item: PostData}) => {
        return (
            <Post
                pressable={false}
                hideComments={true}
                album={item.album}
                userData={{
                    userId: item.userData.userId,
                    userName: item.userData.userName,
                    userMail: item.userData.userMail
                }}
            />
        )
    }
    return (
        <BodyContainer>
            <Header
                post={post}
                album={album}
                setAlbum={setAlbum}
                setPost={setPost}
                postagens={postagens}
                heigthView={dinamicSize(330, 190, 150)}
                heigthImage={dinamicSize(150, 75, 140)}
                heigthText={dinamicSize(30, 0, 100)}
            />
            <ContentView>
                {post && <FlashList
                    estimatedItemSize={200}
                    showsVerticalScrollIndicator={false}
                    data={postagens}
                    renderItem={renderPosts}
                    keyExtractor={(item, index) => `${index}`}
                    onScroll={Animated.event([
                        {nativeEvent: {contentOffset: {y: scrollOffsetY}}},
                    ], {useNativeDriver: false})}
                    scrollEventThrottle={16}
                    contentContainerStyle={{
                        paddingTop: H_MAX_HEIGHT,
                        paddingHorizontal: 15
                    }}
                />}
                {album && <FlashList
                    estimatedItemSize={600}
                    showsVerticalScrollIndicator={false}
                    data={albums}
                    renderItem={renderAlbuns}
                    keyExtractor={(item, index) => `${index}`}
                    onScroll={Animated.event([
                        {nativeEvent: {contentOffset: {y: scrollOffsetY}}},
                    ], {useNativeDriver: false})}
                    scrollEventThrottle={16}
                    contentContainerStyle={{
                        paddingTop: H_MAX_HEIGHT,
                        paddingHorizontal: 15
                    }}
                />}
            </ContentView>
        </BodyContainer>
    )
}

export {Body}
