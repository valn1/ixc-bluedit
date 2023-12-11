import React, {useState} from "react";
import {
    CloseModal,
    ConfigContainer,
    OpenConfigButton,
    OptionsView,
} from './styles'
import Icon from "react-native-vector-icons/FontAwesome5";
import {Modal} from "react-native";
import {ChangePerfil} from "./ChangePerfil";
import {ChangeTheme} from "./ChangeTheme";
import {ConfigOption} from "./ConfigOption";

const AllConfigOptions: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [changeTheme, setChangeTheme] = useState(false)
    const [changeName, setChangeName] = useState(false)

    return (
        <ConfigContainer>
            <OpenConfigButton
                onPress={() => setIsVisible(!isVisible)}>
                <Icon name={"bars"} size={35} color={"white"}/>
            </OpenConfigButton>
            <Modal visible={isVisible} transparent={true} animationType={"fade"}>
                <CloseModal onPress={() => setIsVisible(false)} activeOpacity={0.9}/>
                <OptionsView>
                    <ConfigOption onPress={() => setChangeName(!changeName)}
                                  iconName={"at"} placeholder={"Alterar Dados do Perfil"}/>
                    <ConfigOption onPress={() => {
                        setChangeTheme(!changeTheme)
                        setIsVisible(false);}}
                                  iconName={"palette"} placeholder={"Alterar Tema"}/>
                </OptionsView>
            </Modal>
            <Modal
                animationType={"slide"}
                visible={changeName}>
                <ChangePerfil state={changeName} setState={setChangeName}/>
            </Modal>
            <Modal
                transparent={true}
                animationType={"slide"}
                visible={changeTheme}>
                <ChangeTheme state={changeTheme} setState={setChangeTheme}/>
            </Modal>
        </ConfigContainer>
    )
}

export {AllConfigOptions}
