import React, {useContext} from "react";
import {ButtonPost, HeaderContainer, HeaderText, TextInButton} from "./styles";
import {GenericButton} from "./GenericButton";
import {AppContext} from "../../App";
import {Alert, AppState} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from "react-native-uuid";
import PushNotification from "react-native-push-notification";
import {NavigationProp, useNavigation} from "@react-navigation/native";
import PushNotificationIOS from "@react-native-community/push-notification-ios";


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
        created => {}, // Callback de confirmação
    );


    const pushNotification = () => {
        PushNotification.localNotification({
            channelId: "create-post", // Especifica o canal
            title: "Post realizado com sucesso",
            message: "Estará visivel no seu perfil",
            picture: state.url[0],
        });
    }


    const navigation: NavigationProp<any> = useNavigation();

    const navigateToPerfil = () => {
        navigation.navigate("Perfil");
    }

    // PushNotification.configure({
    //     // (required) Called when a remote is received or opened, or local notification is opened
    //     onNotification: function (notification) {
    //         notification.finish(PushNotificationIOS.FetchResult.NoData);
    //     },
    //     // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
    //     onRegistrationError: function(err) {
    //         console.error(err.message, err);
    //     },
    //
    //     popInitialNotification: true,
    //     requestPermissions: true,
    // });
    //
    //
    // PushNotification.configure({
    //     onNotification: notification => {
    //         if(notification.userInteraction){
    //             navigateToPerfil();
    //         }
    //     }
    // })





    const newPost = () => {
        dispatch({
            type: "NEW_POST"
        })
    }
    return (
        <HeaderContainer>
            <HeaderText>Nova Publicação</HeaderText>
            <ButtonPost onPress={newPost}><TextInButton>Publicar</TextInButton></ButtonPost>
        </HeaderContainer>
    )
}

export {CreatePostHeader}
