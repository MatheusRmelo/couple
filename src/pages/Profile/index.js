import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome'

import AsyncStorage from '@react-native-community/async-storage'

import { useNavigation } from '@react-navigation/native'

import userImg from '../../assets/images/userImg.png'
import AuthInput from '../../components/AuthInput'
import Input from '../../components/Input'
import InputEmail from '../../components/InputEmail'



export default function Profile(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [img, setImg] = useState(null) 

    const [showEmail, setShowEmail] = useState(false)
    const [showInput, setShowInput] = useState(false)

    const [text, setText] = useState('')

    const navigation = useNavigation()

    function cancel(){
        setShowEmail(false)
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
    async function getInfos(){
        const userDataJson = await AsyncStorage.getItem('mycouple_userData')
        let userData = null
        try {
            userData = JSON.parse(userDataJson)    
        } catch(e) {
            //User Data inválido
        }
        //console.log(userData)
        if( userData && email ==='' ) {
            setEmail(userData.email)
            setName(userData.name)
            setImg(userData.profile_img)
        }
    }
    useEffect(
         () => {     
            getInfos()
        }
    );


    return(
        <View style={styles.container}>
            <Input onSave={name => saveName(name)} isVisible={showInput} text={text} onCancel={cancel} name={name} />
            <InputEmail onSave={email => saveEmail(email)} isVisible={showEmail} text={text} onCancel={cancel} email={email} />

            <Text style={styles.titlePage}>Meu Perfil</Text>
            <View style={styles.header}> 
                <View style={styles.borderImage}>
                    <Image style={styles.image} source={img  ? {uri: img} : userImg}   />
                </View>
                
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
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Main')}>
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