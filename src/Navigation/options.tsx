import Icon from "react-native-vector-icons/FontAwesome5";
import React from "react";
import {BottomTabNavigationOptions} from "@react-navigation/bottom-tabs";
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
export const screenOptions = () : BottomTabNavigationOptions => {
    return {
        headerShown: false,
        tabBarActiveTintColor: '#e6a600',
        tabBarInactiveTintColor: '#fff',
        tabBarLabelStyle:{
            color: '#fff',
            marginBottom: 10,
        },
        tabBarIconStyle: {
            marginTop: 9,
        },
        tabBarStyle: {
            backgroundColor: '#190049',
            height: 65,
        }
    };
};
