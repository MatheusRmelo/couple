import { StyleSheet } from 'react-native'
import varStyles from '../../varStyles'
import styled from 'styled-components'

export const ModalBody = styled.View`
    background: #FFFFFF;
    border-radius:30px;
    height: 50%;
`
export const ButtonLabel = styled.Text`
    color: ${varStyles.colors.text};
    font-size: 14px;
`
export const ModalIcon = styled.View`
    flex:1;
    justify-content: center;
    align-items: flex-end;
    padding: 15px;
`
export const ModalButtons = styled.View`
    flex: 9;
    align-items: center;
    padding: 30px;
`
export const ModalBodyOptions = styled.View`
    background: #FFFFFF;
    border-radius:30px;
    height:35%;
`
export const ModalButtonsOptions = styled.View`
    flex: 9;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    padding: 30px;
`
export const ModalButtonOptions = styled.TouchableOpacity`
    width:50%;
    height:100%;
    background: ${varStyles.colors.contraste};
    border-radius: 15px;
    justify-content:center;
    align-items: center;
    flex-direction:row;
    margin: 0 5%;
`

export const ModalButton = styled.TouchableOpacity`
    width:100%;
    height:35%;
    background: ${varStyles.colors.contraste};
    border-radius: 15px;
    justify-content:center;
    align-items: center;
    flex-direction:row;
    margin-bottom:5%;
`
export const ModalLabel = styled.Text`
    font-weight: bold;
    font-size:18px;
    text-align: center;
    margin: 2px 0;
`
export const IconClick = styled.TouchableOpacity`

`
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: varStyles.colors.contrasteDark,
    }, 
       
    header:{
        flex:2,
        backgroundColor: varStyles.colors.secundaria,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomRightRadius:18,
        borderBottomLeftRadius:18
    },
    body:{
        flex:3,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: '15%'
    },
    footer:{
        flex:6,
        justifyContent:'center',
        alignItems: 'flex-end'
    },
    image: {
        width: '90%',
        height: '100%',
        marginHorizontal: '15%',
        borderRadius:10
    },
    borderImage:{
        backgroundColor: '#FFF',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        marginRight: 10
    },
    titlePage:{
        color: varStyles.colors.text,
        fontSize: 24,
        backgroundColor:  varStyles.colors.secundaria,
        textAlign: 'center'
    },
    nomeAtual: {
        fontSize: 18,
        color: varStyles.colors.text,
    },
    title: {
        color: varStyles.colors.text,
        fontSize: 15
    },
    buttonPhoto: {
        width: '40%',
        marginVertical:10,
        height:50,
        backgroundColor: '#1C2429',
        borderRadius: 15,
        justifyContent:'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
    },
    buttonText: {
        color: varStyles.colors.text
    },
    button: {
        width: '40%',
        marginVertical:5,
        marginRight: 25,
        height:50,
        backgroundColor: varStyles.colors.secundaria,
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent:'space-evenly',
        alignItems: 'center',
    },
    buttonPrimary: {
        width: '60%',
        marginVertical:5,
        marginHorizontal: 25,
        height:50,
        backgroundColor: '#14639D',
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent:'space-evenly',
        alignItems: 'center',  
    }


})