import React, {useContext} from "react";
import {ButtonPost, HeaderContainer, HeaderText, TextInButton} from "./styles";
import {GenericButton} from "./GenericButton";
import {AppContext} from "../../App";
import {Alert} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from "react-native-uuid";

const CreatePostHeader: React.FC = () => {

    const {state, dispatch} = useContext(AppContext)

    const newPublication = {
        title: state.title,
        body: state.body,
        email: "alexandrebeilner10@gmail.com",
        url: state.url,
        id: uuid.v4()
    }
    const storeData = async () => {
        try {
            const asyncPublication = await AsyncStorage.getItem("Publication");
            let asyncPost = [];

            if (asyncPublication !== null) {
                asyncPost = JSON.parse(asyncPublication);
            }

            asyncPost.push(newPublication);

            await AsyncStorage.setItem("Publication", JSON.stringify(asyncPost));
        } catch (error) {
            console.log("Erro ao armazenar dados: ", error);
        }
    };


    const newPost = () => {
        if (state.title) {
            if (state.title && state.body && state.url.length === 0) {
                dispatch({
                    type: "PUBLICACAO",
                    payload: {
                        title: state.title,
                        body: state.body,
                        email: "alexandrebeilner10@gmail.com"
                    }
                })
            }
            if (state.url.length > 0 && state.title) {
                dispatch({
                    type: "ALBUM",
                    payload: {
                        url: state.url,
                        title: state.title,
                        body: state.body,
                        email: "alexandrebeilner10@gmail.com"
                    }
                })
            }
            storeData();
            dispatch({
                type: "CLEAR_POST",
            })
        } else {
            Alert.alert("Erro", "Algum campo não foi preenchido corretamente");
        }
        dispatch({type: "UPDATE"})
    }
    return (
        <HeaderContainer>
            <GenericButton
                onPress={() => {
                }}
                IconsProps={{name: "times", size: 40, color: "white"}}/>
            <HeaderText>Nova Publicação</HeaderText>
            <ButtonPost onPress={newPost}><TextInButton>Publicar</TextInButton></ButtonPost>
        </HeaderContainer>
    )
}

export {CreatePostHeader}
