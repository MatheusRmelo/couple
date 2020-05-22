import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import styles from './styles'

import InputEmail from '../../components/InputEmail'
import InputPassword from '../../components/InputPassword'
import AuthInput from '../../components/AuthInput'

import cardLove from '../../assets/images/cardLove.png'


export default function Login(props){
    const [showEmail, setShowEmail] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [text, setText] = useState('')
 
    const navigation = useNavigation()

    function cancel(){
        setShowEmail(false)
        setShowPassword(false)
    }
    function saveEmail(email){
        setEmail(email)
        setShowEmail(false)
    }
    function savePassword(password){
        setPassword(password)
        setShowPassword(false)
    }
    function showInputEmail(text){
        setText(text)
        setShowEmail(true)
    }
    function showInputPassword(text){
        setText(text)
        setShowPassword(true)
    }

    function navigateToMenu(){
        navigation.navigate('Menu')
    }

    return (
        <View style={styles.container}>
            <InputEmail onSave={email => saveEmail(email) } isVisible={showEmail} text={text} onCancel={cancel} />
            <InputPassword onSave={password => savePassword(password)} isVisible={showPassword} text={text} onCancel={cancel} />
            <View style={styles.header}>
                <Image style={styles.image} source={cardLove} />
            </View>

            <View style={styles.body}>
                <Text style={styles.text}>
                    Seu e-mail
                </Text>
                <TouchableOpacity style={styles.input}  onPress={() => showInputEmail('Email')}>
                    <AuthInput icon='at' text={email} textClean=' E-mail' />
                </TouchableOpacity>
                <Text style={styles.text}>
                    Sua Senha
                </Text>
                <TouchableOpacity style={styles.input} onPress={() => showInputPassword('Senha')}>
                    <AuthInput icon='lock' secury text={password} textClean=' Senha' />
                </TouchableOpacity>

            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.button} onPress={navigateToMenu}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}