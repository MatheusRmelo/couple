import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'


import InputEmail from '../../components/InputEmail'
import InputPassword from '../../components/InputPassword'
import AuthInput from '../../components/AuthInput'
import Input from '../../components/Input'

export default function Register(){
    const [showEmail, setShowEmail] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [showInput, setShowInput] = useState(false)

    const [erro, setErro] = useState(false)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [text, setText] = useState('')
 
    function cancel(){
        setShowEmail(false)
        setShowPassword(false)
        setShowInput(false)
    }
    function saveName(name){
        setName(name)
        setShowInput(false)
    }
    function saveEmail(email){
        setEmail(email)
        setShowEmail(false)
    }
    function savePassword(password){
        if (text[0] === 'S')
            setPassword(password)
        else if (text[0] === 'C')
            setConfirmPassword(password)
            
        setShowPassword(false)

    }
    function showInputName(text){
        setText(text)
        setShowInput(true)
    }
    function showInputEmail(text){
        setText(text)
        setShowEmail(true)
    }
    function showInputPassword(text){
        setText(text)
        setShowPassword(true)
    }

    function register(){
        if( password !== confirmPassword )
            return setErro(true)
        props.navigation.navigate('Menu')
    }
    return (
        <View style={styles.container}>
            <InputEmail onSave={email => saveEmail(email) } isVisible={showEmail} text={text} onCancel={cancel} />
            <InputPassword onSave={password => savePassword(password)} isVisible={showPassword} text={text} onCancel={cancel} />
            <Input onSave={name => saveName(name)} isVisible={showInput} text={text} onCancel={cancel} />
             

            <View style={styles.body}>
                <Text style={styles.text}>
                    Seu nome
                </Text >
                <TouchableOpacity style={styles.input}  onPress={() => showInputName('Nome')}>
                    <AuthInput icon='user' text={name} textClean=' Nome' />
                </TouchableOpacity>
                <Text style={styles.text}>
                    Seu e-mail
                </Text>
                <TouchableOpacity style={styles.input}  onPress={() => showInputEmail('E-mail')}>
                    <AuthInput icon='at' text={email} textClean=' E-mail' />
                </TouchableOpacity>
                <Text style={styles.text}>
                    Seu Senha
                </Text>
                <TouchableOpacity style={styles.input} onPress={() => showInputPassword('Senha')}>
                    <AuthInput icon='lock' secury text={password} textClean=' Senha' />
                </TouchableOpacity>
                <Text style={styles.text}>
                    Confirme sua senha
                </Text>
                <TouchableOpacity style={styles.input} onPress={() => showInputPassword('Confirme sua senha')}>
                    <AuthInput icon='lock' secury text={confirmPassword} textClean=' Confirmação de senha' />
                </TouchableOpacity>
                {
                    erro ?
                    <Text style={styles.erro}>
                        Senhas diferentes
                    </Text>
                    :null
                }
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.button} onPress={register}>
                    <Text style={styles.buttonText}>Criar conta</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}