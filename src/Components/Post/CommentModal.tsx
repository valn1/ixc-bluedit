import React, {useContext, useState} from "react";
import {modal} from "./interface";
import {
    CommentsContainer,
    CommentTitle,
    ExitButton,
    HeaderCommentsModalView,
    InputComment,
    InputCommentView, SendCommentButton
} from "./styles";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {RenderComments} from "./RenderComments";
import {Modal} from "react-native";
import uuid from "react-native-uuid";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {AppContext} from "../../App";
import {useTheme} from "styled-components";

const CommentModal: React.FC<modal> = ({visible, setVisible, userData, post}) => {
    const [comment, setComment] = useState('');
    const [sendButton, setSendButton] = useState(true);
    const {dispatch} = useContext(AppContext)
    const theme = useTheme();


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
            asyncComments.unshift(newComment);
            await AsyncStorage.setItem("Comments", JSON.stringify(asyncComments));
        } catch (error) {
            console.log("Erro ao armazenar dados: ", error);
        }
    };

    const sendComment = async () => {
        setSendButton(false);
        dispatch({
            type: "COMENTARIO",
            payload: {
                email: "alexandrebeilner10@gmail.com",
                body: comment
            }
        })
        setComment('');
        if(comment){
            post?.comments?.unshift({
                postId: post?.id,
                body: comment,
                email: "alexandrebeilner10@gmail.com",
                name: "Alexandre",
                id: post?.comments?.length + 1
            })
        }
        storeComment();
        setTimeout(() => {setSendButton(true)}, 1500);
        dispatch({type: "UPDATE"})
    }

    return(
        <Modal
            visible={visible}
            animationType={"slide"}
        >
            <CommentsContainer>
                <HeaderCommentsModalView>
                    <ExitButton onPress={() => setVisible(false)}>
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
    )
}

export {CommentModal}
