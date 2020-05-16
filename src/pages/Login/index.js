import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'

import InputEmail from '../../components/InputEmail'
import InputPassword from '../../components/InputPassword'
import AuthInput from '../../components/AuthInput'

export default function Login(){
    const [showEmail, setShowEmail] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [text, setText] = useState('')
 
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
    return (
        <View style={styles.container}>
            <InputEmail onSave={email => saveEmail(email) } isVisible={showEmail} text={text} onCancel={cancel} />
            <InputPassword onSave={password => savePassword(password)} isVisible={showPassword} text={text} onCancel={cancel} />
                
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
                <TouchableOpacity style={styles.button} onPress={() => {}}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}