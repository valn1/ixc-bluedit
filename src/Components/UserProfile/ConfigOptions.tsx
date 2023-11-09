import React, {useContext, useState} from "react";
import {
    CloseModal,
    ConfigContainer,
    GenericOpacitiOptions,
    OpenConfigButton,
    OptionIcon,
    OptionsName,
    OptionsView,
} from './styles'
import Icon from "react-native-vector-icons/FontAwesome5";
import {Modal} from "react-native";
import {AppContext} from "../../App";
import {ChangePerfil} from "./ChangePerfil";
import {ChangeTheme} from "./ChangeTheme";

const ConfigOptions: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    const {state, dispatch} = useContext(AppContext)

    return (
        <ConfigContainer>
            <OpenConfigButton
                onPress={() => setIsVisible(!isVisible)}>
                <Icon name={"bars"} size={35} color={"white"}/>
            </OpenConfigButton>
            <Modal visible={isVisible} transparent={true} animationType={"fade"}>
                <CloseModal onPress={() => setIsVisible(false)} activeOpacity={0.9}/>
                <OptionsView>
                    <GenericOpacitiOptions
                        onPress={() => {
                            dispatch({
                                type: "CHANGE_NAME",
                                payload: !state.perfilOptions.changeName
                            })
                            setIsVisible(false);
                        }
                        }
                        activeOpacity={0.5}>
                        <OptionIcon name={"at"}/>
                        <OptionsName>Alterar Dados do Perfil</OptionsName>
                    </GenericOpacitiOptions>
                    <GenericOpacitiOptions
                        onPress={() => {
                            dispatch({
                                type: "CHANGE_THEME",
                                payload: !state.perfilOptions.changeTheme
                            })
                            setIsVisible(false);
                        }}
                        activeOpacity={0.5}>
                        <OptionIcon name={"palette"}/>
                        <OptionsName>Alterar Tema</OptionsName>
                    </GenericOpacitiOptions>
                </OptionsView>
            </Modal>
            <Modal
                animationType={"slide"}
                visible={state.perfilOptions.changeName}>
                <ChangePerfil/>
            </Modal>
            <Modal
                transparent={true}
                animationType={"slide"}
                visible={state.perfilOptions.changeTheme}>
                <ChangeTheme/>
            </Modal>
        </ConfigContainer>
    )
}

export {ConfigOptions}
