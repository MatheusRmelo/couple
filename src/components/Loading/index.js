import React from 'react'
import { ActivityIndicator } from 'react-native'
import Modal from 'react-native-modal'

export default function Loading(props){
    return (
        <Modal isVisible={props.isVisible}>
                <ActivityIndicator size="large" color="#EE0101" />
        </Modal>
    )
}