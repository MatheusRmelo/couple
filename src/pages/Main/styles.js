import { StyleSheet } from 'react-native'
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
`
export const Action = styled.TouchableOpacity`
    width: 40%;
    margin:10px;
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
export const ModalHeader = styled.View`
    justify-content: center;
    align-items: center;
    background: ${varStyles.colors.secundaria};
    height:8%;
    border-radius: 30;
`
export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: varStyles.colors.principal,
    },
    image: {
        width:'90%',
        height:'70%'
    },
    title:{
        color: varStyles.colors.text,
        fontSize: 36
    },
    header:{
        flex:4,
        justifyContent:'center',
        alignItems: 'center',
        width: '100%'
    },
    body:{
        flex: 2,
        flexDirection: 'row'
    },
    button: {
        width: '40%',
        margin:10,
        height:50,
        backgroundColor: varStyles.colors.secundaria,
        borderRadius: 15,
        justifyContent:'center',
        alignItems: 'center',
    },
    buttonText: {
        color: varStyles.colors.text,
        fontSize: 14,
    },
    modalBody: {
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0, 
        justifyContent: "center",
        alignItems: 'center',
        height: '50%',
    },
    modalHeader: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: varStyles.colors.secundaria,
        height:'8%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },
    textModalHeader:{
        color: varStyles.colors.text,
        fontSize: 20
    },
    textTitleModal: {
        fontSize: 20,
    },
    buttonModal: {
        width: 200,
        height:50,
        backgroundColor: varStyles.colors.contraste,
        borderRadius: 15,
        justifyContent:'center',
        alignItems: 'center',
    },
    link: {
        justifyContent:'center',
        alignItems: 'center',
        marginTop: 15, 
    },
    linkText: {
        color: varStyles.colors.contraste,
        fontSize: 18
    },
    inputModal: {
        marginTop: '1%',
        width: '90%',
        height: '20%'
    }
    


})