import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'

export default function Login(){
    return (
        <View style={styles.container}>
            <View>
                <Text>
                    Um jogo de escolhas para conhecer melhor seu parceiro!
                </Text>
            </View>
            <View>
                <TouchableOpacity onPress={() => {}}>
                    <Text>
                        Nova conta
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {}}>
                    <Text>
                        Login
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}