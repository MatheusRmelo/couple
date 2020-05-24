import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'


import styles,{ Container, ContainerHeader, TitleHeader, ImgHeader, Actions, Action, ActionLabel, ModalHeader } from './styles'

import cardLove from '../../assets/images/cardLove.png'
import Modal from 'react-native-modal'
import InputPassword from '../../components/InputPassword'
import AuthInput from '../../components/AuthInput'

export default function RegisterOrLogin(){
    const [isModalVisible, setModalVisible] = useState(false);
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [erro, setErro] = useState('')
    const [text, setText] = useState(false)

    const navigation = useNavigation()
 
    function cancel(){
        setShowPassword(false)
    }
    function toggleModal(){
        setModalVisible(!isModalVisible);
    }
    function savePassword(password){
        setPassword(password)
        setShowPassword(false)
    }
    function showInputPassword(text){
        setText(text)
        setShowPassword(true)
    }

    useEffect(
        () => {
           var email = 'matheusroberttjmelo@gmail.com'
           email = ''
           if ( email )
               setModalVisible(true)
           else
               setModalVisible(false)
           
        }
    );


    return (
        <Container>
            <InputPassword onSave={password => savePassword(password)} isVisible={showPassword} text={text} onCancel={cancel} />
            
            <Modal isVisible={isModalVisible}>
               
                <View style={styles.modalHeader}>       
                    <Text style={styles.textModalHeader}>Bem vindo de volta</Text>
                </View>
                <View style={styles.modalBody}>
                   
                    <Text style={styles.textTitleModal}>Sua senha</Text>
                    <TouchableOpacity style={styles.input} onPress={() => showInputPassword('Senha')}>
                        <AuthInput icon='lock' secury text={password} textClean=' Senha' />
                    </TouchableOpacity>
                    
                    <Text style={styles.erro}>{erro ? erro : null}</Text>
                    <View style={styles.buttons}>
                        <TouchableOpacity onPress={toggleModal} style={styles.buttonModal}>
                            <Text style={styles.buttonText}>Entrar</Text>
                        </TouchableOpacity>  
                        <TouchableOpacity style={styles.link} onPress={() => {}}>
                            <Text style={styles.linkText}>Sair</Text>
                        </TouchableOpacity>

                   
                            
                    </View>
                    
                    
                </View>
            
               
            </Modal>
            <ContainerHeader>
                <TitleHeader>My Couple</TitleHeader>
                <ImgHeader source={cardLove} /> 
            </ContainerHeader>
            <Actions>
                <Action onPress={() => navigation.navigate('Register')}>
                    <ActionLabel>Nova conta</ActionLabel>
                </Action>
                <Action onPress={() => navigation.navigate('Login')}>
                    <ActionLabel>Login</ActionLabel>
                </Action>
            </Actions>
        </Container>
    )
}