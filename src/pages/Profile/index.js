import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome'

import userImg from '../../assets/images/userImg.png'
import AuthInput from '../../components/AuthInput'
import Input from '../../components/Input'
import InputEmail from '../../components/InputEmail'



export default function Profile(){
    const [name, setName] = useState('Matheus')
    const [email, setEmail] = useState('robertttjmelo@gmail.com')

    const [showEmail, setShowEmail] = useState(false)
    const [showInput, setShowInput] = useState(false)

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

    function showInputName(text){
        setText(text)
        setShowInput(true)
    }
    function showInputEmail(text){
        setText(text)
        setShowEmail(true)
    }


    return(
        <View style={styles.container}>
            <Input onSave={name => saveName(name)} isVisible={showInput} text={text} onCancel={cancel} />
            <InputEmail onSave={email => saveEmail(email)} isVisible={showEmail} text={text} onCancel={cancel} />

            <Text style={styles.titlePage}>Meu Perfil</Text>
            <View style={styles.header}> 
                <Image style={styles.image} source={userImg}  />
                <TouchableOpacity style={styles.buttonPhoto} onPress={() => {}}>
                    <Icon name="camera" size={20} color="#FFFFFF"/>
                    <Text style={styles.buttonText}>Mudar foto</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.body}>
                <Text style={styles.title}>Seu nome</Text>
                <TouchableOpacity style={styles.input}  onPress={() => showInputName('Nome')}>
                    <AuthInput icon='user' text={name} textClean=' nome' />
                </TouchableOpacity>
                <Text style={styles.title}>E-mail</Text>
                <TouchableOpacity style={styles.input}   onPress={() => showInputEmail('E-mail')}>
                    <AuthInput icon='at' text={email} textClean=' E-mail' />
                </TouchableOpacity>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.button} onPress={() => {}}>
                    <Icon name="sign-out" size={30} color="#FFFFFF"/>
                    <Text style={styles.buttonText}>Sair</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => {}}>
                    <Icon name="edit" size={30} color="#FFFFFF"/>
                    <Text style={styles.buttonText}>Mudar senha</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => {}}>
                    <Icon name="trash" size={30} color="#FFFFFF"/>
                    <Text style={styles.buttonText}>Excluir conta</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonPrimary} onPress={() => {}}>
                    <Icon name="save" size={30} color="#FFFFFF"/>
                    <Text style={styles.buttonText}>Atualizar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}