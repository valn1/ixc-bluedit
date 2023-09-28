import React from "react";
import {PostContainer} from "./styles";
import {PostHeader} from "./PostHeader";
import {PostData} from "./interface";
import {PostBody} from "./PostBody";
import {PostComment} from "./PostComment";
import {Carrousel} from "../Carrousel";

const Post: React.FC<PostData> = ({userMail, userName, album, post}) => {
    return(
        <PostContainer>
            <PostHeader userName={userName} userMail={userMail}></PostHeader>
            <PostBody  post={{title: post?.title, body:post?.body}}></PostBody>
            {album?.AlbumData ? <Carrousel AlbumData={album.AlbumData}/> : null}
            <PostComment></PostComment>
        </PostContainer>
    )
}
export {Post}
