import React, {createContext, useEffect, useReducer, useState} from "react";
import {Navigator} from "./Navigation/Navigation";
import {inicialAppState, reducer} from "./hooks/reducer";
import {ThemeProvider} from "styled-components";
import dark from './styles/themes/dark'
import light from "./styles/themes/light";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AppContext: React.Context<any> = createContext('');




const App: React.FC = () => {
    const [state, dispatch] = useReducer(reducer, inicialAppState)
    const [theme, setTheme] = useState(dark);

    useEffect(() => {
        const storeData = async () => {
            const theme = await AsyncStorage.getItem("themeConfig");
            if(theme === "light"){
                setTheme(light)
            }else {
                setTheme(dark)
            }
        }
        storeData()
        }, [state.update])


    return(
        <AppContext.Provider value={{state, dispatch}}>
            <ThemeProvider theme={theme}>
                <Navigator/>
            </ThemeProvider>
        </AppContext.Provider>

    )
}
export default App
