import React, { useState } from 'react'
import {
    Container,
    Header,
    ButtonPerfil,
    ButtonLabel,
    Img,
    Body,
    Label,
    ClickInput,
    Footer,
    Button
} from './styles'

import { useNavigation } from '@react-navigation/native'
import api, { showError, showSuccess } from '../../services/api'

import Icon from 'react-native-vector-icons/FontAwesome'


import userImg from '../../assets/images/userImg.png'

import InputEmail from '../../components/InputEmail'
import InputPassword from '../../components/InputPassword'
import AuthInput from '../../components/AuthInput'
import InputName from '../../components/Input'



export default function Register(){
    const [showEmail, setShowEmail] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [showInput, setShowInput] = useState(false)
    const [erro, setErro] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [text, setText] = useState('')

    const navigation = useNavigation()
 
    function cancel(){
        setShowEmail(false)
        setShowPassword(false)
        setShowInput(false)
    }
    function showInputs(text){
        setText(text)
        if (text === 'E-mail')
            setShowEmail(true)
        if( text === 'Nome' )
            setShowInput(true)
        if( text === 'Senha' )
            setShowPassword(true)
    }
    function save(text, type){
        if (type === 'E-mail')
            setEmail(text)
        if (type === 'Name')
            setName(text)
        if (type === 'Password')
            setPassword(text)
        cancel()    
    }

    async function register(){
        try {
            await api.post('signup',{
                name,
                email,
                password
            })
            const res = await api.post('signin',{
                email,
                password
            })
            AsyncStorage.setItem('mycouple_userData', JSON.stringify(res.data))
            api.defaults.headers.common['Authorization'] = `bearer ${res.data.token}`
            navigation.navigate('Menu')
            showSuccess('Sucesso no cadastro')
        }catch(err){
            showError(err)
        }
    }
    return (
        <Container>
            <InputEmail onSave={email => save(email,'E-mail') } isVisible={showEmail} text={text} onCancel={cancel} />
            <InputPassword onSave={password => save(password,'Password')} isVisible={showPassword} text={text} onCancel={cancel} />
            <InputName onSave={name => save(name,'Name')} isVisible={showInput} text={text} onCancel={cancel} />
             
            <Header>
                <ButtonPerfil onPress={() => {}}>
                    <Icon name="camera" size={30} color='white'/> 
                    <ButtonLabel>Adicionar Imagem</ButtonLabel>
                </ButtonPerfil>
                <Img source={userImg}  />
            </Header>
            <Body>
                <Label>
                    Seu nome
                </Label >
                <ClickInput  onPress={() => showInputs('Nome')}>
                    <AuthInput icon='user' text={name} textClean=' Nome' />
                </ClickInput>
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
                <Button onPress={register}>
                    <ButtonLabel>Criar conta</ButtonLabel>
                </Button>
            </Footer>
        </Container>
    )
}