import { StyleSheet } from 'react-native'
import varStyles from '../../varStyles'

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: varStyles.colors.principal,
    },
    image: {
        width:'90%',
        height:'70%'
    },
    title:{
        color: varStyles.colors.text,
        fontSize: 36
    },
    header:{
        flex:4,
        justifyContent:'center',
        alignItems: 'center',
        width: '100%'
    },
    body:{
        flex: 2,
        flexDirection: 'row'
    },
    button: {
        width: '40%',
        margin:10,
        height:50,
        backgroundColor: varStyles.colors.secundaria,
        borderRadius: 15,
        justifyContent:'center',
        alignItems: 'center',
    },
    buttonText: {
        color: varStyles.colors.text,
        fontSize: 14,
    },
    


})