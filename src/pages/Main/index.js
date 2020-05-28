import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-community/async-storage'

import Loading from '../../components/Loading'

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
    const [isModalVisible, setModalVisible] = useState(false);
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('')
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
        await setLoading(true)
        try {
            const res = await api.post('signin',{
                email,
                password
            })
            AsyncStorage.setItem('mycouple_userData', JSON.stringify(res.data))
            api.defaults.headers.common['Authorization'] = `bearer ${res.data.token}`
            navigation.navigate('Menu')
            showSuccess('Sucesso no login')
            setPassword('')
            setModalVisible(false)
            setLoading(false) 
        }catch(err){
            showError(err)
            setLoading(false) 
            setModalVisible(true)
            setErro(err)
            setPassword('')
        }
    }
    async function checkLogin(){
        await setLoading(true)
        const userDataJson = await AsyncStorage.getItem('mycouple_userData')
        let userData = null
        try {
            userData = JSON.parse(userDataJson)    
        } catch(e) {
            //User Data inválido
        }
        //console.log(userData)
        if( userData ) {
            setModalVisible(true) 
            setEmail(userData.email)
            setLoading(false)
        } else {
            setModalVisible(false)
            setLoading(false)
        }
    }
    useEffect(() => {
        checkLogin()
    }, [])


    return (
        <Container>
            <InputPassword onSave={password => savePassword(password)} isVisible={showPassword} text={text} onCancel={cancel} />
            <Loading isVisible={loading} />
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