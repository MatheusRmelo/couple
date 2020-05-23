import React, { useState } from 'react'
import { Text,View, Image, FlatList, TouchableOpacity, ImageBackground } from 'react-native'
import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome'
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native'
import Modal from 'react-native-modal'



import userImg from '../../assets/images/userImg.png'
import travelImg from '../../assets/images/travelImg.jpg'
import foodImg from '../../assets/images/foodImg.jpg'

const disponiveis = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        name: 'Viagens',
        action: 'Jogar agora',
        image: travelImg,
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        name: 'Second part',
        action: 'Jogar agora',
        image: travelImg,
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        name: 'Third part',
        action: 'Jogar agora',
        image: travelImg,
    },
    
];
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
    const [option, setOption] = useState(['resposta1','resposta2','resposta3','resposta4'])

    const navigation = useNavigation()

    function PlayGame(){
       setModalVisible(true)
    }
    function WinGame(option){
        setModalVisible(false)
        setModalWinVisible(option)
    }
    
    

    function Item({ id, name, selected, action, image, progress }) {
        return (
            <TouchableOpacity onPress={PlayGame} style={styles.item2}>
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
                    <Text style={styles.question}>{question}</Text>
                </View>
                <View style={styles.modalBody}>
                    <TouchableOpacity style={styles.option} onPress={() => WinGame(true)}>
                        <Text style={styles.optionText}>{option[0]}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.option} onPress={() => setModalVisible(false)}>
                        <Text  style={styles.optionText}>{option[1]}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.option} onPress={() => {}}>
                        <Text  style={styles.optionText}>{option[2]}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.option} onPress={() => {}}>
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
               <Text style={styles.titleCards}>Disponivéis</Text>
               <FlatList
                    style={styles.items}
                    data={disponiveis}
                    renderItem={({ item }) => (
                        <Item
                        id={item.id}
                        name={item.name}
                        action = {item.action}
                        image = {item.image}
                        />
                    )}
                    keyExtractor={item => item.id}
                    horizontal={true}       
                />
                <Text style={styles.titleCards}>Em andamento</Text>
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
                />
            </View>
        </View>
    )
}
