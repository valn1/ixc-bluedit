import React from "react";
import {ViewBoddyPost, TitleView, ContentView, TitleText, ContentText} from './styles'
import {PostData} from "./interface";

const PostBody: React.FC<PostData> = ({post}) => {
    return(
        <ViewBoddyPost key={`${post?.body}-${post?.title}`}>
            <TitleView>
                <TitleText>{post?.title}</TitleText>
            </TitleView>
            <ContentView>
                <ContentText>{post?.body}</ContentText>
            </ContentView>
        </ViewBoddyPost>
    )
}
export {PostBody}
