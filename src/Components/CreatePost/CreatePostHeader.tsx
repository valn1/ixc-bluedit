import React, {useContext} from "react";
import {ButtonPost, HeaderContainer, HeaderText, TextInButton} from "./styles";
import {AppContext} from "../../App";
import PushNotification from "react-native-push-notification";

const CreatePostHeader: React.FC = () => {

    const {state, dispatch} = useContext(AppContext)

    PushNotification.createChannel(
        {
            channelId: "create-post", // Um ID exclusivo para o canal
            channelName: "Create Post", // Nome amigável do canal
            channelDescription: "Ativado quando posts serem criados", // Descrição do canal
            soundName: "default", // Som da notificação (opcional)
            importance: 4, // Importância da notificação (4 é a importância máxima)
            vibrate: false, // Vibration (opcional)
        },
        _ => {}, // Callback de confirmação
    );

    const pushNotification = () => {
        PushNotification.localNotification({
            channelId: "create-post", // Especifica o canal
            title: "Post realizado com sucesso",
            message: "Estará visivel no seu perfil",
            picture: state.url[0],
        });
    }
    const newPost = () => {
        dispatch({
            type: "NEW_POST"
        })
        pushNotification();
    }
    return (
        <HeaderContainer>
            <HeaderText>Nova Publicação</HeaderText>
            <ButtonPost onPress={newPost}><TextInButton>Publicar</TextInButton></ButtonPost>
        </HeaderContainer>
    )
}

export {CreatePostHeader}
