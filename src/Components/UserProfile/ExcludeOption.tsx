import React, {useContext, useState} from "react";
import {Alert, Modal} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import {ExcludeView, TrashButton, ButtonOptions, CloseModal} from "./styles"
import AsyncStorage from "@react-native-async-storage/async-storage";
import {AppContext} from "../../App";
import {ExcludePosts} from "./interface";
import {useTheme} from "styled-components";
const ExcludeOption: React.FC<ExcludePosts> = ({id}) => {
    const [isVisible, setIsVisible] = useState(false)
    const {dispatch} = useContext(AppContext)
    const theme = useTheme()

    const excludePost = () => {
        const deleteItem = async () => {
            try{
                const getPosts = await AsyncStorage.getItem("Publication");
                const posts = JSON.parse(getPosts as string);

                const postagem = posts.filter((item: any) => item.id != id);
                await AsyncStorage.setItem("Publication", JSON.stringify(postagem))

            }catch (e){
                console.log(e);
            }
            dispatch({type: "UPDATE"});
            setTimeout(() => {setIsVisible(false)}, 1000);
        }

        Alert.alert("Confirmação", "Tem certeza que deseja excluir este post?", [
            {
                text: "não",
                style: "cancel",
                onPress: () => setIsVisible(false)
            },
            {
                text: "sim",
                onPress: deleteItem
            }])
    }

    return (
        <>
            <ButtonOptions
                onPress={() => setIsVisible(!isVisible)}>
                <Icon name={"ellipsis-v"} color={theme.colors.text} size={20}/>
            </ButtonOptions>
            <Modal visible={isVisible} transparent={true} animationType={"slide"}>
                <CloseModal
                    onPress={() => setIsVisible(false)}
                />
                <ExcludeView>
                    <TrashButton onPress={excludePost}>
                        <Icon name={"trash"} color={"#e6a600"} size={60}/>
                    </TrashButton>
                </ExcludeView>
            </Modal>
        </>

    )
}
export {ExcludeOption}
