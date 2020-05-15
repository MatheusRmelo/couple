/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import RegisterOrLogin from './src/pages/RegisterOrLogin'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => RegisterOrLogin);
