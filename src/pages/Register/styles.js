import { StyleSheet } from 'react-native'
import varStyles from '../../varStyles'
export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: varStyles.colors.principal,
    },
    button: {
        width: 200,
        margin:10,
        height:50,
        backgroundColor: varStyles.colors.secundaria,
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
    }


})