import { StyleSheet } from 'react-native'
import varStyles from '../../varStyles'

export default StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.7)'
    },
    container: {
        backgroundColor: '#FFF',
    },
    header: {
        backgroundColor: varStyles.colors.secundaria,
        color: '#fff',
        textAlign: 'center',
        padding: 15,
        fontSize: 18,
    },
    input:{
        //fontFamily: 'Lato',
        height: 50,
        margin:15,
        fontSize: 25,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderColor: '#E3E3E3',
        borderRadius: 6,
    },
    inputs:{
        margin: 15,
        marginBottom: 0
    },
    buttons: {
        justifyContent: 'center',
        alignItems:'center'
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
    link: {
        margin:15,
        justifyContent:'center',
        alignItems: 'center', 
    },
    linkText:{
        color: varStyles.colors.contraste
    },
    erro: {
        color: 'red',
        fontSize:15,
        //fontFamily: commonStyles.fontFamily,
        marginLeft: '10%'
    },
    buttonText:{
        color: varStyles.colors.text
    }
})