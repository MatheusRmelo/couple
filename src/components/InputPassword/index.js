import React, { useState } from 'react'
import { Text,View, Modal, TextInput,TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import styles from './styles'


export default function InputPassword(props){
    const [password, setPassword] = useState('')

    function save(){
        props.onSave(password)
    }
    
    return (
        <Modal transparent={true} visible={props.isVisible} onRequestClose={props.onCancel} animationType='slide'>
            <TouchableWithoutFeedback onPress={props.onCancel}>
                    <View style={styles.background}>

                    </View>
                </TouchableWithoutFeedback>
                <View style={styles.container}>
                    <Text style={styles.header}>{props.text}</Text>
                    <TextInput maxLength="5" autoCapitalize='none' keyboardType='number-pad' autoFocus={true} secureTextEntry={true} style={styles.input} value={password} onChangeText={password => setPassword(password)} />
                    <View style={styles.buttons}>
                        <TouchableOpacity onPress={props.onCancel} style={styles.button}>
                            <Text>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={save}>
                            <Text>Continuar</Text>
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