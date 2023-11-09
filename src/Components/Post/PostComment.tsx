import React, {useContext, useState} from "react";
import {
    PostCommentView,
    CommentAmount,
    CommentsContainer,
    HeaderCommentsModalView,
    ExitButton,
    CommentTitle,
    InputComment,
    InputCommentView,
    SendCommentButton
} from './styles'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {Modal, TouchableOpacity} from "react-native";
import {PostData} from "./interface";
import {postComment} from "../../helpers/APIHelper";
import {RenderComments} from "./RenderComments";
import {AppContext} from "../../App";
import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from 'react-native-uuid';
import {useTheme} from "styled-components";

const PostComment: React.FC<PostData> = ({post, userData}) => {
    const theme = useTheme();
    const [showComments, setShowComments] = useState(false)
    const [comment, setComment] = useState('');
    const [sendButton, setSendButton] = useState(true);
    const {dispatch} = useContext(AppContext)


    const handleCommentChange = (text: string) => {
        setComment(text);

    };

    const newComment = {
        body: comment,
        email: "alexandrebeilner10@gmail.com",
        id: uuid.v4()
    }
    const storeComment = async () => {
        try {
            const asyncComment = await AsyncStorage.getItem("Comments");
            let asyncComments = [];

            if (asyncComment !== null) {
                asyncComments = JSON.parse(asyncComment);
            }

            asyncComments.push(newComment);

            await AsyncStorage.setItem("Comments", JSON.stringify(asyncComments));

        } catch (error) {
            console.log("Erro ao armazenar dados: ", error);
        }
    };


    const sendComment = async () => {
        dispatch({
            type: "COMENTARIO",
            payload: {
                email: "alexandrebeilner10@gmail.com",
                body: comment
            }
        })
        setSendButton(false);
        const newComment = {
            postId: post?.id,
            body: comment,
            email: "alexandrebeilner10@gmail.com",
            name: "Alexandre"
        }
        await postComment(newComment)
        setComment('');
        if(comment){
            post?.comments?.push({
                postId: post?.id,
                body: comment,
                email: "alexandrebeilner10@gmail.com",
                name: "Alexandre",
                id: post?.comments?.length + 1
            })
        }
        setTimeout(() => {setSendButton(true)}, 1500);
        storeComment();
        dispatch({type: "UPDATE"})
    }


    return (
        <PostCommentView key={`${post?.id}-${userData?.userName}`}>
            <CommentAmount>{post?.comments?.length || "0"}</CommentAmount>
            <TouchableOpacity onPress={() => setShowComments(true)}>
                <Icon name={"comment-outline"} size={30} color={theme.colors.text}/>
            </TouchableOpacity>
            <Modal
                visible={showComments}
                animationType={"slide"}
            >
                <CommentsContainer>
                    <HeaderCommentsModalView>
                        <ExitButton onPress={() => setShowComments(false)}>
                            <Icon name={"close"} size={40} color={"white"}/>
                        </ExitButton>
                        <CommentTitle>{`Comentar no post de b/${userData?.userName}`}</CommentTitle>
                    </HeaderCommentsModalView>
                    <RenderComments post={post} userData={userData}/>
                    <InputCommentView>
                        <InputComment
                            placeholder={"Escreva um comentario..."}
                            placeholderTextColor={theme.colors.text}
                            onChangeText={handleCommentChange}
                            value={comment}
                        />
                        <SendCommentButton onPress={sendComment} disabled={!sendButton}>
                            <Icon name={"send"} size={30} color={"white"}/>
                        </SendCommentButton>
                    </InputCommentView>
                </CommentsContainer>
            </Modal>
        </PostCommentView>
    )
}
export {PostComment}
