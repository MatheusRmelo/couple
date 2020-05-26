import varStyles from '../../varStyles'
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
    background: ${varStyles.colors.principal};
    flex:1;
    align-items: center;
`
export const Header = styled.View`
    flex:3;
    align-items: center;
    justify-content:center;
    width: 100%;
`
export const Img = styled.Image`
    width: 50%;
    height: 90%;
`
export const Label = styled.Text`
    color: #FFF;
    font-size:18px;
    text-align: center;
    margin: 2px 0;
`
export const Body = styled.View`
    flex:3;
`
export const Footer = styled.View`
    flex: 3;
`
export const ClickInput = styled.TouchableOpacity``
export const Button = styled.TouchableOpacity`
    width: 250px;
    height:50px;
    background: ${varStyles.colors.contraste};
    border-radius: 15px;
    justify-content:center;
    align-items: center;
`
export const ButtonLabel = styled.Text`
    color: ${varStyles.colors.text};
    font-size: 14px;
`