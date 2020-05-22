import React, { useState } from 'react'
import { View, Text, Image, FlatList, TouchableOpacity, Alert } from 'react-native'
import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome'

import userImg from '../../assets/images/userImg.png'

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
function select(id){
  Alert.alert(id)
}
function Item({ id, name, selected }) {
  return (
    <View
      style={styles.item}
    > 
      <View style={styles.dados}>
        <Image style={styles.imageCard} source={userImg} width={50} height={50} />
        <Text style={styles.nomeAtual}>{name}</Text>
      </View>
      <TouchableOpacity onPress={() => {}} style={styles.button}>
          <Icon style={styles.icon} name="toggle-up" size={20} color="#FFFFFF" />
          <Text style={styles.buttonText}>Tornar atual</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function Parceiros(){
    const [ atual, setAtual ] = useState('Fulano X')  
  

    return (
        <View style={styles.container}>
            <Text style={styles.titlePage}>Parceiro atual</Text>
            <View style={styles.header}> 
                <Image style={styles.image} source={userImg} width={50} height={50} />
                <Text style={[styles.nomeAtual,{color:'white'}]}>{atual}</Text>
            </View>
            <View style={styles.body}>
            <FlatList
              data={DATA}
              renderItem={({ item }) => (
                <Item
                  id={item.id}
                  name={item.name}
                  
                  
                />
              )}
              keyExtractor={item => item.id}
              
             
            />
            </View>
            <View style={styles.footer}>

            </View>
        </View>
    )
}