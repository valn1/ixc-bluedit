import React, {JSX, useEffect, useState} from "react";
import {HomeContainer} from "./Styles";
import {Post} from "../../Components/Post";
import {FindInput} from "../../Components/FindInput";
import {get} from "../../helpers/APIHelper";
import {PostData} from "../../Components/Post/interface";
import {ActivityIndicator, FlatList, ListRenderItem} from "react-native";
import {ActivityIndicatorLoading, LoadingContainer} from "./Styles";

const Home: React.FC = () => {
    const [userAndPost, setUserAndPost] = useState<PostData[]>([]);
    const [visiblePost, setVisiblePost] = useState<PostData[]>([]);
    const [originalPosts, setOriginalPosts] = useState<PostData[]>([]); // Novo estado para os posts originais
    const [howPostsIsVisible, setHowPostsIsVisible] = useState(20);
    const [searchText, setSearchText] = useState('');
    const [albumDrawn] = useState<PostData[]>([]);

    // Deverá ser criada e estilizada a tela de início, e em seguida, feita a
    // integração com a api para listar 20 publicações por vez. Ao chegar no fim da lista, deverá mostrar mais 20.
    // A cada 4 publicações, uma será um álbum ou foto aleatória.

    useEffect(() => {
        const setUser = async () => {
            const users = await get("users");
            const allPosts: PostData[] = [];
            const albuns = await get("albums");
            const allAlbumsId = albuns.map((item: any) => item.id)

            for (const user of users) {
                const userPost = await get(`posts`, {key: `?userId=${user.id}`});
                const userPostsData =  await Promise.all(userPost.map(async (item: any): Promise<PostData> => {
                    const comments = await get("comments", {key: `?postId=${item.id}`});
                    return {
                        userData: {
                            userId: user.id,
                            userName: user.username,
                            userMail: user.email,
                        },
                        post: {
                            userId: item.userId,
                            id: item.id,
                            title: item.title,
                            body: item.body,
                            comments: [...comments]
                        },
                    };
                }))

                allPosts.push(...userPostsData);
            }
            while (albumDrawn.length < 25% allPosts.length){
                const randomAlbum = Math.floor(Math.random() * allAlbumsId.length);
                let albumOrPhoto = Math.random();
                const userAlbum = await get(`albums`, {key: `/${albuns[randomAlbum].id}`});
                const whatUser = await get("users", {key: `/${userAlbum.userId}`});
                if(albumOrPhoto >= 0.5){
                    const albumPhoto = await get("photos", {key: `?albumId=${userAlbum.id}`});
                    const userAlbumData: PostData[] = [{
                        userData: {
                            userId: whatUser.id,
                            userName: whatUser.username,
                            userMail: whatUser.email,
                        },
                        album: {
                            AlbumData: {
                                userId: whatUser.id,
                                title: userAlbum.title,
                                id: userAlbum.id,
                                photos: [...albumPhoto]
                            }
                        }
                    }]

                    albumDrawn.push(...userAlbumData);
                }else {
                    const randomPhoto = Math.floor(Math.random() * 5000)
                    const photo = await get("photos", {key: `/${randomPhoto}`})
                    const userPhotoData: PostData[] = [{
                        userData: {
                            userId: whatUser.id,
                            userName: whatUser.username,
                            userMail: whatUser.email,
                        },
                        album: {
                            AlbumData: {
                                userId: whatUser.id,
                                title: photo.title,
                                id: photo.id,
                                photos: [photo]
                            }
                        }
                    }]
                    albumDrawn.push(...userPhotoData);
                }
            }

            let count = 4
            for (const album of albumDrawn){
                allPosts.splice(count, 0, album);
                count = count +5;
            }
            setUserAndPost(allPosts);
            const postVisible = allPosts.slice(howPostsIsVisible - 20, howPostsIsVisible);
            setVisiblePost(postVisible);
        };
        setUser()
    }, []);

    useEffect(() => {
        const postVisible: PostData[] = userAndPost.slice(howPostsIsVisible - 20, howPostsIsVisible);
        setVisiblePost(prevState => [...prevState, ...postVisible]);
        setOriginalPosts(visiblePost);
    }, [howPostsIsVisible])

    useEffect(() => {
        if (!searchText) {
            setVisiblePost(originalPosts);
        } else {
            setVisiblePost(
                userAndPost.filter(
                    (item) =>
                        item.userData?.userName?.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
                )
            );
        }
    }, [searchText]);
    const renderItem: ListRenderItem<PostData> | null | undefined = ({item}): JSX.Element => {
        return (
            <Post
                key={Math.random()}
                userData={item.userData}
                post={item.post}
                album={item.album}
            />
        )
    }
    const onEndReached = () => {
        if (howPostsIsVisible < userAndPost.length && !searchText) {
            setHowPostsIsVisible(howPostsIsVisible + 20);
        }
    }

    const ListFooterComponent = () => {
        if (visiblePost.length !== userAndPost.length && !searchText) {
            return (
                <ActivityIndicator size={40} color={"#e6a600"}/>
            )
        } else {
            return null
        }
    }

    return (
        <HomeContainer>
            <FindInput
                value={searchText}
                onChangeText={(text: string) => setSearchText(text)}/>
            {userAndPost.length > 0
                ? (<FlatList
                    showsVerticalScrollIndicator={false}
                    style={{width: "93%"}}
                    ListFooterComponent={ListFooterComponent}
                    onEndReached={onEndReached}
                    onEndReachedThreshold={0.1}
                    data={visiblePost}
                    renderItem={renderItem}/>)
                : (<LoadingContainer>
                    <ActivityIndicatorLoading size={60} color={"#e6a600"}/>
                </LoadingContainer>)
            }
        </HomeContainer>
    )
}

export default Home
