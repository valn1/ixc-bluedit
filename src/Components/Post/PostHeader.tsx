import React from "react";
import {PostHeaderView, AvatarImage, TextUserName} from './styles'
import {PostData} from "./interface";
// @ts-ignore
import CryptoJS from "rn-crypto-js"
const PostHeader: React.FC<PostData>= ({userData}) => {
    const hash = CryptoJS.MD5(userData?.userMail).toString();
    //estou fando um hash em cima do userMail, que me vai retornar-me um codigo que adicionando
    //a url do gravatar retornando asssim a foto de perfil da pessoa.
    return(
        <PostHeaderView key={`${Math.random()}-${hash}`}>
            <AvatarImage
                size={55}
                rounded
                source={{uri: `https://www.gravatar.com/avatar/${hash}`}}
            />
            <TextUserName>{`b/${userData?.userName}`}</TextUserName>
        </PostHeaderView>
    )
}

export {PostHeader}
