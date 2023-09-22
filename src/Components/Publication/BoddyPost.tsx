import React from "react";
import {ViewBoddyPost, TitleView, ContentView, TitleText, ContentText} from './styles'
import {dataToPosting} from "./interface";

const BoddyPost: React.FC<dataToPosting> = ({title}) => {
    return(
        <ViewBoddyPost>
            <TitleView>
                <TitleText>{title}</TitleText>
            </TitleView>
            <ContentView>
                <ContentText>Teste umTeste umTeste umTeste umTeste umTeste umTeste umTeste umTeste umTeste um</ContentText>
            </ContentView>
        </ViewBoddyPost>
    )
}
export {BoddyPost}
