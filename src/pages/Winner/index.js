import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome'

import userImg from '../../assets/images/userImg.png'


export default function Winner(){
    const [ question, setQuestion ] = useState('O que mais te atraiu na pergunta1?')  
    const [winner, setWinner] = useState('fulano Y')

    return (
        <View style={styles.container}>
            
            <View style={styles.header}> 
                <Image style={styles.image} source={userImg}  />
                <Text style={styles.title}>Parabéns, {winner}</Text>
            </View>
            <View style={styles.body}>
                <View style={styles.items}>
                    <Text style={styles.titleItem}>Vencedor</Text>
                    <View style={styles.item}>
                        <View style={styles.options}>
                            <Text style={styles.titleOption}> Acerto(s) </Text>
                            <Text style={styles.correct}>10</Text>
                        </View>
                        <View  style={styles.options}>
                            <Text style={styles.titleOption}> Erro(s) </Text>
                            <Text style={styles.wrong}>8</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.items}>
                    <Text style={styles.titleItem}>Perdedor</Text>
                    <View style={styles.item}>
                        <View style={styles.options}>
                            <Text style={styles.titleOption}> Acerto(s) </Text>
                            <Text style={styles.correct}>8</Text>
                        </View>
                        <View  style={styles.options}>
                            <Text style={styles.titleOption}> Erro(s) </Text>
                            <Text style={styles.wrong}>10</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.button} onPress={() => {}}>
                    {/* <Icon name="arrow-right" size={30} color="#FFFFFF" /> */}
                    <Text style={styles.buttonText}>Continuar</Text>
                   
                </TouchableOpacity>
            </View>
           
        </View>
    )
}