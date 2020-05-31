import React, { useState } from 'react'
import { Text,View, Modal, TextInput,TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import commonStyles from '../commonStyles'

export default function InputNumber(props){
    const [id, setId] = useState('')

    function save(){
        props.onSave(id)
        setId('')
    }
    
    return (
        <Modal transparent={true} visible={props.isVisible} onRequestClose={props.onCancel} animationType='slide'>
            <TouchableWithoutFeedback onPress={props.onCancel}>
                    <View style={commonStyles.background}>

                    </View>
                </TouchableWithoutFeedback>
                <View style={commonStyles.container}>
                    <Text style={commonStyles.header}>{props.text}</Text>
                    <TextInput autoCapitalize='none' keyboardType='number-pad' autoFocus={true} style={commonStyles.input} value={id} onChangeText={id => setId(id)} />          
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