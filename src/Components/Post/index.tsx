import React from "react";
import {PostContainer} from "./styles";
import {PostHeader} from "./PostHeader";
import {PostData} from "./interface";
import {PostBody} from "./PostBody";
import {PostComment} from "./PostComment";
import {Carrousel} from "../Carrousel";

const Post: React.FC<PostData> = (
    {
        userData,
        album,
        post,
        hideComments,
        pressable
    }) => {
    let title = album?.AlbumData.photos[0].title


    return (
        <PostContainer>
            <PostHeader
                userData={userData}
                post={post}
                album={album}
                pressable={pressable}
            />
            <PostBody  post={{title: post?.title || album?.AlbumData.title, body:post?.body || title}}
                       userData={userData}/>
            {album?.AlbumData ? <Carrousel AlbumData={album.AlbumData}/> : null}
            {hideComments ? null : <PostComment post={post} userData={userData} album={album}/>}
        </PostContainer>
    )
}
export {Post}
