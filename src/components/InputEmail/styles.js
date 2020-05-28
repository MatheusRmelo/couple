import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.7)'
    },
    container: {
        backgroundColor: '#FFF',
    },
    header: {
        backgroundColor: '#E74C3C',
        color: '#fff',
        textAlign: 'center',
        padding: 15,
        fontSize: 18,
    },
    input:{
        //fontFamily: 'Lato',
        height: 50,
        margin:15,
        fontSize: 20,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderColor: '#E3E3E3',
        borderRadius: 6,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    button: {
        margin:20,
        marginRight: 30,
        color: '#e4e4e4',
        
    },
    erro: {
        color: 'red',
        fontSize:15,
        //fontFamily: commonStyles.fontFamily,
        marginLeft: '10%'
    }
})