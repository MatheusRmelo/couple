import { StyleSheet } from 'react-native'
import varStyles from '../../varStyles'
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: varStyles.colors.principal,
    }, 
    button: {
        width: 200,
        margin:10,
        height:50,
        backgroundColor: varStyles.colors.contraste,
        borderRadius: 15,
        justifyContent:'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFF',
        fontSize:15,
    },
    footer:{
        marginTop:20
    },
    textHeader: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    text:{
        color: '#FFF',
        fontSize: 20,
        textAlign: 'center'
    },
   
    header:{
        flex:1,
        backgroundColor: varStyles.colors.principal,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 15
    },
    question: {
        color: varStyles.colors.text,
        fontSize: 28,
    },
    
    body:{
        flex:6,
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    option: {
        width: '80%',
        margin:10,
        height:'15%',
        backgroundColor: varStyles.colors.contraste,
        borderRadius: 15,
        justifyContent:'center',
        alignItems: 'center',
    },
    optionText: {
        color: varStyles.colors.text,
        fontSize: 18
    }



})