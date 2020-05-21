import { StyleSheet } from 'react-native'
import varStyles from '../../varStyles'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: varStyles.colors.contrasteDark
    },
    item: {
        backgroundColor:'#FFFFFF',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius:18,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageCard: {
        width: 50,
        height: 50, 
    },
    dados:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 32,
    },
    header:{
        flex:1,
        backgroundColor: varStyles.colors.contraste,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderBottomRightRadius:18,
        borderBottomLeftRadius:18
    },
    image: {
        width: '20%',
        height: '100%',
        marginHorizontal: '15%',
    },
    titlePage:{
        color: varStyles.colors.text,
        fontSize: 24,
        backgroundColor: varStyles.colors.contraste,
        textAlign: 'center'
    },
    nomeAtual: {
        fontSize: 18,
        color: 'black'
    },
    body: {
        flex:6,
        backgroundColor: varStyles.colors.contrasteDark,
    },
    button: {
        width: '80%',
        height:50,
        margin: '2%',
        backgroundColor: varStyles.colors.contraste,
        borderRadius: 15,
        justifyContent:'center',
        alignItems: 'center',
    },
    buttonText: {
        color: varStyles.colors.text
    }
})