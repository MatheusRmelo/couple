import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome5'

export default function AuthInput(props){
    return (
        <View style={[styles.container, props.style]}>
                    <Icon name={props.icon} size={20} style={styles.icon} />
                    {
                        props.secury ? 
                            props.text ? 
                            <Text style={styles.input}>{'*'.repeat(props.text.length)}</Text> :
                            <Text style={styles.inputClean}>{props.textClean}</Text> 
                        : props.text ?  <Text style={styles.input}>{props.text}</Text> :
                            <Text style={styles.inputClean}>{props.textClean}</Text>
                    }
                    
                
        </View>
    )
}