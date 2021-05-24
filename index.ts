import {AppRegistry} from 'react-native';
// @ts-ignore
import {name as appName} from './app.json';

import {initializeDataLayer} from './src/data/DataLayer';
import {initializeDomainLayer} from './src/domain/DomainLayer';
import {initializePresentationLayer} from './src/presentation/PresentationLayer';

initializeDataLayer();
const {store} = initializeDomainLayer();
const App = initializePresentationLayer(store);

AppRegistry.registerComponent(appName, () => App);
