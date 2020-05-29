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
    Button,
    ModalBody,
    IconClick,
    ModalIcon,
    ModalButtons,
    ModalButton,
    ModalLabel
} from './styles'

import { useNavigation } from '@react-navigation/native'

import AsyncStorage from '@react-native-community/async-storage'

import api, { showError, showSuccess } from '../../services/api'
import axios from 'axios'

import Loading from '../../components/Loading'

import Icon from 'react-native-vector-icons/FontAwesome'


import userImg from '../../assets/images/userImg.png'

import InputEmail from '../../components/InputEmail'
import InputPassword from '../../components/InputPassword'
import AuthInput from '../../components/AuthInput'
import InputName from '../../components/Input'

import ImagePicker from 'react-native-image-picker'
import DropDownPicker from 'react-native-dropdown-picker';
import Modal from 'react-native-modal'

const options = {
    title: 'Escolha a imagem',
    maxHeight: 600,
    maxWidth: 800
}


export default function Register(){
    const [showEmail, setShowEmail] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [showInput, setShowInput] = useState(false)
    const [loading, setLoading] = useState(false)
    const [sexo, setSexo] = useState('Feminino')
    const [erro, setErro] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isVisible, setisVisible] = useState(false)
    const [text, setText] = useState('')
    const [imgUrl, setImgUrl] = useState(userImg)
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
    function openOptionPhoto(){
        setisVisible((prevState) => !prevState)
    }
    function pickImageCamera(){
        ImagePicker.launchCamera(options, (res) => {
            if(!res.didCancel){
                setImgUrl({uri: res.uri, base64: res.data})
                setisVisible(false)
            }
        })
    }
    function pickImageGallery(){
        ImagePicker.launchImageLibrary(options, (res) => {
            if(!res.didCancel){
                setImgUrl({uri: res.uri, base64: res.data})
                setisVisible(false)
            }
        })
    }

    async function register(){
        await setLoading(true)
        var profile_img = ''
        
        await axios.post('https://us-central1-teeste-c9030.cloudfunctions.net/uploadImage',{
            image: imgUrl.base64
        })
        .then( async resp => {
            profile_img = resp.data.imageUrl
            try {
                await api.post('signup',{
                    name,
                    profile_img,
                    sexo,
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
                setLoading(false)
            }catch(err){
                showError(err)
                setLoading(false)
            }
        })
        .catch(err => {
            setLoading(false)
            showError(err)
        })
       
    }
    return (
        <Container>
            <InputEmail onSave={email => save(email,'E-mail') } isVisible={showEmail} text={text} onCancel={cancel} />
            <InputPassword onSave={password => save(password,'Password')} isVisible={showPassword} text={text} onCancel={cancel} />
            <InputName onSave={name => save(name,'Name')} isVisible={showInput} text={text} onCancel={cancel} />
            <Loading isVisible={loading} />
            <Modal isVisible={isVisible}>
                <ModalBody>
                    <ModalIcon>
                        <IconClick onPress={openOptionPhoto}>
                            <Icon name="close" size={35} />
                        </IconClick>
                    </ModalIcon>    
                    <ModalLabel>
                        Onde está a foto?
                    </ModalLabel>
                    <ModalButtons>
                        <ModalButton onPress={pickImageCamera}>
                            <Icon style={{marginRight: 20}} name="camera" size={30} color="#FFF" />
                            <ButtonLabel>Câmera</ButtonLabel>
                        </ModalButton>
                        <ModalButton onPress={pickImageGallery}>
                            <Icon style={{marginRight: 20}} name="file-image-o" size={30} color="#FFF" />
                            <ButtonLabel>Galeria</ButtonLabel>
                        </ModalButton>
                    </ModalButtons>
                    
                </ModalBody>
            </Modal>

            <Header>
                <ButtonPerfil onPress={openOptionPhoto}>
                    <Icon name="camera" size={30} color='white'/> 
                    <ButtonLabel>Adicionar Imagem</ButtonLabel>
                </ButtonPerfil>
                <Img source={imgUrl}  />
            </Header>
            <Body>
                <Label>
                    Seu nome
                </Label >
                <ClickInput  onPress={() => showInputs('Nome')}>
                    <AuthInput icon='user' text={name} textClean=' Nome' />
                </ClickInput>
                <Label>
                    Seu sexo
                </Label >
                <DropDownPicker
                    items={[
                        {label: 'Feminino', value: 'item1'},
                        {label: 'Masculino', value: 'item2'},
                    ]}
                    defaultValue="item1"
                    containerStyle={{height: 40}}
                    style={{backgroundColor: '#fafafa'}}
                    dropDownStyle={{backgroundColor: '#fafafa'}}
                    onChangeItem={item => setSexo(item.label)}
                />
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