import React from "react";
import {ViewPostWhitImage} from "./styles";
import {HeaderPost} from "./HeaderPost";
import {dataToPosting} from "./interface";
import {BoddyPost} from "./BoddyPost";
import {CommentPost} from "./CommentPost";
import {PostImage} from "./PostImage";

const Publication: React.FC<dataToPosting> = ({userMail, userName, title, text, publicationImage}) => {
    return(
        <ViewPostWhitImage>
            <HeaderPost userName={userName} userMail={userMail}></HeaderPost>
            <BoddyPost title={title} text={text}></BoddyPost>
            {publicationImage ? <PostImage publicationImage={publicationImage}></PostImage> : null}
            <CommentPost></CommentPost>
        </ViewPostWhitImage>
    )
}
export {Publication}
