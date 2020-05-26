import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

import api, { showError, showSuccess } from '../../services/api'

import { Container,
    ContainerHeader,
    TitleHeader,
    ImgHeader,
    Actions,
    Action,
    ActionLabel,
    ModalBody,
    Bold,
    ModalLabelBody,
    InputModal,
    Error,
    ButtonModal,
    ButtonLabel,
    Link,
    LinkLabel,
    ModalFooter
} from './styles'

import cardLove from '../../assets/images/cardLove.png'
import Modal from 'react-native-modal'
import InputPassword from '../../components/InputPassword'
import AuthInput from '../../components/AuthInput'

export default function RegisterOrLogin(){
    const [isModalVisible, setModalVisible] = useState(true);
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [erro, setErro] = useState('')
    const [text, setText] = useState(false)

    const navigation = useNavigation()
 
    function cancel(){
        setShowPassword(false)
    }
    function toggleModal(){
        setModalVisible((prevState) => !prevState)
    }
    function savePassword(password){
        setPassword(password)
        setShowPassword(false)
    }
    function showInputPassword(text){
        setText(text)
        setShowPassword(true)
    }

    async function signin(){
        try {
            const res = await api.post('signin',{
                email: 'matheusroberttjmelo@gmail.com',
                password
            })
            //AsyncStorage.setItem('mycouple_userData', JSON.stringify(res.data))
            api.defaults.headers.common['Authorization'] = `bearer ${res.data.token}`
            navigation.navigate('Menu')
            showSuccess('Sucesso no login')
            setModalVisible(false)
            
        }catch(err){
            showError(err)
            setModalVisible(true)
            setErro(err)
            setPassword('')
        }
    }

    useEffect(
        () => {
           
           var email = password
           
           if ( email )
               setModalVisible(false)
           else
               setModalVisible(false)
           
        }
    );


    return (
        <Container>
            <InputPassword onSave={password => savePassword(password)} isVisible={showPassword} text={text} onCancel={cancel} />
            
            <Modal isVisible={isModalVisible}>
                <ModalBody>
                    <ModalLabelBody><Bold>Bem vindo de volta!</Bold></ModalLabelBody>
                    <ModalLabelBody>Digite sua senha</ModalLabelBody>
                    <InputModal onPress={() => showInputPassword('Senha')}>
                        <AuthInput icon='lock' secury text={password} textClean=' Senha' />
                    </InputModal>
                    
                    <Error>{erro ? erro : null}</Error>
                    <ModalFooter>
                        <ButtonModal onPress={signin}>
                            <ButtonLabel>Entrar</ButtonLabel>
                        </ButtonModal>  
                        <Link onPress={toggleModal}>
                            <LinkLabel>Sair</LinkLabel>
                        </Link>   
                    </ModalFooter>
                    
                    
                </ModalBody>
            
               
            </Modal>
            <ContainerHeader>
                <TitleHeader>My Couple</TitleHeader>
                <ImgHeader source={cardLove} /> 
            </ContainerHeader>
            <Actions>
                <Action onPress={() => navigation.navigate('Register')}>
                    <ActionLabel>Nova conta</ActionLabel>
                </Action>
                <Action onPress={() => navigation.navigate('Login')}>
                    <ActionLabel>Login</ActionLabel>
                </Action>
            </Actions>
        </Container>
    )
}