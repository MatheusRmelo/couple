import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import varStyles from './varStyles' 

import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

import Login from './pages/Login'
import Register from './pages/Register'
import Main from './pages/Main'


import Partners from './pages/Partners'
import Play from './pages/Play'
import Profile from './pages/Profile'


const AppStack = createStackNavigator()
const Tab = createBottomTabNavigator();

function Menu(){
    return (
        <Tab.Navigator
                initialRouteName="Play"
                tabBarOptions={{
                    activeTintColor: '#EE0101',
                }}
                >
            <Tab.Screen
                name="Partners"
                component={Partners}
                options={{
                tabBarLabel: 'Parceiro(s)',
                tabBarIcon: ({ color, size }) => (
                    <Icon name='heart' size={size} color={color} />
                ),
                }}
            />
            <Tab.Screen
                name="Play"
                component={Play}
                options={{
                    tabBarLabel: 'Love',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name='play-circle-o' size={size+10} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                tabBarLabel: 'Perfil',
                tabBarIcon: ({ color, size }) => (
                    <Icon name="user" color={color} size={size} />
                ),
                }}
            />
        </Tab.Navigator>
    )
}

export default function Routes(){
    

    return (
        <NavigationContainer>
            <AppStack.Navigator initialRouteName="Main" 
                op >
                <AppStack.Screen name="Main" component={Main} options={{headerShown: false}} />
                <AppStack.Screen name="Login" component={Login} options={{title: 'Entre para o amor'}} />
                <AppStack.Screen name="Register" component={Register} options={{ title: 'Cadastro no amor'}} />
                <AppStack.Screen name="Menu" component={Menu} options={{ headerShown: false }}/>
            </AppStack.Navigator>
            

        </NavigationContainer>
    )
}