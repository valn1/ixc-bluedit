import React, {useState} from "react";
import {CommentsData} from "./interface";
import {
    AvatarImage,
    BodyComment,
    CommentView,
    CommentText,
    HeaderComment,
    TextUserName,
    ButtonShowMore,
    TextButton,
    LittleBodyComment
} from './styles'
// @ts-ignore
import CryptoJS from "rn-crypto-js"


const CommentBody: React.FC<CommentsData> = ({body, email, id}) => {

    const [showMore, setShowMore] = useState(false);
    const onPress = () => {
        setShowMore(!showMore);
    }

    const hash = CryptoJS.MD5(email).toString();
    const textReducer = body.slice(0, 97)

    return (
        <CommentView key={id}>
            <HeaderComment>
                <AvatarImage
                    size={55}
                    rounded
                    source={{uri: `https://www.gravatar.com/avatar/${hash}`}}
                />
                <TextUserName>{`b/${email}`}</TextUserName>
            </HeaderComment>
            {body.length < 100 ?
                <LittleBodyComment>
                    <CommentText>{body}</CommentText>
                </LittleBodyComment>
                : <>
                    <BodyComment>
                        <CommentText>{showMore ? body : textReducer + "..."}</CommentText>
                    </BodyComment>
                    <ButtonShowMore onPress={onPress}>
                        <TextButton>{showMore ? "...ver menos" : "...ver mais"}</TextButton>
                    </ButtonShowMore>
                </>
            }
        </CommentView>
    )
}
export {CommentBody}
