import React from "react";
import {PostContainer} from "./styles";
import {PostHeader} from "./PostHeader";
import {PostData} from "./interface";
import {PostBody} from "./PostBody";
import {PostComment} from "./PostComment";
import {Carrousel} from "../Carrousel";

const Post: React.FC<PostData> = ({userData, album, post}) => {
    let title = album?.AlbumData.photos[0].title
    // console.log("Index atualizado Post");
    return (
        <PostContainer>
            <PostHeader userData={userData}></PostHeader>
            <PostBody  post={{title: post?.title || album?.AlbumData.title, body:post?.body || title}}></PostBody>
            {album?.AlbumData ? <Carrousel AlbumData={album.AlbumData}/> : null}
            <PostComment post={post} userData={userData}></PostComment>
        </PostContainer>
    )
}
export {Post}
