import React, { useState } from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'

import userImg from '../../assets/images/userImg.png'

export default function Parceiros(){
    const [selected, setSelected] = useState(new Map());
    
    const DATA = [
        {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        name: 'First part',
        },
        {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        name: 'Second part',
        },
        {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        name: 'Third part',
        },
    ];

    function Item({ id, title, selected, onSelect }) {
        return (
          <TouchableOpacity
            onPress={() => onSelect(id)}
            style={[
              styles.item,
              { backgroundColor: selected ? '#6e3b6e' : '#f9c2ff' },
            ]}
          >
            <Text style={styles.title}>{title}</Text>
          </TouchableOpacity>
        );
      }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Parceiro atual</Text>
                <Image style={styles.image} source={userImg} width={50} height={50} />
                <Text style={styles.nameAtual}>Fulano X</Text>
            </View>
            <View style={styles.body}>
                
            </View>
            <View style={styles.footer}>

            </View>
        </View>
    )
}