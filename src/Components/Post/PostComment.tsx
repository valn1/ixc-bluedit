import React, {useState} from "react";
import {
    PostCommentView,
    CommentAmount,
} from './styles'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {TouchableOpacity} from "react-native";
import {PostData} from "./interface";
import {useTheme} from "styled-components";
import {CommentModal} from "./CommentModal";

const PostComment: React.FC<PostData> = ({post, userData}) => {
    const theme = useTheme();
    const [showComments, setShowComments] = useState(false)

    return (
        <PostCommentView key={`${post?.id}-${userData?.userName}`}>
            <CommentAmount>{post?.comments?.length || "0"}</CommentAmount>
            <TouchableOpacity onPress={() => setShowComments(true)}>
                <Icon name={"comment-outline"} size={30} color={theme.colors.text}/>
            </TouchableOpacity>
            <CommentModal visible={showComments} setVisible={setShowComments} post={post} userData={userData}/>
        </PostCommentView>
    )
}
export {PostComment}
