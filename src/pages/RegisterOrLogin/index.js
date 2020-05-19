import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './styles'

import cardLove from '../../assets/images/cardLove.png'

import BackLogin from '../BackLogin'
import Login from '../Login'

export default function RegisterOrLogin(props){
    const [showBackLogin, setShowBackLogin] = useState(true)
    const [password, setPassword] = useState('')
    const [text, setText] = useState('')
 
    function cancel(){
        setShowBackLogin(false)
    }
    
    function savePassword(password){
        setPassword(password)
        setShowPassword(false)
    }
   
    // function showLogin(text){
    //     setText(text)
    //     setShowPassword(true)
    // }
    // function login(senha){

    // }

    return (
        <View style={styles.container}>
            <BackLogin onSave={senha => savePassword(senha)} isVisible={showBackLogin} text={text} onCancel={cancel} />
            
            <View style={styles.header}>
                <Text style={styles.title}>My Couple</Text>
                <Image style={styles.image} source={cardLove} /> 
            </View>
            <View style={styles.body}>
                <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Register')}>
                    <Text style={styles.buttonText}>
                        Nova conta
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Login')}>
                    <Text style={styles.buttonText}>
                        Login
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}