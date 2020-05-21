import { StyleSheet } from 'react-native'
import varStyles from '../../varStyles'
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: varStyles.colors.contrasteDark,
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
        backgroundColor:  varStyles.colors.contraste,
        textAlign: 'center'
    },
    nomeAtual: {
        fontSize: 18,
        color: varStyles.colors.text,
    },
    nomeItem: {
        fontSize: 18,
        color: 'black',
        marginLeft: 10
    },
    body:{
        flex:6,
        marginTop: 10
    },
    titleCards:{
        color: varStyles.colors.text,
        fontSize: 24,
        marginLeft: 20,
        textAlign:'center'
    },
    item: {
        backgroundColor: varStyles.colors.contrasteDark,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius:18,
        width: 150,
        height:'100%',
        justifyContent:'space-between',
        flex:1
    },
    imageCard: {
        width: 50,
        height: 50, 
    },
    dados:{
        backgroundColor:'#FFFFFF',
        width:'100%',
    },
    bottom: {
        width:'100%',
    },
    title: {
        fontSize: 32,
    },
    items: {
        backgroundColor: varStyles.colors.contrasteDark,
        marginVertical: 8,
        borderTopLeftRadius:5,
        borderBottomLeftRadius:5,
    },
    item2:{
        height:'70%'
    }



})