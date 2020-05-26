import React, { useState } from 'react'
import { Text,View, Modal, TextInput,TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import styles from './styles'
import commonStyles from '../commonStyles'

export default function InputPassword(props){
    const [password, setPassword] = useState('')

    function save(){
        props.onSave(password)
        setPassword('')
    }
    
    return (
        <Modal transparent={true} visible={props.isVisible} onRequestClose={props.onCancel} animationType='slide'>
            <TouchableWithoutFeedback onPress={props.onCancel}>
                    <View style={commonStyles.background}>

                    </View>
                </TouchableWithoutFeedback>
                <View style={commonStyles.container}>
                    <Text style={commonStyles.header}>{props.text}</Text>
                    <TextInput maxLength={6} autoCapitalize='none' keyboardType='number-pad' autoFocus={true} secureTextEntry={true} style={commonStyles.input} value={password} onChangeText={password => setPassword(password)} />          
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