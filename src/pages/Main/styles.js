import varStyles from '../../varStyles'
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
    background: ${varStyles.colors.principal};
    flex:1;
`
export const ContainerHeader = styled.View`
    flex: 4;
    justify-content:center;
    align-items:center;
    width: 100%;
`
export const TitleHeader = styled.Text`
    color: ${varStyles.colors.text};
    font-size:36px;
`
export const ImgHeader = styled.Image`
    width:90%;
    height:70%;
`
export const Actions = styled.View`
    flex: 2;
    flex-direction:row;
    justify-content: space-around;
    margin-top: 5%;
`
export const Action = styled.TouchableOpacity`
    width: 40%;
    height:50px;
    background: ${varStyles.colors.secundaria};
    border-radius: 15px;
    justify-content:center;
    align-items: center;
`
export const ActionLabel = styled.Text`
    color: ${varStyles.colors.text};
    font-size: 14px;
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
export const ButtonLabel = styled.Text`
    color: ${varStyles.colors.text};
    font-size: 14px;
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