import React, {JSX, useEffect, useState} from "react";
import {HomeContainer} from "./Styles";
import {Post} from "../../Components/Post";
import {FindInput} from "../../Components/FindInput";
import {PostData} from "../../Components/Post/interface";
import {ActivityIndicator, FlatList, ListRenderItem} from "react-native";
import {ActivityIndicatorLoading, LoadingContainer} from "./Styles";
import {getUsersAndPosts} from "../../helpers/APIHelperData";

const Home: React.FC = () => {
    const [userAndPost, setUserAndPost] = useState<PostData[]>([]);
    const [visiblePost, setVisiblePost] = useState<PostData[]>([]);
    const [originalPosts, setOriginalPosts] = useState<PostData[]>([]); // Novo estado para os posts originais
    const [howPostsIsVisible, setHowPostsIsVisible] = useState(20);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        const getDataToPosts = async () => {
            const allPosts = await getUsersAndPosts();
            setUserAndPost(allPosts);
            const postVisible = allPosts.slice(howPostsIsVisible - 20, howPostsIsVisible);
            setVisiblePost(postVisible);
        };
        getDataToPosts()
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

    const renderItem: ListRenderItem<PostData> | null | undefined = ({item, index}): JSX.Element => (
        <Post
            key={index + Math.PI}
            userData={item.userData}
            post={item.post}
            album={item.album}
        />
    )


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
                    initialNumToRender={5}
                    keyExtractor={(item, index) => `${item.userData?.userId}-${index}-${item.post?.id || item.album?.AlbumData.id}`}
                    showsVerticalScrollIndicator={false}
                    style={{width: "93%"}}
                    ListFooterComponent={ListFooterComponent}
                    onEndReached={onEndReached}
                    onEndReachedThreshold={0.1}
                    data={visiblePost}
                    renderItem={renderItem}
                />)
                : (<LoadingContainer>
                    <ActivityIndicatorLoading size={60} color={"#e6a600"}/>
                </LoadingContainer>)
            }
        </HomeContainer>
    )
}

export default Home
