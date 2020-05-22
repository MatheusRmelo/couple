import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome'

import userImg from '../../assets/images/userImg.png'

export default function Playing(){
    const [ question, setQuestion ] = useState('O que mais te atraiu na pergunta1?')  
    const [option, setOption] = useState(['resposta1','resposta2','resposta3','resposta4'])

    return (
        <View style={styles.container}>
            
            <View style={styles.header}> 
                <Text style={styles.question}>{question}</Text>
            </View>
            <View style={styles.body}>
                <TouchableOpacity style={styles.option} onPress={() => {}}>
                    <Text style={styles.optionText}>{option[0]}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.option} onPress={() => {}}>
                    <Text  style={styles.optionText}>{option[1]}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.option} onPress={() => {}}>
                    <Text  style={styles.optionText}>{option[2]}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.option} onPress={() => {}}>
                    <Text  style={styles.optionText}>{option[3]}</Text>
                </TouchableOpacity>
            </View>
           
        </View>
    )
}