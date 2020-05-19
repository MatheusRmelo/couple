import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './styles'

import cardLove from '../../assets/images/cardLove.png'
import Modal from 'react-native-modal'
import InputWithIcon from '../../components/InputWithIcon'
export default function RegisterOrLogin(props){
    const [isModalVisible, setModalVisible] = useState(true);
    const [password, setPassword] = useState('')
    const [erro, setErro] = useState('')
    const [text, setText] = useState('')
 
    function cancel(){
        setShowBackLogin(false)
    }
    function toggleModal(){
        setModalVisible(!isModalVisible);
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
            <Modal isVisible={isModalVisible}>
               
                <View style={styles.modalHeader}>
                    <Text style={styles.textModalHeader}  >Bem vindo de volta</Text>
                </View>
                <View style={styles.modalBody}>
                   
                    <Text style={styles.textTitleModal}>Sua senha</Text>
                    <InputWithIcon style={styles.inputModal} icon='lock' placeholder='Senha'
                        value={password}
                        maxLength={5} autoCapitalize='none' keyboardType='number-pad'
                        secureTextEntry={true}
                        onChangeText={password => setPassword(password)} />
                    
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