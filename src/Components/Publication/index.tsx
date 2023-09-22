import React from "react";
import {ViewPost} from "./styles";
import {HeaderPost} from "./HeaderPost";
import {dataToPosting} from "./interface";
import {BoddyPost} from "./BoddyPost";
import {CommentPost} from "./CommentPost";

const Publication: React.FC<dataToPosting> = ({userMail, userName, title}) => {
    return(
        <ViewPost>
            <HeaderPost userName={userName} userMail={userMail}></HeaderPost>
            <BoddyPost title={title}></BoddyPost>
            <CommentPost></CommentPost>
        </ViewPost>
    )

}
export {Publication}
