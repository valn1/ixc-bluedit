import React from "react";
import {ViewCommentPost, HowManyComments} from './styles'
import Icon from "react-native-vector-icons/Octicons";
import {TouchableOpacity} from "react-native";

const CommentPost: React.FC = () => {
    return(
        <ViewCommentPost>
            <HowManyComments>xx</HowManyComments>
            <TouchableOpacity>
                <Icon name={"comment"} size={30} color={"white"}/>
            </TouchableOpacity>
        </ViewCommentPost>
    )
}
export {CommentPost}
