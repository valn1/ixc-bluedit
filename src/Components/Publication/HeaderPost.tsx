import React from "react";
import {ViewHeaderPost, AvatarImage, TextUserName} from './styles'
import {dataToPosting} from "./interface";
// @ts-ignore
import CryptoJS from "rn-crypto-js"
const HeaderPost: React.FC<dataToPosting>= ({userMail, userName}) => {
    const hash = CryptoJS.MD5(userMail).toString();
    //estou fando um hash em cima do userMail, que me vai retornar-me um codigo que adicionando
    //a url do gravatar retornando asssim a foto de perfil da pessoa.
    return(
        <ViewHeaderPost>
            <AvatarImage
                size={55}
                rounded
                source={{uri: `https://www.gravatar.com/avatar/${hash}`}}
            />
            <TextUserName>{`b/${userName}`}</TextUserName>
        </ViewHeaderPost>
    )
}

export {HeaderPost}
