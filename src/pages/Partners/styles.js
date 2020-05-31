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
    flex:10;
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
export const ButtonSend = styled.TouchableOpacity`
   position: absolute;
   right: 10px;
   bottom: 30px;
   width: 20%;
   height:50px;
   border-radius: 25px;
   background: #14639D;
   justify-content: center;
   align-items:center;
`
export const ButtonShared = styled.TouchableOpacity`
   position: absolute;
   left: 10px;
   bottom: 30px;
   width: 20%;
   height:50px;
   border-radius: 25px;
   background: #14639D;
   justify-content: center;
   align-items:center;
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
    margin: 2% 0;
    align-items: flex-end;
`
export const Header = styled.View`
    flex:2;
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
    height: 80%;
    border-radius:10px;
`
export const ModalBody = styled.View`
    background: #FFFFFF;
    border-radius:30px;
    justify-content: center;
    align-items: center;
    height: 50%;
`
export const Bold = styled.Text`
    font-weight: bold;
`
export const ModalLabelBody = styled.Text`
    font-size: 20px;
    margin-bottom:2%;
`
export const InputModal = styled.TouchableOpacity`

`
export const Error = styled.Text`
    color: red;
    font-size: 15px;
`
export const ModalFooter = styled.View`
    
`
export const ButtonModal = styled.TouchableOpacity`
    width: 200px;
    height:50px;
    background: ${varStyles.colors.contraste};
    border-radius: 15px;
    justify-content:center;
    align-items: center;
`
export const Link = styled.TouchableOpacity`
    justify-content:center;
    align-items: center;
    margin-top: 15px; 
`
export const LinkLabel = styled.Text`
    color: ${varStyles.colors.contraste};
    font-size: 18px;
`