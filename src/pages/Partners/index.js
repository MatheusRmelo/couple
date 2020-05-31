import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native'

import styles,{
  Container,
  LabelPage,
  Body,
  Partner,
  Datas,
  Button,
  ButtonLabel,
  NameCurrent,
  Image,
  Footer,
  Header,
  ImageCurrent
} from './styles'


import Icon from 'react-native-vector-icons/FontAwesome'

import userImg from '../../assets/images/userImg.png'



import api, { showError, showSuccess } from '../../services/api'

export default function Parceiros(){
    const [ atual, setAtual ] = useState('Fulano X')  
    const [ partners, setPartners] = useState([])


    async function getPartners(){
      //await setLoading(true)
      try {
          const res = await api.get('partners')
          await setPartners(res.data)  
          //setLoading(false)        
      }catch(err){  
        //showError('Parceiros não encontrados')
        await setPartners(null)
          //setLoading(false)  
      }
    
    } 

    useEffect(
        () => {     
            getPartners()
        }
    );
    return (
        <Container>
            <LabelPage>Parceiro atual</LabelPage>
            <Header> 
                <ImageCurrent source={userImg} />
                <NameCurrent style={{color:'white'}}>{atual}</NameCurrent>
            </Header>
            <Body>
                { partners 
                ? partners.map((partner) => (
                    <Partner key={partner.id}>
                        <Datas>
                          <Image source={userImg} />
                          <NameCurrent>{partner.name}</NameCurrent>
                        </Datas>
                        <Button onPress={() => {}}>
                          <Icon style={styles.icon} name="toggle-up" size={20} color="#FFFFFF" />
                          <ButtonLabel>Tornar Atual</ButtonLabel>
                        </Button>
                    </Partner>
                  ))
                :<ButtonLabel>Você não possuí parceiros</ButtonLabel>
                }
            </Body>
            <Footer>

            </Footer>
        </Container>
    )
}