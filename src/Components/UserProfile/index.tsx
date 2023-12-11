import React from "react";
import {UserProfileContainer} from "./styles"
import {UserPublication} from "./UserPublication";

import {PostsInProfile} from "./interface";

const UserProfile: React.FC<PostsInProfile> = ({postagens, comentario, haveData}) => {
    return (
        <UserProfileContainer>
            <UserPublication
                haveData={haveData}
                postagens={postagens}
                comentario={comentario}/>
        </UserProfileContainer>
    )
}

export {UserProfile}
