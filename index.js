/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import App from './router';
// import App from './Main'
import {name as AppName} from './app.json';



AppRegistry.registerComponent(AppName, () => App);
