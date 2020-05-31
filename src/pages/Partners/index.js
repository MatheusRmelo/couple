import React, { useState, useEffect } from 'react'
import { Share } from 'react-native'

import {
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
  ImageCurrent,
  ButtonSend,
  ModalBody,
  Bold,
  ModalLabelBody,
  InputModal,
  ModalFooter,
  Error,
  ButtonModal,
  Link,
  LinkLabel,
  ButtonShared
} from './styles'

import AsyncStorage from '@react-native-community/async-storage'


import Icon from 'react-native-vector-icons/FontAwesome'

import Modal from 'react-native-modal'

import InputId from '../../components/InputNumber'
import AuthInput from '../../components/AuthInput'

import userImg from '../../assets/images/userImg.png'



import api, { showError, showSuccess } from '../../services/api'

export default function Parceiros(){
    const [ current, setCurrent ] = useState('Não disponível') 
    const [ photoCurrent, setPhotoCurrent] = useState(null)
    const [ idCurrent, setIdCurrent] = useState(null)
    const [ partners, setPartners] = useState([])
    const [showInput, setShowInput] = useState(false)
    const [id, setId] = useState('')
    const [part_id, setPart_id] = useState('')
    const [mount, setMount] = useState(true)
    const [isModalVisible, setModalVisible] = useState(false);
    const [erro, setErro] = useState('')
    const [text, setText] = useState(false)

    async function onShare(){
      try {
        const result = await Share.share({
          message: `Me convide no My Couple, meu id é ${id}`,
        });
  
        if (result.action === Share.sharedAction) {
          if (result.activityType) {
            // shared with activity type of result.activityType
          } else {
            // shared
          }
        } else if (result.action === Share.dismissedAction) {
          // dismissed
        }
      } catch (error) {
        alert(error.message);
      }
    }

    async function getId(){
      const userDataJson = await AsyncStorage.getItem('mycouple_userData')
      let userData = null
      try {
          userData = JSON.parse(userDataJson)    
      } catch(e) {
          //User Data inválido
      }
      //console.log(userData)
      if( userData ) {
          setId(userData.user_id)
      }
    }
    function toggleModal(){
      setModalVisible((prevState) => !prevState)
    }
    function cancel(){
      setShowInput(false)
    }

    function saveId(id){
        setPart_id(id)
        setShowInput(false)
    }
    function showInputId(text){
        setText(text)
        setShowInput(true)
    }
    async function getPartners(){
      setMount(false)
      getId()
      try {
        const res = await api.get('partners')
        await setPartners([res.data])  
        //console.log(res.data)
        //setLoading(false)        
      }catch(err){  
        await setPartners(null)
          //setLoading(false)  
      }
    } 
    async function getCurrent(){
      try{
        const res = await api.get('partner')
        setCurrent(res.data.part_name)
        setPhotoCurrent(res.data.part_photo)
        setIdCurrent(res.data.part_id)
      }catch(err){
        showError(err)
      }
    }
    async function makeCurrent(id){
        try{
          await api.put('partner')
          await api.post('partner',{
            part_id: id
          })
          showSuccess('Atualizado com sucesso!')
          getPartners()
          getCurrent()
        }catch(err){
          showError(err)
        }
    }
    async function invitation(){
      try {
        await api.post('invitation',{
          part_id
        })
        showSuccess('Convite enviado')
        toggleModal()
      }catch(err){
        showError(err)
      }
    }

    useEffect(
        () => {    
            if ( mount ){
              getPartners()
              getCurrent()
            }
            
        }
    );
    return (
        <Container>
            <InputId onSave={id => saveId(id)} isVisible={showInput} text={text} onCancel={cancel} />
            <Modal isVisible={isModalVisible}>
                <ModalBody>
                    <ModalLabelBody><Bold>Convite seu amor!</Bold></ModalLabelBody>
                    <ModalLabelBody>Coloque o id do seu amor</ModalLabelBody>
                    <InputModal onPress={() => showInputId('Digite o ID')}>
                        <AuthInput icon='user' text={part_id} textClean=' Id' />
                    </InputModal>
                    
                    <Error>{erro ? erro : null}</Error>
                    <ModalFooter>
                        <ButtonModal onPress={invitation}>
                            <ButtonLabel>Convidar</ButtonLabel>
                        </ButtonModal>  
                        <Link onPress={toggleModal}>
                            <LinkLabel>Sair</LinkLabel>
                        </Link>   
                    </ModalFooter>
                    
                </ModalBody>
            
               
            </Modal>
            <LabelPage>Parceiro atual</LabelPage>
            <Header> 
                <ImageCurrent source={photoCurrent ? {uri:photoCurrent}: userImg} />
                <NameCurrent style={{color:'white'}}> {current}</NameCurrent>
            </Header>
            <Body>
                { partners 
                ? partners.map((partner) => (
                    <Partner key={partner.part_id}>
                        <Datas>
                          <Image source={partner.part_photo ? {uri:partner.part_photo}: userImg} />
                          <NameCurrent> {partner.part_name}</NameCurrent>
                        </Datas>
                        <Button onPress={()=>makeCurrent(partner.part_id)}>
                          <Icon name="toggle-up" size={20} color="#FFFFFF" />
                          <ButtonLabel>Tornar Atual</ButtonLabel>
                        </Button>
                    </Partner>
                  ))
                :<ButtonLabel>Você não possuí parceiros</ButtonLabel>
                }
            </Body>

            <ButtonShared onPress={onShare}>
              <Icon name="share" size={20} color="#FFFFFF" />
            </ButtonShared>
            <ButtonSend onPress={toggleModal}>
              <Icon name="plus" size={20} color="#FFFFFF" />
            </ButtonSend>
            
        </Container>
    )
}