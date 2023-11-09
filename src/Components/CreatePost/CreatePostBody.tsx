import React, {useCallback, useContext, useState} from "react";
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

const CreatePostBody: React.FC = () => {
    const navigation: NavigationProp<any> = useNavigation();
    const [currentIndex, setCurrentIndex] = useState(0)
    const [showModal, setShowModal] = useState(false)
    const [link, setLink] = useState("");

    const {state, dispatch} = useContext(AppContext)

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
                        onPress={() => excludePhoto(item, index)}
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


    return (
        <BodyContainer>
            <ViewInput>
                <InputTitle
                    value={state.title}
                    onChangeText={(text) => dispatch({
                        type: "DEFINE_TITLE",
                        payload: text
                    })}
                    placeholder={"Título"}
                    placeholderTextColor={state.theme === "dark" ? 'white' : "black"}></InputTitle>
                <InputText
                    multiline={true}
                    numberOfLines={3}
                    value={state.body}
                    onChangeText={(text) => dispatch({
                        type: "DEFINE_BODY",
                        payload: text
                    })}
                    placeholder={"Texto da publicação(opcional)"}
                    placeholderTextColor={state.theme === "dark" ? 'white' : "black"}></InputText>
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
                    IconsProps={{name: "camera", size: 32, color: state.theme === "dark" ? '#baddfd' : "#170044"}}
                    onPress={takePhoto}
                />
                <GenericButton
                    onPress={openGallery}
                    IconsProps={{name: "images", size: 32, color: state.theme === "dark" ? '#baddfd' : "#170044"}}/>
                <GenericButton
                    onPress={() => setShowModal(true)}
                    IconsProps={{name: "link", size: 32, color: state.theme === "dark" ? '#baddfd' : "#170044"}}/>
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
