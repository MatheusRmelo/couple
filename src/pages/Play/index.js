import React, { useState } from 'react'
import { Text,View, Image, FlatList, TouchableOpacity, ImageBackground } from 'react-native'
import styles, { CategoriesAvailable, Option, Label, Img, TitleCard } from './styles'
import Icon from 'react-native-vector-icons/FontAwesome'
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native'
import Modal from 'react-native-modal'

import api from '../../services/api'


import userImg from '../../assets/images/userImg.png'
import travelImg from '../../assets/images/travelImg.jpg'
import foodImg from '../../assets/images/foodImg.jpg'

const categories = [
    {
        key: String(Math.random()),
        img: travelImg,
        label: 'Viagens'
    },
    {
        key: String(Math.random()),
        img: foodImg,
        label: 'Comidas'
    },
]

const andamento = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        name: 'Comidas',
        action: 'Continuar',
        image: foodImg,
        progress: true
    }
]



export default function Play(props){
    const [isModalVisible, setModalVisible] = useState(false);
    const [isModalWinVisible, setModalWinVisible] = useState(false);
    const [atual, setAtual ] = useState('Fulano X')
    const [winner, setWinner] = useState('fulano Y')
    const [question, setQuestion ] = useState('O que mais te atraiu na pergunta1?')  
    const [option, setOption] = useState(['1','2','3','4'])
    const [count, setCount] = useState(0)
    const [asks, SetAsks] = useState([])
    const [answers, setAnswers] = useState([])
    const [sexo, setSexo] = useState('Masculino')

    const navigation = useNavigation()

    function WinGame(option){
        setModalVisible(false)
        setModalWinVisible(option)
    }
    
    
    async function startGame(name){
        var answer = []
        var ask = []
        if ( name == 'Comidas'){
            if (sexo == 'Masculino'){
                ask = ['O que mais te atraiu na pergunta1?','O que mais te atraiu na pergunta2?','O que mais te atraiu na pergunta3?']
                answer = [['1','2','33','4'],['11','22','33','44'],['12','23','34','45']]
            }
           
        }
        SetAsks(ask)
        setAnswers(answer)
        setQuestion(ask[0])
        setOption(answer[0])
        setModalVisible(true)
    }       

    async function chooseAnswer(answer,cont){

        await setAnswers(answers.splice(0,1))
        await SetAsks(asks.splice(0,1))
       
        if (asks.length>0 && answers.length>0 ){
            setQuestion(asks[0])
            setOption(answers[0])
            
        }else{
            WinGame(true)
            //setOption(['1','2','3','4'])
        }   
            
        
    }
      

    

    function Item({ id, name, selected, action, image, progress }) {
        return (
            <TouchableOpacity onPress={() => startGame(name)} style={styles.item2}>
                <ImageBackground
                    style={styles.item}
                    source={image}
                > 
                    <View style={styles.dados}>
                    <Text style={styles.nomeItem}>{name}</Text>
                    {/* <Image style={styles.imageCard} source={image} /> */}
                    </View>
                    <View style={styles.bottom}>
                        <Icon style={styles.icon} name="play-circle-o" size={60} color="#EE0101" />
                        {
                            progress ?
                            <Progress.Bar color='#EE0101' progress={0.9} width={150} />:
                            null
                        }
                    </View>
                </ImageBackground>
            </TouchableOpacity>
          
        );
    }
    function Playing(){
        return (
            <Modal isVisible={isModalVisible} style={styles.modal}>
                <View style={styles.modalHeader}> 
                    <TouchableOpacity  style={styles.icon} onPress={() => setModalVisible(false)}>
                        <Icon name="close" size={50} color="black" />
                    </TouchableOpacity>
                   
                    <Text style={styles.question}>{question}</Text>
                </View>
                <View style={styles.modalBody}>
                    <TouchableOpacity style={styles.option} onPress={() => WinGame(true)}>
                        <Text style={styles.optionText}>{option[0]}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.option} onPress={() => chooseAnswer(option[1],count)}>
                        <Text  style={styles.optionText}>{option[1]}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.option} onPress={() => chooseAnswer(option[2])}>
                        <Text  style={styles.optionText}>{option[2]}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.option} onPress={() => chooseAnswer(option[3])}>
                        <Text  style={styles.optionText}>{option[3]}</Text>
                    </TouchableOpacity>
                </View>
            </Modal> 
        )
    }


    function Winner(){
        return(
            <Modal isVisible={isModalWinVisible} style={styles.modal}>
                <View style={styles.winnerHeader}> 
                    <Image style={styles.winnerImage} source={userImg}  />
                    <Text style={styles.winnerTitle}>Parabéns, {winner}</Text>
                </View>
                <View style={styles.winnerBody}>
                    <View style={styles.winnerItems}>
                        <Text style={styles.winnerTitleItem}>Vencedor</Text>
                        <View style={styles.winnerItem}>
                            <View style={styles.winnerOptions}>
                                <Text style={styles.winnerTitleOption}> Acerto(s) </Text>
                                <Text style={styles.correct}>10</Text>
                            </View>
                            <View  style={styles.winnerOptions}>
                                <Text style={styles.winnerTitleOption}> Erro(s) </Text>
                                <Text style={styles.wrong}>8</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.winnerItems}>
                        <Text style={styles.winnerTitleItem}>Perdedor</Text>
                        <View style={styles.winnerItem}>
                            <View style={styles.winnerOptions}>
                                <Text style={styles.winnerTitleOption}> Acerto(s) </Text>
                                <Text style={styles.correct}>8</Text>
                            </View>
                            <View  style={styles.winnerOptions}>
                                <Text style={styles.winnerTitleOption}> Erro(s) </Text>
                                <Text style={styles.wrong}>10</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.winnerFooter}>
                    <TouchableOpacity style={styles.button} onPress={() => WinGame(false)}>
                        {/* <Icon name="arrow-right" size={30} color="#FFFFFF" /> */}
                        <Text style={styles.buttonText}>Continuar</Text>
                    
                    </TouchableOpacity>
                </View>
            
            </Modal> 
        )
    }


    return (
        <View style={styles.container}>
            <Playing />
            <Winner />

            <Text style={styles.titlePage}>Parceiro atual</Text>
            <View style={styles.header}> 
                <Image style={styles.image} source={userImg} width={50} height={50} />
                <Text style={styles.nomeAtual}>{atual}</Text>
            </View>
            <View style={styles.body}>
               <TitleCard>Disponivéis</TitleCard>
                <CategoriesAvailable>
                    {categories.map((item) => (
                        <Option onPress={()=>startGame(item.label)}
                            key={item.key}>
                            <Img source={item.img} />
                            <Label>{item.label}</Label>
                        </Option>
                    ))}
                </CategoriesAvailable>
               
                {/* <Text style={styles.titleCards}>Em andamento</Text>
               <FlatList
                    data={andamento}
                    style={styles.items}
                    renderItem={({ item }) => (
                        <Item
                        id={item.id}
                        name={item.name}
                        action = {item.action}
                        image = {item.image}
                        progress = {item.progress}
                        />
                    )}
                    keyExtractor={item => item.id}
                    horizontal={true}       
                /> */}
            </View>
            <View style={styles.body}>
               <TitleCard>Em andamento</TitleCard>
                <CategoriesAvailable>
                    {categories.map((item) => (
                        <Option
                            key={item.key}>
                            <Img source={item.img} />
                            <Label>{item.label}</Label>
                            <Progress.Bar color='blue' progress={0.9} style={{width:'100%'}}/>
                        </Option>
                    ))}
                </CategoriesAvailable>
            </View>
        </View>
    )
}
