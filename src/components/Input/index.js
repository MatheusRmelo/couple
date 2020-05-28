import React, { useState, useEffect } from 'react'
import { Text,View, Modal, TextInput,TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import styles from './styles'
import commonStyles from '../commonStyles'

export default function Input(props){
    const [name, setName] = useState('')

    useEffect(
        () => {     
            if(props.name)
            setName(props.name)
       }
    );
    return (
        <Modal transparent={true} visible={props.isVisible} onRequestClose={props.onCancel} animationType='slide'>
                <TouchableWithoutFeedback onPress={props.onCancel}>
                    <View style={commonStyles.background}>

                    </View>
                </TouchableWithoutFeedback>
                <View style={commonStyles.container}>
                    <Text style={commonStyles.header}>{props.text}</Text>
                    <TextInput autoCapitalize='none' autoFocus={true}  style={commonStyles.input} value={name} onChangeText={name => setName(name)} />
                     <View style={commonStyles.buttons}>
                        <TouchableOpacity onPress={props.onCancel} style={commonStyles.button}>
                            <Text>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={commonStyles.button} onPress={() => props.onSave(name)}>
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