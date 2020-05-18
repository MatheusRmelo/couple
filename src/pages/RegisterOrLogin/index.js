import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './styles'

import cardLove from '../../assets/images/cardLove.png'

export default function Login(props){
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>My Couple</Text>
                <Image style={styles.image} source={cardLove} /> 
            </View>
            <View style={styles.body}>
                <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Register')}>
                    <Text style={styles.buttonText}>
                        Nova conta
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Login')}>
                    <Text style={styles.buttonText}>
                        Login
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}