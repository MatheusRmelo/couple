import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome'
import {
    ModalBody,
    IconClick,
    ModalIcon,
    ModalButtons,
    ModalButton,
    ModalLabel,
    ButtonLabel,
    ModalButtonsOptions,
    ModalButtonOptions,
    ModalBodyOptions
} from './styles'

import AsyncStorage from '@react-native-community/async-storage'

import { useNavigation } from '@react-navigation/native'

import userImg from '../../assets/images/userImg.png'
import AuthInput from '../../components/AuthInput'
import Input from '../../components/Input'
import InputEmail from '../../components/InputEmail'
import Loading from '../../components/Loading'

import api, { showError, showSuccess } from '../../services/api'
import axios from 'axios'


import ImagePicker from 'react-native-image-picker'
import Modal from 'react-native-modal'
import DropDownPicker from 'react-native-dropdown-picker';

const options = {
    title: 'Escolha a imagem',
    maxHeight: 600,
    maxWidth: 800
}
export default function Profile(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [img, setImg] = useState(null) 
    const [loading, setLoading] = useState(false)
    const [imgOld, setimgOld] = useState(null)
    const [isVisible, setisVisible] = useState(false)
    const [sexo, setSexo] = useState('')
    const [imgUrl, setImgUrl] = useState(null) 
    const [question, setQuestion] = useState('')
    const [action,setAction] = useState('')
    const [modalQuestion, setModalQuestion] = useState(false)

    const [showEmail, setShowEmail] = useState(false)
    const [showInput, setShowInput] = useState(false)

    const [text, setText] = useState('')

    const navigation = useNavigation()

    function openOptionPhoto(){
        setisVisible((prevState) => !prevState)
    }
    async function verifyAction(action){
        if ( action == 'Delete'){
            await setQuestion('excluir as informações conta')
            setModalQuestion(true)
            setAction(action)
        }else
        if ( action == 'Update'){
            await setQuestion('alterar as informações da conta')
            setModalQuestion(true)
            setAction(action)
        }else
        if ( action == 'Logout'){
            await setQuestion('sair')
            setModalQuestion(true)
            setAction(action)
        }
        else
            setModalQuestion(false)
    }
    function pickImageCamera(){
        ImagePicker.launchCamera(options, (res) => {
            if(!res.didCancel){
                setImgUrl({uri: res.uri, base64: res.data})
                setimgOld(img)
                setImg(res.uri)
                setisVisible(false)
            }
        })
    }
    function pickImageGallery(){
        ImagePicker.launchImageLibrary(options, (res) => {
            if(!res.didCancel){
                setImgUrl({uri: res.uri, base64: res.data})
                setImg(res.uri)
                setimgOld(img)
                setisVisible(false)
            }
        })
    }

    function cancel(){
        setShowEmail(false)
        setShowInput(false)
    }

    function saveName(name){
        setName(name)
        setShowInput(false)
    }
    function saveEmail(email){
        setEmail(email)
        setShowEmail(false)
    }

    function showInputName(text){
        setText(text)
        setShowInput(true)
    }
    function showInputEmail(text){
        setText(text)
        setShowEmail(true)
    }
    async function getInfos(){
        const userDataJson = await AsyncStorage.getItem('mycouple_userData')
        let userData = null
        try {
            userData = JSON.parse(userDataJson)    
        } catch(e) {
            //User Data inválido
        }
        //console.log(userData)
        if( userData && email ==='' ) {
            setSexo(userData.sexo)
            setEmail(userData.email)
            setName(userData.name)
            setImg(userData.profile_img)
            
        }
    }
    function logout(){
        navigation.navigate('Main')
    }
    function chooseAction(action){
        if (action == 'Delete')
            deleteUser()
        if ( action == 'Update')
            update()
        if ( action == 'Logout')
            logout()
        
    }
    async function deleteUser(){
        await setLoading(true)
        try {
            await api.delete('user')
            showSuccess('Usuário deletado com sucesso')
            delete api.defaults.headers.common['Authorization']
            AsyncStorage.removeItem('mycouple_userData')
            setLoading(false)
            navigation.navigate('Main')
        } catch(err){
            showError(err)
            setLoading(false)
        }
    }
    async function changePassword(){
        await setLoading(true)
        if( true ){
            try {
                await api.post('user', {
                    password: '224488'
                })
                setLoading(false)
            }catch(err){
                showError(err)
                setLoading(false)
            }
        }
    } 
    async function update(){
        await setLoading(true)
        if ( imgOld ) {
            var profile_img = ''
            
            await axios.post('https://us-central1-teeste-c9030.cloudfunctions.net/uploadImage',{
                image: imgUrl.base64
            })
            .then( async resp => {
                profile_img = resp.data.imageUrl
                try {
                    await api.put('user',{
                        name,
                        profile_img,
                        sexo,
                        email
                    })
                    showSuccess('Informações alteradas')
                    setLoading(false)
                }catch(err){
                    showError(err)
                    setLoading(false)
                }
                setLoading(false)
            })
            .catch(err => {
                setLoading(false)
                showError(err)
            })
        }else{
            try {
                await api.put('user',{
                    name,
                    profile_img: img,
                    sexo,
                    email
                })
                showSuccess('Informações alteradas')
                setLoading(false)
            }catch(err){
                showError(err)
                setLoading(false)
            }
        }

    }

    useEffect(
         () => {     
            getInfos()
        }
    );


    return(
        <View style={styles.container}>
            <Input onSave={name => saveName(name)} isVisible={showInput} text={text} onCancel={cancel} name={name} />
            <InputEmail onSave={email => saveEmail(email)} isVisible={showEmail} text={text} onCancel={cancel} email={email} />
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
            <Modal isVisible={modalQuestion}>
                <ModalBodyOptions>
                    <ModalIcon>
                        <IconClick onPress={() => verifyAction('')}>
                            <Icon name="close" size={35} />
                        </IconClick>
                    </ModalIcon>    
                    <ModalLabel>
                        Deseja realmente {question}?
                    </ModalLabel>
                    <ModalButtonsOptions>
                        <ModalButtonOptions onPress={() => chooseAction(action)}>
                            <ButtonLabel>Sim</ButtonLabel>
                        </ModalButtonOptions>
                        <ModalButtonOptions onPress={() => verifyAction('')}>
                            <ButtonLabel>Não</ButtonLabel>
                        </ModalButtonOptions>
                    </ModalButtonsOptions>
                    
                </ModalBodyOptions>
            </Modal>




            <Text style={styles.titlePage}>Meu Perfil</Text>
            <View style={styles.header}> 
                <View style={styles.borderImage}>
                    <Image style={styles.image} source={img  ? {uri: img} : userImg}   />
                </View>
                
                <TouchableOpacity style={styles.buttonPhoto} onPress={openOptionPhoto}>
                    <Icon name="camera" size={20} color="#FFFFFF"/>
                    <Text style={styles.buttonText}>Mudar foto</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.body}>
                <Text style={styles.title}>Seu nome</Text>
                <TouchableOpacity style={styles.input}  onPress={() => showInputName('Nome')}>
                    <AuthInput icon='user' text={name} textClean=' nome' />
                </TouchableOpacity>
                <Text style={styles.title}>E-mail</Text>
                <TouchableOpacity style={styles.input}   onPress={() => showInputEmail('E-mail')}>
                    <AuthInput icon='at' text={email} textClean=' E-mail' />
                </TouchableOpacity>
                <Text style={styles.title}>Sexo</Text>
                <DropDownPicker
                    items={[
                        {label: 'Feminino', value: 'Feminino'},
                        {label: 'Masculino', value: 'Masculino'},
                    ]}
                    defaultValue={sexo}
                    containerStyle={{height: 40}}
                    style={{backgroundColor: '#fafafa', width: '80%'}}
                    dropDownStyle={{backgroundColor: '#fafafa'}}
                    onChangeItem={item => setSexo(item.label)}
                />
            </View>
           
            
            <View style={styles.footer}>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity style={styles.button} onPress={() => verifyAction('Delete')}>
                        <Icon name="trash" size={30} color="#FFFFFF"/>
                        <Text style={styles.buttonText}>Excluir conta</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.button} onPress={changePassword}>
                        <Icon name="edit" size={30} color="#FFFFFF"/>
                        <Text style={styles.buttonText}>Mudar senha</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => verifyAction('Logout')}>
                        <Icon name="sign-out" size={30} color="#FFFFFF"/>
                        <Text style={styles.buttonText}>Sair</Text>
                    </TouchableOpacity>
                <TouchableOpacity style={styles.buttonPrimary} onPress={() => verifyAction('Update')}>
                    <Icon name="save" size={30} color="#FFFFFF"/>
                    <Text style={styles.buttonText}>Atualizar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}