import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Icon from 'react-native-vector-icons/FontAwesome'

import RegisterOrLogin from './pages/RegisterOrLogin'
import Login from './pages/Login'
import Register from './pages/Register'
import Play from './pages/Play'
import Parceiros from './pages/Parceiros'
import Profile from './pages/Profile'
import Playing from './pages/Playing'
const PlayingRoutes = {
    Playing:  { screen: Playing, navigationOptions: { title: 'Make a love'} },
    Play: { screen: Play, navigationOptions: {headerShown:false } },
}
const playingNavigator = createStackNavigator(PlayingRoutes, {
    initialRouteName:'Play',
})


const MenuRoutes = {
    Parceiros: {
        name: 'Parceiros',
        screen: Parceiros,
        navigationOptions: {
            title: 'Parceiros',
            tabBarIcon: ({ tintColor }) => <Icon name='heart' size={30} color={tintColor} />
        }
    },
    Play: {
        name: 'Play',
        screen: playingNavigator,
        navigationOptions: {
            title: 'Love',
            tabBarIcon: ({ tintColor }) => <Icon name='play-circle-o' size={35} color={tintColor} />
        }
    },
    Profile: {
        name: 'Profile',
        screen: Profile,
        navigationOptions: {
            title: 'Perfil',
            tabBarIcon: ({ tintColor }) => <Icon name='user' size={30} color={tintColor} />
        }
    }
}
const MenuConfig = {
    initialRouteName: 'Play',
    tabBarOptions: {
        showLabel: true,
        activeTintColor: '#EE0101',
    }
}

const MenuNavigator = createBottomTabNavigator(MenuRoutes, MenuConfig)



const authRoutes = {
    Login:  { screen: Login, navigationOptions: { title: 'Entre para o amor' } },
    RegisterOrLogin: { screen: RegisterOrLogin, navigationOptions: {headerShown:false } },
    Register: { screen: Register, navigationOptions: { title: 'Cadastro no amor' } },
    Menu: { screen: MenuNavigator, navigationOptions: {headerShown:false}},
}
const authNavigator = createStackNavigator(authRoutes, {
    initialRouteName: 'RegisterOrLogin'
})



export default createAppContainer(authNavigator)