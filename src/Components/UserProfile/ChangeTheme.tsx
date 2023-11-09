import React, {useContext, useEffect, useState} from "react";
import {
    CloseModal,
    ThemeContainer,
    ThemeOptionsView,
    Theme,
    ThemeName,
    ConfirmChangeTheme,
    View,
    ConfirmText
} from "./styles"
import {AppContext} from "../../App";
import Icon from "react-native-vector-icons/FontAwesome5";
import {Switch} from "@rneui/themed";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ChangeTheme: React.FC = () => {
    const [lightMode, setLightMode] = useState(false)
    const [darkMode, setDarkMode] = useState(true)
    const {dispatch} = useContext(AppContext);

    const changeTheme = async () => {
        if (lightMode && !darkMode) {
            await AsyncStorage.setItem("themeConfig", "light")
            dispatch({
                type: "THEME",
                payload: "light"
            })
        }
        if (!lightMode && darkMode) {
            await AsyncStorage.setItem("themeConfig", "dark")
            dispatch({
                type: "THEME",
                payload: "dark"
            })
        }
        dispatch({
            type: "UPDATE"
        })
        dispatch({
            type: "CHANGE_THEME",
            payload: false
        })
    }

    useEffect(() => {
        const storeData = async () => {
            const theme = await AsyncStorage.getItem("themeConfig");
            if (theme === "light") {
                setDarkMode(false)
                setLightMode(true)
            } else {
                setDarkMode(true)
                setLightMode(false)
            }
        }

        storeData();
    }, [])

    return (
        <ThemeContainer>
            <CloseModal
                activeOpacity={0.9}
                onPress={() => {
                    dispatch({
                        type: "CHANGE_THEME",
                        payload: false
                    })
                }}/>
            <ThemeOptionsView>
                <Theme>
                    <Icon name={"sun"} size={30} color={"white"}/>
                    <ThemeName>Light Mode</ThemeName>
                    <Switch
                        trackColor={{false: "white", true: "rgba(253,225,0,0.4)"}}
                        value={lightMode}
                        onChange={() => {
                            setLightMode(!lightMode)
                            setDarkMode(!darkMode)
                        }} color={"#fde100"}
                    ></Switch>
                </Theme>
                <Theme>
                    <Icon name={"star-and-crescent"} size={30} color={"white"}/>
                    <ThemeName>Dark Mode</ThemeName>
                    <Switch
                        trackColor={{false: "white", true: "rgba(255,255,255,0.4)"}}
                        value={darkMode}
                        onChange={() => {
                            setDarkMode(!darkMode)
                            setLightMode(!lightMode)
                        }}
                        color={"#424242"}
                    ></Switch>
                </Theme>
                <View>
                    <ConfirmChangeTheme onPress={changeTheme}>
                        <ConfirmText>Confirmar</ConfirmText>
                    </ConfirmChangeTheme>
                </View>
            </ThemeOptionsView>
        </ThemeContainer>
    )
}

export {ChangeTheme}
