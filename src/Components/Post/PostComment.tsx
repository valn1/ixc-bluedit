import React, {useState} from "react";
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

const PostComment: React.FC<PostData> = ({post, userData}) => {
    const [showComments, setShowComments] = useState(false)
    const [comment, setComment] = useState('');
    const [sendButton, setSendButton] = useState(true);

    const handleCommentChange = (text: string) => {
        setComment(text);
    };

    const sendComment = async () => {
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
    }


    return (
        <PostCommentView key={`${post?.id}-${userData?.userName}`}>
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
                    <RenderComments post={post} userData={userData}/>
                    <InputCommentView>
                        <InputComment
                            placeholder={"Escreva um comentario..."}
                            placeholderTextColor={"white"}
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
