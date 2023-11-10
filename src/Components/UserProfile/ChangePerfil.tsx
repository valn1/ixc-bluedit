import React, {useContext, useState} from "react";
import {Alert, Image, KeyboardAvoidingView, Text, TouchableOpacity} from "react-native";
import {BackButton, InputNewName, ConfirmButton, GenericView, UserImage, ViewImage} from "./styles";
import Icon from "react-native-vector-icons/FontAwesome5";
import {AppContext} from "../../App";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {launchImageLibrary} from "react-native-image-picker";
import {OptionsConfig} from "./interface";

const ChangePerfil: React.FC<OptionsConfig> = ({state, setState}) => {
    const [name, setName] = useState('')
    const [confirmName, setConfirmName] = useState('');
    const [image, setImage] = useState('');
    const [activeButton, setActiveButton] = useState(false)

    const {dispatch} = useContext(AppContext);

    const AlertName = () => {
        return(
            Alert.alert("Erro", "Digite o mesmo nome nos dois campos", [{
                text: 'ok',
                style: "cancel"
            }])
        )
    }


    const changeName = async () => {
        setActiveButton(true);
        if(name){
            if (name === confirmName) {
                await AsyncStorage.setItem("UserName", name);
                dispatch({type: "UPDATE"})
                setState(false)
            } else {
                AlertName();
            }
        }
        if(image){
            await AsyncStorage.setItem("UserPhoto", image);
            if(name && confirmName && confirmName !== name){
                AlertName();
            }else {
                dispatch({type: "UPDATE"})
                setState(false)
            }
        }
        if(!name && !confirmName && !image){
            Alert.alert("Erro", "Nenhum dado foi alterado");
        }
        setActiveButton(false);
    }

    const openGallery = async (): Promise<void> => {
        await launchImageLibrary(
            {
                selectionLimit: 5,
                includeBase64: false,
                mediaType: "photo"
            }, ({assets}) => {
                assets?.map((item) => {
                    setImage(item.uri as string)
                })
            })
    }

    return (
        <KeyboardAvoidingView style={{flex: 1}}>
            <BackButton onPress={() => setState(false)}>
                <Icon name={"times"} size={40} color={"black"}/>
            </BackButton>
            <GenericView>
                <TouchableOpacity onPress={openGallery}>
                    {image ?
                        <ViewImage>
                            <UserImage
                                source={{uri: image}}
                                resizeMode="cover"
                            />
                        </ViewImage>
                        : <Image
                            resizeMode={"contain"}
                            source={{uri: "https://static.thenounproject.com/png/2894391-200.png"}}
                            style={{height: 200, width: 200}}
                        />
                    }
                </TouchableOpacity>
                <Text>Alterar foto de perfil</Text>
            </GenericView>
            <GenericView>
                <InputNewName
                    placeholder={"Digite seu novo nome"}
                    value={name}
                    onChangeText={(value) => setName(value)}
                ></InputNewName>
                <InputNewName
                    placeholder={"Confirme seu novo nome"}
                    value={confirmName}
                    onChangeText={(value) => setConfirmName(value)}
                ></InputNewName>
            </GenericView>
            <GenericView style={{flex: 1}}>
                <ConfirmButton
                    disabled={activeButton}
                    activeOpacity={0.8}
                    onPress={changeName}
                >
                    <Text style={{color: "white", fontSize: 25}}>Confirmar</Text>
                </ConfirmButton>
            </GenericView>
        </KeyboardAvoidingView>
    )
}

export {ChangePerfil}
