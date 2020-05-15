import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#E74C3C',
    },
    header:{
        flex:4,
        backgroundColor: '#CACFD2',
        margin: 50,
        borderRadius: 15,
        borderWidth: 5,
        borderColor: 'rgba(192,57,43,0.2)',
        justifyContent:'center',
        alignItems: 'center',
        width: '70%'
    },
    body:{
        flex: 2,
        flexDirection: 'row'
    },
    button: {
        width: 150,
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
    textHeader: {
        fontSize: 20,
        fontWeight: 'bold'
    }


})