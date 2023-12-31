import React, {useCallback, useContext, useEffect, useState} from "react";
import {
    BodyContainer,
    InputTitle,
    InputText,
    ViewInput,
    AllOptionsPost,
    ImageContainer,
    ImageInGallery,
    ImageInCamera,
    PaginationView,
    PhotoPagination,
    InputLink,
    LinkView,
    LeaveInputLink,
    ButtonView
} from "./styles"
import {GenericButton} from "./GenericButton";
import {NavigationProp, useNavigation} from "@react-navigation/native";
import {AppContext} from "../../App";
import {
    Alert,
    FlatList,
    ListRenderItem,
    Modal,
    NativeScrollEvent,
    NativeSyntheticEvent, TouchableOpacity,
} from "react-native";
import {launchImageLibrary} from 'react-native-image-picker';
import Icon from "react-native-vector-icons/FontAwesome5";
import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from "react-native-uuid";
import {useTheme} from "styled-components";

const CreatePostBody: React.FC = () => {
    const navigation: NavigationProp<any> = useNavigation();
    const [currentIndex, setCurrentIndex] = useState(0)
    const [showModal, setShowModal] = useState(false)
    const [link, setLink] = useState("");
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const {state, dispatch} = useContext(AppContext)

    const theme = useTheme();

    const takePhoto = () => {
        navigation.navigate("TakePhoto");
    }

    const excludePhoto = (item: string) => {
        Alert.alert("Confirmação", "Tem certeza que deseja excluir esta imagem?", [
            {
                text: "não",
                style: "cancel"
            }, {
                text: "sim",
                onPress: () => {
                    dispatch({
                        type: "EXCLUDE_PHOTO",
                        payload: item
                    })
                }
            }])
    }

    const renderItem: ListRenderItem<any> | null | undefined = ({item, index}) => {
        return (
            <ImageContainer key={item + index}>
                {item.startsWith("http") || item.startsWith("file://") ? (
                    <ImageInGallery source={{uri: item}} resizeMode="contain"/>
                ) : (
                    <ImageInCamera source={{uri: `file://${item}`}} resizeMode="contain"/>
                )}
                <ButtonView>
                    <TouchableOpacity
                        onPress={() => excludePhoto(item)}
                    ><Icon name={"times"} size={35} color={"white"}/></TouchableOpacity>
                </ButtonView>
            </ImageContainer>
        );
    };
    const HeadetComponente = () => {
        return (
            <PaginationView>
                <PhotoPagination>{`${currentIndex + 1}/${state.url.length}`}</PhotoPagination>
            </PaginationView>
        )
    }
    const onScroll = useCallback((event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const slideSize = event.nativeEvent.layoutMeasurement.width;
        const index = event.nativeEvent.contentOffset.x / slideSize;
        const roundIndex = Math.round(index);
        setCurrentIndex(roundIndex);
    }, []);

    const openGallery = async () => {
        await launchImageLibrary(
            {
                selectionLimit: 5,
                includeBase64: false,
                mediaType: "photo"
            }, ({assets}) => {
                assets?.map((item) => {
                    dispatch({
                        type: "DEFINE_URL",
                        payload: item.uri
                    })
                })
            })
    }

    const getImageWithLink = () => {
        if (link) {
            dispatch({
                type: "DEFINE_URL",
                payload: link
            })
            setShowModal(false);
            setLink('');
        } else {
            setShowModal(false);
        }
    }

    const newPublication = {
        title: title,
        body: body,
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

            asyncPost.unshift(newPublication);

            await AsyncStorage.setItem("Publication", JSON.stringify(asyncPost));

        } catch (error) {
            console.log("Erro ao armazenar dados: ", error);
        }
    };

    useEffect(() => {
        if (title) {
            if (title && body && state.url.length === 0) {
                dispatch({
                    type: "PUBLICACAO",
                    payload: {
                        title: title,
                        body: body,
                        email: "alexandrebeilner10@gmail.com"
                    }
                })
            }
            if (state.url.length > 0 && title) {
                dispatch({
                    type: "ALBUM",
                    payload: {
                        url: state.url,
                        title: title,
                        body: body,
                        email: "alexandrebeilner10@gmail.com"
                    }
                })
            }
            storeData();
            dispatch({
                type: "CLEAR_POST",
            })
            setBody("");
            setTitle("");
        }
        dispatch({type: "UPDATE"})
    }, [state.newPost])


    return (
        <BodyContainer>
            <ViewInput>
                <InputTitle
                    value={title}
                    onChangeText={(text) => setTitle(text)}
                    placeholder={"Título"}
                    placeholderTextColor={theme.colors.text}></InputTitle>
                <InputText
                    multiline={true}
                    numberOfLines={3}
                    value={body}
                    onChangeText={(text) => setBody(text)}
                    placeholder={"Texto da publicação(opcional)"}
                    placeholderTextColor={theme.colors.text}></InputText>
                {state.url.length > 1 && <HeadetComponente></HeadetComponente>}
            </ViewInput>
            <FlatList
                onScroll={onScroll}
                key={state.url.length}
                keyExtractor={(item, index) => item + index}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={state.url}
                renderItem={renderItem}/>
            <AllOptionsPost>
                <GenericButton
                    IconsProps={{name: "camera", size: 26, color: theme.colors.iconCreate}}
                    onPress={takePhoto}
                />
                <GenericButton
                    onPress={openGallery}
                    IconsProps={{name: "images", size: 26, color: theme.colors.iconCreate}}/>
                <GenericButton
                    onPress={() => setShowModal(true)}
                    IconsProps={{name: "link", size: 26, color: theme.colors.iconCreate}}/>
                <Modal
                    visible={showModal}
                    transparent={true}
                    animationType={"slide"}
                >
                    <LeaveInputLink
                        activeOpacity={0}
                        onPress={() => {
                            setShowModal(false)
                            setLink("");
                        }}/>
                    <LinkView>
                        <InputLink
                            autoFocus={true}
                            value={link}
                            onChangeText={(text) => setLink(text)}
                        ></InputLink>
                        <GenericButton
                            IconsProps={{name: "paper-plane", color: "white", size: 40}}
                            onPress={getImageWithLink}/>
                    </LinkView>
                </Modal>
            </AllOptionsPost>
        </BodyContainer>

    )
}

export {CreatePostBody}
