import React from "react";
import {PostCommentView, CommentAmount} from './styles'
import Icon from "react-native-vector-icons/Octicons";
import {TouchableOpacity} from "react-native";
import {PostData} from "./interface";

const PostComment: React.FC<PostData> = ({post}) => {
    return(
        <PostCommentView>
            <CommentAmount>{post?.comments?.length || "0"}</CommentAmount>
            <TouchableOpacity>
                <Icon name={"comment"} size={30} color={"white"}/>
            </TouchableOpacity>
        </PostCommentView>
    )
}
export {PostComment}
