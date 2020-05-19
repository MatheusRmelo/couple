import { StyleSheet } from 'react-native'
import varStyles from '../../varStyles'

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: varStyles.colors.principal,
    },
    image: {
        width:'70%',
        height:'100%'
    },
    
    button: {
        width: 200,
        margin:10,
        height:50,
        backgroundColor:varStyles.colors.contraste,
        borderRadius: 15,
        justifyContent:'center',
        alignItems: 'center',
    },
    buttonText: {
        color: varStyles.colors.text,
        fontSize:15,
    },
    header:{
        flex:4,
        justifyContent: 'center',
        alignItems: 'center',
        width:'100%'
    }
    ,
    body:{
        flex:3
    },
    footer:{
        flex:3,
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
    }


})