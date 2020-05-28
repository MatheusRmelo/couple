import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-community/async-storage'
import {
    Container, 
    Header,
    Img,
    Label,
    Body,
    Footer,
    ClickInput,
    Button,
    ButtonLabel
} from './styles'

import api, { showError, showSuccess } from '../../services/api'

import Loading from '../../components/Loading'
import InputEmail from '../../components/InputEmail'
import InputPassword from '../../components/InputPassword'
import AuthInput from '../../components/AuthInput'

import cardLove from '../../assets/images/cardLove.png'



export default function Login(props){
    const [showEmail, setShowEmail] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [text, setText] = useState('')
 
    const navigation = useNavigation()

    function cancel(){
        setShowEmail(false)
        setShowPassword(false)
    }
    function showInputs(text){
        setText(text)
        if (text === 'E-mail')
            setShowEmail(true)
        if( text === 'Senha' )
            setShowPassword(true)
    }
    function save(text, type){
        if (type === 'E-mail')
            setEmail(text)
        if (type === 'Password')
            setPassword(text)
        cancel()    
    }
    async function checkLogin(){
        const userDataJson = await AsyncStorage.getItem('mycouple_userData')
        let userData = null
        try {
            userData = JSON.parse(userDataJson)    
        } catch(e) {
            //User Data inválido
        }
        //console.log(userData)
        if( userData && email ==='' ) {
            setEmail(userData.email)
        }
    }
    useEffect(
         () => {     
            checkLogin()
        }
    );

    async function login(){
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
            setLoading(false)        
        }catch(err){
            showError(err)
            setLoading(false)  
        }
    }

    return (
        <Container>
            <InputEmail onSave={email => save(email,'E-mail') } isVisible={showEmail} text={text} onCancel={cancel} />
            <InputPassword onSave={password => save(password,'Password')} isVisible={showPassword} text={text} onCancel={cancel} />
            <Loading isVisible={loading} />
            
            <Header>
                <Img source={cardLove} />
            </Header>

            <Body>
                <Label>
                    Seu e-mail
                </Label>
                <ClickInput  onPress={() => showInputs('E-mail')}>
                    <AuthInput icon='at' text={email} textClean=' E-mail' />
                </ClickInput>
                <Label>
                    Seu Senha
                </Label>
                <ClickInput onPress={() => showInputs('Senha')}>
                    <AuthInput icon='lock' secury text={password} textClean=' Senha' />
                </ClickInput>

            </Body>
            <Footer>
                <Button onPress={login}>
                    <ButtonLabel>Entrar</ButtonLabel>
                </Button>
            </Footer>
        </Container>
    )
}