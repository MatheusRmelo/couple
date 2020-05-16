import React, { useState } from 'react'
import { Text,View, Modal, TextInput,TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import styles from './styles'

export default function Input(props){
    const [name, setName] = useState('')

    return (
        <Modal transparent={true} visible={props.isVisible} onRequestClose={props.onCancel} animationType='slide'>
                <TouchableWithoutFeedback onPress={props.onCancel}>
                    <View style={styles.background}>

                    </View>
                </TouchableWithoutFeedback>
                <View style={styles.container}>
                    <Text style={styles.header}>{props.text}</Text>
                    <TextInput autoCapitalize='none' autoFocus={true}  style={styles.input} value={name} onChangeText={name => setName(name)} />
                     <View style={styles.buttons}>
                        <TouchableOpacity onPress={props.onCancel} style={styles.button}>
                            <Text>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => props.onSave(name)}>
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