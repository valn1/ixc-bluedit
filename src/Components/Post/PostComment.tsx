import React from "react";
import {PostCommentView, CommentAmount} from './styles'
import Icon from "react-native-vector-icons/Octicons";
import {TouchableOpacity} from "react-native";

const PostComment: React.FC = () => {
    return(
        <PostCommentView>
            <CommentAmount>xx</CommentAmount>
            <TouchableOpacity>
                <Icon name={"comment"} size={30} color={"white"}/>
            </TouchableOpacity>
        </PostCommentView>
    )
}
export {PostComment}
