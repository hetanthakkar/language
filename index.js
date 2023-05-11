/**
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import App from './App';
import {name as appName} from './app.json';
// import './i18';
import './src/constants/DCSLocalize';
import store from './src/redux/store';
import {ProfileProvider} from './src/util/LanguageContext';

const AppRedux = () => (
  <Provider store={store}>
    <ProfileProvider>
      <NavigationContainer>
        <App />
      </NavigationContainer>
    </ProfileProvider>
  </Provider>
);

AppRegistry.registerComponent(appName, () => AppRedux);
