import Icon from "react-native-vector-icons/FontAwesome5";
import React from "react";
import {BottomTabNavigationOptions} from "@react-navigation/bottom-tabs";
import {NativeStackNavigationOptions} from "@react-navigation/native-stack";
import {useTheme} from "styled-components";
//o use theme serve para usar os temas do providerTheme fora de componentes styled-component

const whatIcon = (IconName : string): string => {
    switch (IconName){
        case "Início": return "home"
        case "Criar": return "plus"
        case "Perfil": return "user-alt"
        default: return IconName
    }
}
export const itemOptions = ({ route }:{route: {name: string}}): BottomTabNavigationOptions => {
    return {
        tabBarIcon: (props: { focused: boolean; color: string; size: number; }) => <Icon name={whatIcon(route.name)} size={30} color={props.color} />
    }
}

export const stackOptions = ():  NativeStackNavigationOptions => {
    return {
        headerShown: false
    }
}
export const screenOptions = () : BottomTabNavigationOptions => {
    const theme = useTheme();

    return {
        headerShown: false,
        tabBarActiveTintColor: theme.colors.secundary,
        tabBarInactiveTintColor: theme.colors.text,
        tabBarLabelStyle:{
            color: theme.colors.text,
            marginBottom: 10,
            fontSize: 13,
            marginTop: -10,
        },
        tabBarIconStyle: {
            marginTop: 9,
        },
        tabBarStyle: {
            backgroundColor: theme.colors.primary,
            height: 80,
            borderColor: theme.colors.primary,
        }
    };
};
