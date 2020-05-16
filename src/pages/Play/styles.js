import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#E74C3C',
    }, 
    button: {
        width: 200,
        margin:10,
        height:50,
        backgroundColor:'#7B241C',
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
    players: {
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    player: {
        flex:1
    }



})