import React from "react";
import Criar from "../Screens/Criar";
import {Home} from "../Screens/Home";
import Perfil from "../Screens/Perfil";
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {itemOptions, screenOptions, stackOptions} from "./options";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {CameraModal} from "../Components/CreatePost/CameraModal";
import {FollowerProfile} from "../Components/FollowerProfile";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const ScreenCriar = () => {
    return(
        <Stack.Navigator initialRouteName={"ScreenCriar"} screenOptions={stackOptions}>
            <Stack.Screen name={"ScreenCriar"} component={Criar}></Stack.Screen>
            <Stack.Screen name={"TakePhoto"} component={CameraModal}></Stack.Screen>
        </Stack.Navigator>
    )
}

const ScreenInicio = () => {
    return(
        <Stack.Navigator initialRouteName={"ScreenInicio"} screenOptions={stackOptions}>
            <Stack.Screen name={"ScreenInicio"} component={Home}></Stack.Screen>
            <Stack.Screen name={"FollowerProfile"} component={FollowerProfile}></Stack.Screen>
        </Stack.Navigator>
    )
}

const TabNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName='Início' screenOptions={screenOptions}>
                <Tab.Screen name='Início' component={ScreenInicio} options={itemOptions}/>
                <Tab.Screen name='Criar' component={ScreenCriar} options={itemOptions}/>
                <Tab.Screen name="Perfil" component={Perfil} options={itemOptions}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}


const Navigator = () => {
    return (
        <TabNavigator></TabNavigator>
    )
}

export {Navigator};
