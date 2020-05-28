import varStyles from '../../varStyles'
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;
    background: ${varStyles.colors.principal};
`
export const Header = styled.View`
    flex: 3;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 80%;
`
export const ButtonPerfil = styled.TouchableOpacity`
    width: 50%;
    height:60px;
    background: ${varStyles.colors.contraste};
    border-radius: 15px;
    justify-content:center;
    align-items: center;
`
export const ButtonLabel = styled.Text`
    color: ${varStyles.colors.text};
    font-size: 14px;
`
export const Img = styled.Image`
    width:40%;
    height:90%;
`
export const Body = styled.View`
    flex: 6;
`
export const Label = styled.Text`
    color: #FFF;
    font-size:18px;
    text-align: center;
    margin: 2px 0;
`
export const ClickInput = styled.TouchableOpacity``
export const Footer = styled.View`
    flex: 3;
    margin-top: 20px;
`
export const Button = styled.TouchableOpacity`
    width: 250px;
    height:50px;
    background: ${varStyles.colors.contraste};
    border-radius: 15px;
    justify-content:center;
    align-items: center;
`
export const ModalBody = styled.View`
    background: #FFFFFF;
    border-radius:30px;
    height: 50%;
`
export const IconClick = styled.TouchableOpacity`

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