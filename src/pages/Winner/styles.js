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
        justifyContent:'space-evenly',
        alignItems: 'center',
        flexDirection: 'row'
    },
    buttonText: {
        color: '#FFF',
        fontSize:15,
    },
    footer:{
        marginTop:20,
        flex:2,
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    header:{
        flex:5,
        backgroundColor: varStyles.colors.text,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 15,
        borderRadius:18
    },
    body:{
        flex:6,
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '40%',
        height: '80%',
        marginHorizontal: '15%',
    },
    title: {
        fontSize: 24
    },
    items: {
        backgroundColor: varStyles.colors.text,
        borderRadius: 18,
        width: '90%',
        justifyContent: 'center',
        margin: 5
    },
    item: {
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row' 
    },
    titleItem: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold'
    },
    options: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleOption: {
        fontSize: 24
    },
    correct: {
        fontSize: 18,
        color: 'green',
        margin: 10
    },
    wrong: {
        fontSize: 18,
        color: 'red',
        margin: 10
    }
})