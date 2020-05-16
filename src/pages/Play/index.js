import React from 'react'
import { Text,View, Image } from 'react-native'
import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome'

export default function Play(){

    return (
        <View style={styles.container}>
            <View style={styles.players}>
                <View style={styles.player}>
                    <Icon name="user" size={35} color="#465789" />
                    <Text>Player 1</Text>
                </View>
                <Text>VS</Text>
                <View style={styles.player}>
                    <Icon name="user" size={35} color="#465789" />
                    <Text>Player 2</Text>
                </View>
            </View>
        </View>
    )
}
