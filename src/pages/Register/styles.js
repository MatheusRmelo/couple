import { StyleSheet } from 'react-native'
import varStyles from '../../varStyles'
export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: varStyles.colors.principal,
    },
    
    header:{
        flex:3,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width:'80%'
    }
    ,
    body:{
        flex:6
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
    },
    image: {
        width:'40%',
        height:'90%'
    },
    button: {
        width: 200,
        height:50,
        backgroundColor: varStyles.colors.contraste,
        borderRadius: 15,
        justifyContent:'center',
        alignItems: 'center',
    },
    buttonText: {
        color: varStyles.colors.text,
        fontSize: 14,
    },
    buttonPerfil: {
        width: '50%',
        height:60,
        backgroundColor: varStyles.colors.contraste,
        borderRadius: 15,
        justifyContent:'center',
        alignItems: 'center',
    },


})