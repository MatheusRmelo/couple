import React, { useState } from 'react'
import { Text,View, Modal, TextInput,TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import styles from './styles'

import AuthInput from '../../components/AuthInput'

export default function BackLogin(props){
    const [email, setEmail] = useState('')
    const [erro, setErro] = useState('')

   function toggleModal(){
        setModalVisible(!isModalVisible);
    };

    return (
        <Modal transparent={true} visible={props.isVisible} onRequestClose={props.onCancel} animationType='slide'>
                <TouchableWithoutFeedback onPress={props.onCancel}>
                    <View style={styles.background}>

                    </View>
                </TouchableWithoutFeedback>
                <View style={styles.container}>
                    <Text style={styles.header}>Bem vindo de volta</Text>
                    
                    <AuthInput  style={styles.inputs} icon='lock' text={email} textClean=' Senha' >
                        <TextInput autoCapitalize='none'  keyboardType='email-address'  value={email} onChangeText={email => setEmail(email)} />
                    </AuthInput>
                    
                    <Text style={styles.erro}>{erro ? erro : null}</Text>
                    <View style={styles.buttons}>
                        <TouchableOpacity onPress={props.onCancel} style={styles.button}>
                            <Text style={styles.buttonText}>Entrar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.link} onPress={() => {}}>
                            <Text style={styles.linkText}>Sair</Text>
                        </TouchableOpacity>    
                    </View>
                    
                    
                </View>
                <TouchableWithoutFeedback onPress={props.onCancel}>
                    <View style={styles.background}>

                    </View>
                </TouchableWithoutFeedback>
        </Modal>
    )
}