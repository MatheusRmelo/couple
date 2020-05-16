import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import RegisterOrLogin from './pages/RegisterOrLogin'
import Login from './pages/Login'
import Register from './pages/Register'

const authRoutes = {
    Login: Login,
    RegisterOrLogin: RegisterOrLogin,
    Register: Register
}
const authNavigator = createStackNavigator(authRoutes, {
    initialRouteName: 'RegisterOrLogin'
})

export default createAppContainer(authNavigator)