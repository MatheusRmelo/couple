import axios from 'axios'
import { Alert } from 'react-native'

function showError(err) {
    Alert.alert('Ops! Ocorreu um problema', `Mensagem: ${err}` )
}

function showSuccess(msg){
    Alert.alert('Sucesso!', msg)
}

const api = axios.create({
    baseURL: 'http://192.168.2.104:3333'
})

export { showError, showSuccess }
export default api
