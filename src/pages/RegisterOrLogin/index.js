import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'

export default function Login(){
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.textHeader}>
                    Um jogo de escolhas
                </Text>
                <Text style={styles.textHeader}>
                    para conhecer
                </Text>
                <Text style={styles.textHeader}>
                    melhor seu parceiro!
                </Text>
               
            </View>
            <View style={styles.body}>
                <TouchableOpacity style={styles.button} onPress={() => {}}>
                    <Text style={styles.buttonText}>
                        Nova conta
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => {}}>
                    <Text style={styles.buttonText}>
                        Login
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}