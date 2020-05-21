import React, { useState } from 'react'
import { View, Text, Image, FlatList, TouchableOpacity, Alert } from 'react-native'
import styles from './styles'

import userImg from '../../assets/images/userImg.png'


const DATA = [
  {
  id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
  title: 'First part',
  },
  {
  id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
  title: 'Second part',
  },
  {
  id: '58694a0f-3da1-471f-bd96-145571e29d72',
  title: 'Third part',
  },
  
];
function select(id){
  Alert.alert(id)
}
function Item({ id, title, selected }) {
  return (
    <TouchableOpacity
      onPress={() => select(id)}
      style={styles.item}
    > 
      <View style={styles.dados}>
        <Image style={styles.imageCard} source={userImg} width={50} height={50} />
        <Text style={styles.nomeAtual}>Fulano X</Text>
      </View>
      <TouchableOpacity onPress={() => {}} style={styles.button}>
          <Text style={styles.buttonText}>Tornar atual</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

export default function Parceiros(){
    const [selected, setSelected] = useState(new Map());
     
    return (
        <View style={styles.container}>
            <Text style={styles.titlePage}>Parceiro atual</Text>
            <View style={styles.header}> 
                <Image style={styles.image} source={userImg} width={50} height={50} />
                <Text style={styles.nomeAtual}>Fulano X</Text>
            </View>
            <View style={styles.body}>
            <FlatList
              data={DATA}
              renderItem={({ item }) => (
                <Item
                  id={item.id}
                  title={item.title}
                  selected={!!selected.get(item.id)}
                  
                />
              )}
              keyExtractor={item => item.id}
              extraData={selected}
             
            />
            </View>
            <View style={styles.footer}>

            </View>
        </View>
    )
}