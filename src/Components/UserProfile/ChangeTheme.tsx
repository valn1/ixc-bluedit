import React, {useContext, useEffect, useState} from "react";
import {
    CloseModal,
    ThemeContainer,
    ThemeOptionsView,
    Theme,
    ThemeName,
    ConfirmChangeTheme,
    View,
    ConfirmText,
    Loading
} from "./styles"
import {AppContext} from "../../App";
import Icon from "react-native-vector-icons/FontAwesome5";
import {Switch} from "@rneui/themed";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {OptionsConfig} from "./interface";
import {ActivityIndicator} from "react-native";

const ChangeTheme: React.FC<OptionsConfig> = ({state, setState}) => {
    const [lightMode, setLightMode] = useState(false)
    const [darkMode, setDarkMode] = useState(true)
    const [button, setButton] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [currentTheme, setCurrentTheme] = useState('')
    const {dispatch} = useContext(AppContext);

    useEffect(() => {
        const getTheme = async () => {
            const theme = await AsyncStorage.getItem("themeConfig");
            setCurrentTheme(theme as string);
        }

        getTheme();
    }, [])

    const changeTheme = async () => {
        setIsLoading(true)
        setButton(true)
        if (lightMode && !darkMode && currentTheme !== "light") {
            await AsyncStorage.setItem("themeConfig", "light")
            dispatch({
                type: "UPDATE"
            })
            setTimeout(() => {
                setState(false)
                setIsLoading(false)
            }, 4000)
        }
        else if (!lightMode && darkMode && currentTheme !== "dark") {
            await AsyncStorage.setItem("themeConfig", "dark")
            dispatch({
                type: "UPDATE"
            })
            setTimeout(() => {
                setState(false)
                setIsLoading(false)
            }, 4000)
        }else {
            setState(false)
        }
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
        <>
            {isLoading
                ?<Loading>
                    <ActivityIndicator
                        color={"#e6a600"}
                        size={60}
                    />
                </Loading>
                :<ThemeContainer>
                    <CloseModal
                        activeOpacity={0.8}
                        onPress={() => setState(false)}/>
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
                            <ConfirmChangeTheme
                                disabled={button}
                                onPress={changeTheme}>
                                <ConfirmText>Confirmar</ConfirmText>
                            </ConfirmChangeTheme>
                        </View>
                    </ThemeOptionsView>
                </ThemeContainer>
            }
        </>
    )
}

export {ChangeTheme}
