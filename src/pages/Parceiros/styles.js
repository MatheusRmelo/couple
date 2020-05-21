import { StyleSheet } from 'react-native'
import varStyles from '../../varStyles'

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        backgroundColor: '#122330',
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
        backgroundColor: varStyles.colors.secundaria,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    image: {
        width: '20%',
        height: '100%',
        marginHorizontal: '15%',
    },
    titlePage:{
        color: varStyles.colors.text,
        fontSize: 24,
        backgroundColor: varStyles.colors.secundaria,
        textAlign: 'center'
    },
    nomeAtual: {
        fontSize: 18,
        color: varStyles.colors.text
    },
    body: {
        flex:7,
        backgroundColor: varStyles.colors.principal,
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