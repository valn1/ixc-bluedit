import React from "react";
import Criar from "./Screens/Criar";
import Home from "./Screens/Home";
import Perfil from "./Screens/Perfil";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome'


const Tab = createBottomTabNavigator()
const TabNavigator  = () => {
    return(
        <Tab.Navigator initialRouteName='Home' screenOptions={{
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
        }}
        >
            <Tab.Screen
                name='Início'
                component={Home}
                options={{
                    tabBarIcon: ({color}) => (<Icon name='home' size={35} color={color}></Icon> ),
                }}
            ></Tab.Screen>
            <Tab.Screen
                name='Criar'
                component={Criar}
                options={{
                    tabBarIcon: ({color}) => (<Icon name='plus' size={35} color={color}></Icon> ),
                }}
            ></Tab.Screen>
            <Tab.Screen
                name="Perfil"
                component={Perfil}
                options={{
                    tabBarIcon: ({color}) => (<Icon name='user' size={35} color={color}></Icon> ),
                }}
            ></Tab.Screen>
        </Tab.Navigator>
    )
}

const Navigator = () => {
    return(
        <NavigationContainer>
            <TabNavigator></TabNavigator>
        </NavigationContainer>
    )
}

export {Navigator};
