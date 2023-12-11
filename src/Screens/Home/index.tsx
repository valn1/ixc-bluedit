import React, {JSX, useEffect, useState} from "react";
import {HomeContainer} from "./Styles";
import {Post} from "../../Components/Post";
import {FindInput} from "../../Components/FindInput";
import {PostData} from "../../Components/Post/interface";
import {ActivityIndicator} from "react-native";
import {getUsersAndPosts} from "../../helpers/APIHelperData";
import {FlashList} from "@shopify/flash-list";
import {SkeletonHome} from "../../Components/Skeleton/SkeletonHome";

const Home: React.FC = () => {
    const [userAndPost, setUserAndPost] = useState<PostData[]>([]);
    const [originalPosts, setOriginalPosts] = useState<PostData[]>([]); // Novo estado para os posts originais
    const [searchText, setSearchText] = useState('');
    const [postTest, setPostTest] = useState(1)

    useEffect(() => {
        const getDataToPosts = async () => {
            const allPosts = await getUsersAndPosts(postTest);
            setUserAndPost(prevState => [...prevState, ...allPosts]);
            setOriginalPosts(prevState => [...prevState, ...allPosts]);
        };
        getDataToPosts()
    }, [postTest]);


    useEffect(() => {
        if (!searchText) {
            setUserAndPost(originalPosts);
        } else {
            setUserAndPost(
                userAndPost.filter(
                    (item) =>
                        item.userData?.userName?.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
                )
            );
        }
    }, [searchText]);

    const renderItem = ({item}: any): JSX.Element => {
        return (
            <Post
                pressable={true}
                userData={item.userData}
                post={item.post}
                album={item.album}
                hideComments={!!item.album?.AlbumData}
            />
        )
    }

    const onEndReached = () => {
        if (!searchText) {
            setPostTest(postTest + 1);
        }
    }


    const ListFooterComponent = () => {
        if (!searchText) {
            return (
                <ActivityIndicator size={40} color={"#e6a600"}/>
            )
        } else {
            return null
        }
    }

    return (
        <HomeContainer>
            {userAndPost.length > 0
                ? (<>
                        <FindInput
                            value={searchText}
                            onChangeText={(text: string) => setSearchText(text)}
                        />
                        <FlashList
                            estimatedItemSize={300}
                            keyboardShouldPersistTaps={"handled"}
                            keyExtractor={(item, index) => index.toString()}
                            showsVerticalScrollIndicator={false}
                            ListFooterComponent={ListFooterComponent}
                            onEndReached={onEndReached}
                            onEndReachedThreshold={0.5}
                            data={userAndPost}
                            renderItem={renderItem}
                            contentContainerStyle={{paddingHorizontal: 15}}
                        />
                    </>
                )
                : (<SkeletonHome></SkeletonHome>)
            }
        </HomeContainer>
    )
}

export {Home}
