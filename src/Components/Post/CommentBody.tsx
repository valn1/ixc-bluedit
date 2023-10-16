import React, {useState} from "react";
import {PostData} from "./interface";
import {
    AvatarImage,
    BodyComment,
    CommentView,
    CommentText,
    HeaderComment,
    TextUserName,
    ButtonShowMore,
    TextButton
} from './styles'
// @ts-ignore
import CryptoJS from "rn-crypto-js"
import {FlatList} from "react-native";


const CommentBody: React.FC<PostData> = ({userData, post}) => {
    const [showMore, setShowMore] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const onPress = (index: number) => {
        if (showMore && index === currentIndex) {
            setShowMore(false);
        } else {
            setShowMore(true);
        }
        setCurrentIndex(index);
        console.log(index)
    }
    // console.log("atualizado CommentBody");

    const renderItem = ({item, index}: any) => {
        const hash = CryptoJS.MD5(item.email).toString();
        const textReducer = item.body.slice(0, 97);
        return (
            <CommentView key={item.id}>
                <HeaderComment>
                    <AvatarImage
                        key={hash}
                        size={55}
                        rounded
                        source={{uri: `https://www.gravatar.com/avatar/${hash}`}}
                    />
                    <TextUserName>{`b/${item.email}`}</TextUserName>
                </HeaderComment>
                {item.body.length > 100 && !showMore &&
                    <BodyComment>
                        <CommentText>{textReducer + "..."}</CommentText>
                        <ButtonShowMore onPress={() => onPress(index)}>
                            <TextButton>...Mostar mais</TextButton>
                        </ButtonShowMore>
                    </BodyComment>}
                {item.body.length > 100 && showMore && index === currentIndex &&
                    <BodyComment>
                        <CommentText>{item.body}</CommentText>
                        <ButtonShowMore onPress={() => onPress(index)}>
                            <TextButton>...Mostar menos</TextButton>
                        </ButtonShowMore>
                    </BodyComment>}
                {item.body.length <= 100 &&
                    <BodyComment>
                        <CommentText>{item.body}</CommentText>
                    </BodyComment>}
            </CommentView>
        )
    }

    return (
        <FlatList
            keyExtractor={(item, index) => item.email + index.toString()}
            showsVerticalScrollIndicator={false}
            style={{width: "93%"}}
            data={post?.comments}
            renderItem={renderItem}
        />

    )
}

export {CommentBody}
