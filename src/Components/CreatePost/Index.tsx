import React from "react";
import {CreatePostContainer} from "./styles"
import {CreatePostHeader} from "./CreatePostHeader";
import {CreatePostBody} from "./CreatePostBody";

const CreatePost: React.FC = () => {
    return(
        <CreatePostContainer>
            <CreatePostHeader></CreatePostHeader>
            <CreatePostBody></CreatePostBody>
        </CreatePostContainer>
    )
}
export {CreatePost}
