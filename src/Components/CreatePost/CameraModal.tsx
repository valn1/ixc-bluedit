import React, {useContext, useEffect, useRef, useState} from "react";
import {Camera, useCameraDevice, useCameraPermission} from "react-native-vision-camera";
import {Alert, StyleSheet, Text} from "react-native";
import {
    HeaderCamera,
    TakePhotoButton,
    TakePhotoView,
    TakedPhotoView,
    PrintPhoto,
    DeleteOrSaveView,
    BigButton,
} from "./styles";
import {GenericButton} from "./GenericButton";
import {NavigationProp, useNavigation} from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";
import {AppContext} from "../../App";

const CameraModal: React.FC = () => {
    const {dispatch} = useContext(AppContext)
    const [imageSource, setImageSource] = useState('')
    const [camera, setCamera] = useState(true);

    const {hasPermission, requestPermission} = useCameraPermission()
    const device = useCameraDevice(camera ? "back" : "front")
    const cameraRef = useRef<Camera>(null);


    useEffect(() => {
        const openCamera = async () => {
            if (!hasPermission) {
                await requestPermission();
            }
        }
        openCamera();
    }, [hasPermission, requestPermission, device])

    const onPress = () => {
        setCamera(!camera);
    }

    const capturePhoto = async () => {
        if (cameraRef.current !== null) {
            const photo = await cameraRef.current.takePhoto({});
            setImageSource(photo.path);
        }
    }
    if (device == null) return <Text>Camera não encontrada</Text>

    const navigation: NavigationProp<any> = useNavigation();
    const navigateToCriar = () => {
        navigation.navigate("ScreenCriar");
    }

    const deletePhoto = () => {
        Alert.alert("Excluir foto", "Tem certeza que deseja excluir a foto permanentemente?", [
            {
                text: "não",
                onPress: () => {
                },
                style: "cancel"
            }, {
                text: "sim",
                onPress: () => setImageSource('')
            }
        ])
    }
    const savePhoto = () => {
        Alert.alert("Salvar foto", "Tem certeza que deseja salvar esta foto?", [
            {
                text: "não",
                onPress: () => {
                },
                style: "cancel"
            }, {
                text: "sim",
                onPress: () => {
                    dispatch({
                        type: "DEFINE_URL",
                        payload: imageSource
                    })
                    navigateToCriar();
                    setImageSource("");
                }
            }
        ])
    }

    return (
        imageSource === '' ? <>
                <Camera
                    ref={cameraRef}
                    style={StyleSheet.absoluteFill}
                    device={device}
                    isActive={true}
                    photo={true}
                />
                <HeaderCamera>
                    <GenericButton
                        onPress={navigateToCriar}
                        IconsProps={{name: "times", size: 40, color: "#e6a600"}}/>
                    <GenericButton IconsProps={{name: "camera", size: 40, color: "#fff"}}
                                   onPress={onPress}/>
                </HeaderCamera>
                <TakePhotoView>
                    <TakePhotoButton onPress={capturePhoto}></TakePhotoButton>
                </TakePhotoView>
            </> :
            <TakedPhotoView>
                <PrintPhoto resizeMode={"contain"} source={{uri: `file://${imageSource}`}}/>
                <DeleteOrSaveView>
                    <BigButton onPress={deletePhoto}>
                        <Icon name={"trash-2"} size={70} color={"white"}/>
                    </BigButton>
                    <BigButton onPress={savePhoto}>
                        <Icon name={"check"} size={70} color={"white"}/>
                    </BigButton>
                </DeleteOrSaveView>
            </TakedPhotoView>
    )
}
export {CameraModal}
