import React, {useCallback, useState} from "react";
import {
    PostCommentView,
    CommentAmount,
    CommentsContainer,
    HeaderCommentsModalView,
    ExitButton,
    CommentTitle,
    InputComment,
    InputCommentView
} from './styles'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {Modal, TouchableOpacity, KeyboardAvoidingView} from "react-native";
import {PostData} from "./interface";
import {CommentBody} from "./CommentBody";

const PostComment: React.FC<PostData> = ({post, userData}) => {
    const [showComments, setShowComments] = useState(false)
    const [comment, setComment] = useState('');


    const handleCommentChange = (text: string) => {
        console.log(text);
        // setComment(text);
    };

    // console.log("atualizado POstComment");

    return(
        <PostCommentView>
            <CommentAmount>{post?.comments?.length || "0"}</CommentAmount>
            <TouchableOpacity onPress={() => setShowComments(true)}>
                <Icon name={"comment-outline"} size={30} color={"white"}/>
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
                    <CommentBody userData={userData} post={post}></CommentBody>
                    <InputCommentView>
                        <InputComment
                            placeholder={"Escreva um comentario..."}
                            placeholderTextColor={"white"}
                            // onChangeText={handleCommentChange}
                            // value={comment}
                        />
                        <TouchableOpacity onPress={() => {}}>
                            <Icon name={"send"} size={30} color={"white"}/>
                        </TouchableOpacity>
                    </InputCommentView>
                </CommentsContainer>
            </Modal>
        </PostCommentView>
    )
}
export {PostComment}
