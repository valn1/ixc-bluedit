import React from "react";
import Criar from "../Screens/Criar";
import Home from "../Screens/Home";
import Perfil from "../Screens/Perfil";
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {itemOptions, screenOptions} from "./options";


const Tab = createBottomTabNavigator()
const TabNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName='Home' screenOptions={screenOptions}>
                <Tab.Screen name='Início' component={Home} options={itemOptions}/>
                <Tab.Screen name='Criar' component={Criar} options={itemOptions}/>
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
