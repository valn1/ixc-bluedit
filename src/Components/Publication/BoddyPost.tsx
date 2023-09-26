import React from "react";
import {ViewBoddyPost, TitleView, ContentView, TitleText, ContentText} from './styles'
import {dataToPosting} from "./interface";

const BoddyPost: React.FC<dataToPosting> = ({title, text}) => {
    return(
        <ViewBoddyPost>
            <TitleView>
                <TitleText>{title}</TitleText>
            </TitleView>
            <ContentView>
                <ContentText>{text}</ContentText>
            </ContentView>
        </ViewBoddyPost>
    )
}
export {BoddyPost}
