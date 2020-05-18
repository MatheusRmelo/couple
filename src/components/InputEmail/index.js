import React, { useState } from 'react'
import { Text,View, Modal, TextInput,TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import styles from './styles'
import commonStyles from '../commonStyles'

export default function InputEmail(props){
    const [email, setEmail] = useState('')
    const [erro, setErro] = useState('')

    function checkEmail(){
        if ( email.indexOf('@') === -1){
            setErro('E-Mail inválido!')
        }else
        if (email.indexOf('.com') === -1){
            setErro('E-Mail inválido!')
        }else if( email.indexOf('@.com') !== -1 ){
            setErro('E-Mail inválido!')
        }else{
            setErro('')
        }
    }

    async function save(){
        await setEmail(email.toLowerCase())
        await checkEmail()
        if( !erro ){
            props.onSave(email)
        }
    }

    return (
        <Modal transparent={true} visible={props.isVisible} onRequestClose={props.onCancel} animationType='slide'>
                <TouchableWithoutFeedback onPress={props.onCancel}>
                    <View style={commonStyles.background}>

                    </View>
                </TouchableWithoutFeedback>
                <View style={commonStyles.container}>
                    <Text style={commonStyles.header}>{props.text}</Text>
                    <TextInput autoCapitalize='none' autoFocus={true} keyboardType='email-address' style={commonStyles.input} value={email} onChangeText={email => setEmail(email)} />
                    <Text style={commonStyles.erro}>{erro ? erro : null}</Text>
                    <View style={commonStyles.buttons}>
                        <TouchableOpacity onPress={props.onCancel} style={commonStyles.button}>
                            <Text>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={commonStyles.button} onPress={save}>
                            <Text>Continuar</Text>
                        </TouchableOpacity>    
                    </View>
                    
                    
                </View>
                <TouchableWithoutFeedback onPress={props.onCancel}>
                    <View style={commonStyles.background}>

                    </View>
                </TouchableWithoutFeedback>
        </Modal>
    )
}