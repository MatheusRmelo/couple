import { StyleSheet } from 'react-native'
import varStyles from '../../varStyles'
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: varStyles.colors.contrasteDark,
    }, 
       
    header:{
        flex:2,
        backgroundColor: varStyles.colors.secundaria,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderBottomRightRadius:18,
        borderBottomLeftRadius:18
    },
    body:{
        flex:3,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 30
    },
    footer:{
        flex:6,
        justifyContent:'center',
        alignItems: 'flex-end'
    },
    image: {
        width: '20%',
        height: '100%',
        marginHorizontal: '15%',
    },
    titlePage:{
        color: varStyles.colors.text,
        fontSize: 24,
        backgroundColor:  varStyles.colors.secundaria,
        textAlign: 'center'
    },
    nomeAtual: {
        fontSize: 18,
        color: varStyles.colors.text,
    },
    title: {
        color: varStyles.colors.text,
        fontSize: 20
    },
    buttonPhoto: {
        width: '40%',
        marginVertical:10,
        height:50,
        backgroundColor: '#1C2429',
        borderRadius: 15,
        justifyContent:'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
    },
    buttonText: {
        color: varStyles.colors.text
    },
    button: {
        width: '40%',
        marginVertical:5,
        marginHorizontal: 10,
        height:50,
        backgroundColor: varStyles.colors.secundaria,
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent:'space-evenly',
        alignItems: 'center',
    },
    buttonPrimary: {
        width: '60%',
        marginVertical:5,
        marginHorizontal: 10,
        height:50,
        backgroundColor: '#14639D',
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent:'space-evenly',
        alignItems: 'center',  
    }


})