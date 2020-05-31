import { StyleSheet } from 'react-native'
import varStyles from '../../varStyles'
import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    background: ${varStyles.colors.contrasteDark};
`
export const LabelPage = styled.Text`
    color: ${varStyles.colors.text};
    font-size: 24px;
    background: ${varStyles.colors.contraste};
    text-align: center;
`
export const Body = styled.ScrollView.attrs(()=> ({
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: {
        alignItems: 'center',
        paddingLeft: 16
    }
}))`
    flex:6;
    background: ${varStyles.colors.contrasteDark};
`   

export const Partner = styled.View`
    background:#FFFFFF;
    padding: 20px;
    margin: 8px 16px;
    border-radius:18px;
    justify-content: center;
    align-items: center;
`
export const Datas = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
export const Button = styled.TouchableOpacity`
    width: 60%;
    height:50px;
    margin: 2%;
    background: ${varStyles.colors.contraste};
    border-radius: 15px;
    flex-direction: row;
    justify-content:space-evenly;
    align-items: center; 
`
export const Image = styled.Image`
    width: 50px;
    height: 50px;
`
export const NameCurrent = styled.Text`
    font-size: 18px;
    color: black;
`
export const ButtonLabel = styled.Text`
    color: ${varStyles.colors.text};
`
export const Footer = styled.View`

`
export const Header = styled.View`
    flex:1;
    background: ${varStyles.colors.contraste};
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    border-bottom-right-radius:18px;
    border-bottom-left-radius:18px;
    padding: 0 30%;
`
export const ImageCurrent = styled.Image`
    width: 50%;
    height: 100%;
`

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: varStyles.colors.contrasteDark
    },
    item: {
        backgroundColor:'#FFFFFF',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius:18,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageCard: {
        width: 50,
        height: 50, 
    },
    dados:{
       
    },
    title: {
        fontSize: 32,
    },
    header:{
        flex:1,
        backgroundColor: varStyles.colors.contraste,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderBottomRightRadius:18,
        borderBottomLeftRadius:18
    },
    image: {
        width: '20%',
        height: '100%',
        marginHorizontal: '15%',
    },
    titlePage:{
        color: varStyles.colors.text,
        fontSize: 24,
        backgroundColor: varStyles.colors.contraste,
        textAlign: 'center'
    },
    nomeAtual: {
        fontSize: 18,
        color: 'black'
    },
    body: {
        flex:6,
        backgroundColor: varStyles.colors.contrasteDark,
    },
    button: {
        width: '60%',
        height:50,
        margin: '2%',
        backgroundColor: varStyles.colors.contraste,
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent:'space-evenly',
        alignItems: 'center', 
    },
    buttonText: {
        color: varStyles.colors.text
    }
})